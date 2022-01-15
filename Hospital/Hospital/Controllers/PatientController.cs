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
    [Route("[controller]")]
    public class PatientController : ControllerBase
    {
        private DBContext _context;
        private readonly ILogger<PatientController> _logger;

        public PatientController(ILogger<PatientController> logger)
        {
            _logger = logger;
            //Remove Later
            var options = new DbContextOptionsBuilder<DBContext>()
                   .UseInMemoryDatabase(databaseName: "BirthDB")
                   .Options;

            _context = new DBContext(options);
        }

        [HttpGet]
        public IEnumerable<Patient> GetAll()
        {
            return _context.Patients.ToArray();
        }

        [HttpPost]
        public Response Create(long id)
        {
            var patient = _context.Patients.Single(x => x.Id == id);
            if (patient == null)
            {
                _context.Add(patient);
                _context.SaveChanges();
                return new Response() { Success = true };
            }
            return new Response() { Success = false };
        }

        [HttpDelete]
        public Response Delete(long id)
        {
            var patient = _context.Patients.Single(x => x.Id == id);
            if (patient != null)
            {
                _context.Remove(patient);
                _context.SaveChanges();
                return new Response() { Success = true };
            }
            return new Response() { Success = false };
        }

        [HttpPut]
        public Response Update(Patient p)
        {
            var patient = _context.Patients.Single(x => p.Id == x.Id);
            if (patient != null)
            {
                _context.Update(patient);
                _context.SaveChanges();
                return new Response() { Success = true };
            }
            return new Response() { Success = false };
        }

    }
}
