using System;

namespace HospitalApi.Models
{
    public class Patient
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string Sex { get; set; }

        public DateTime? BirthDate { get; set; }

        public string Physician { get; set; }

        public DateTime? ScheduleTime { get; set; }

        public DateTime? AdmissionTime { get; set; }

        public DateTime? DischargeTime { get; set; }

        public string AdmittedRoom { get; set; }

        public string Diagonsis { get; set; }
    }
}