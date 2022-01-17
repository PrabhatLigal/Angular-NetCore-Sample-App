using System;
using System.Collections.Generic;
using Hospital.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hospital.DB
{
    public class DBContext : DbContext
    {
        public DbSet<Patient> Patients { get; set; }


        public DBContext(DbContextOptions options) : base(options)
        {
            Seed();
        }

        async void Seed()
        {
            if (await Patients.CountAsync() < 1)
            {

                Patients.AddRange(new List<Patient>() {
                new Patient { Id = 1, Name = "Patient A", Sex="M", BirthDate= DateTime.Now.AddYears(19), Physician="Dr Chen" },
                new Patient { Id = 2, Name = "Patient B", Sex="M", BirthDate= DateTime.Now.AddYears(21), Physician="Dr Chen" },
                new Patient { Id = 3, Name = "Patient C", Sex="F", BirthDate= DateTime.Now.AddYears(78), Physician="Dr Chen" },
                new Patient { Id = 4, Name = "Patient D", Sex="M", BirthDate= DateTime.Now.AddYears(29), Physician="Dr Chen" },
                new Patient { Id = 5, Name = "Patient E", Sex="F", BirthDate= DateTime.Now.AddYears(49), Physician="Dr Chen" },

            });
                this.SaveChanges();
            }

        }
    }
}
