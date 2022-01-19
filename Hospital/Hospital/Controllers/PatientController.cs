using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hospital.DB;
using Hospital.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Hospital.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PatientController : ControllerBase
    {
        private DBContext _context;
        public PatientController(DBContext context)
        {
            _context = context;
            // Only for local testing
#if DEBUG
            _context.Seed();
#endif
        }

        //GET: api/v1/patient
        [HttpGet]
        public IEnumerable<Patient> GetAll()
        {
            return _context.Patients.ToArray();
        }

        // GET api/v1/patient/5
        [HttpGet("{id}")]
        public Patient Get(int id)
        {
            return _context.Patients.FirstOrDefault(x => x.Id == id);
        }

        // POST api/v1/patient
        [HttpPost]
        public Response Create([FromBody] Patient patient)
        {
            try
            {
                _context.Add(patient);
                _context.SaveChanges();
                return new Response() { Success = true };

            }catch(Exception ex)
            {
                return new Response() { Success = false , ErrorMessage= "Already Exists"};
            }
        }

        // DELETE api/v1/patient/5
        [HttpDelete("{id}")]
        public Response Delete(long id)
        {
            var patient = _context.Patients.FirstOrDefault(x => x.Id == id);
            if (patient != null)
            {
                _context.Remove(patient);
                _context.SaveChanges();
                return new Response() { Success = true };
            }
            return new Response() { Success = false,ErrorMessage="Record not found" };
        }

        [HttpPut("{id}")]
        public Response Update(int id, [FromBody] Patient patient)
        {
            var exists = _context.Patients.Any(x => id == x.Id);
            if (exists)
            {
                _context.Update(patient);
                _context.SaveChanges();
                return new Response() { Success = true };
            }
            return new Response() { Success = false, ErrorMessage="Doesnot Exisr" };
        }

    }
}
