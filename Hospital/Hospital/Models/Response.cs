using System;
namespace Hospital.Models
{
    public class Response
    {
        public bool Success { get; set; }

        public int StatusCode { get; set; }

        public bool ErrorMessage { get; set; }
    }
}
