using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Hospital.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hospital.DB
{
    public class DBContext : DbContext
    {
        public DbSet<Patient> Patients { get; set; }

        public DBContext(DbContextOptions<DBContext> options): base(options){}

        public void Seed()
        {
            // seed data on debug mode if database is empty
            if (Patients.Count() <= 0 )
            {

                Patients.AddRange(new List<Patient>() {
                new Patient { Name = "Patient A", Sex="Male", Age=20, Physician="Dr Chen" },
                new Patient { Name = "Patient B", Sex="Male", Age=31, Physician="Dr Chen" },
                new Patient { Name = "Patient C", Sex="Female", Age=49, Physician="Dr Chen" },
                new Patient { Name = "Patient D", Sex="Male", Age=70, Physician="Dr Chen" },
                new Patient { Name = "Patient E", Sex="Female", Age=44, Physician="Dr Chen" },

            });
                this.SaveChanges();
            }

        }
    }
}
