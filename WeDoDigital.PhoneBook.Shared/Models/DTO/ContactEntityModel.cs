using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeDoDigital.PhoneBook.Shared.Models.DTO
{
    public class ContactEntityModel: BaseEntityModel
    {
       
        public string Forename { get; set; }

        public string Surname { get; set; }

        [Phone]
        public string ContactNumber { get; set; }

    }
}
