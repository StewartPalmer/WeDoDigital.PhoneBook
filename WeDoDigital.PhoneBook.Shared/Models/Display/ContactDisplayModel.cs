using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeDoDigital.PhoneBook.Shared.Models.Display
{
    public class ContactDisplayModel
    {
        public Guid Id { get; set; }

        public string Forename { get; set; }

        public string  Surname { get; set; }

        public string ContactNumber { get; set; }
    }
}
