using System;
using System.ComponentModel.DataAnnotations;

namespace Hospital.Models
{
    public class Patient
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Sex { get; set; }

        public int Age { get; set; }

        public string Physician { get; set; }

        //public DateTime? AppointmentTime { get; set; }

        public string Diagnosis { get; set; }

        public string Allegries { get; set; }
    }
}