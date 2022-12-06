using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace WeDoDigital.PhoneBook.Shared.Models.Display
{
    public class NewContactModel
    {
        public string Forname { get; set; }

        [Required]
        public string Surname { get; set; }

        [Phone]
        [Required]
        public string ContactNumber { get; set; }
    }
}
