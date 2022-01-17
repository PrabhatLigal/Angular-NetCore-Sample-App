using System;
namespace Hospital.Models
{
    public class Response
    {
        public bool Success { get; set; }

        public int StatusCode { get; set; }

        public string ErrorMessage { get; set; }
    }
}
