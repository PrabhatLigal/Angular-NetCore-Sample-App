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
        }

        void Seed()
        {

            //Patients.AddRange(new List<Patient>() {
            //new Patient { Id = 1, Name = "Dr John Chen"},

            //});
            this.SaveChanges();
        }
    }
}
