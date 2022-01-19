using System;
using System.Collections.Generic;
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

        public async void Seed()
        {
            if (await Patients.CountAsync() < 1)
            {

                Patients.AddRange(new List<Patient>() {
                new Patient { Name = "Patient A", Sex="Male", Age=20, Physician="Dr Chen" },
                new Patient { Name = "Patient B", Sex="Male", Age=20, Physician="Dr Chen" },
                new Patient { Name = "Patient C", Sex="Female", Age=20, Physician="Dr Chen" },
                new Patient { Name = "Patient D", Sex="Male", Age=20, Physician="Dr Chen" },
                new Patient { Name = "Patient E", Sex="Female", Age=20, Physician="Dr Chen" },

            });
                this.SaveChanges();
            }

        }
    }
}
