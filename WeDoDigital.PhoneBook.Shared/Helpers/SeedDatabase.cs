using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using WeDoDigital.PhoneBook.Shared.Models.DTO;

namespace WeDoDigital.PhoneBook.Shared.Helpers
{
    public static class SeedDatabase
    {
         public static IList<ContactEntityModel> Contacts = new List<ContactEntityModel>() { new ContactEntityModel
         {
             Id= Guid.NewGuid(),
             Forename = "Jane",
             Surname = "Doe",
             CreatedDate= DateTime.Now,
             UpdatedDate= DateTime.Now,
             ContactNumber = "07700 900566"
         },
           new ContactEntityModel  {
             Id= Guid.NewGuid(),
             Forename = "John",
             Surname = "Smith",
             CreatedDate= DateTime.Now,
             UpdatedDate= DateTime.Now,
             ContactNumber = "0141 496 0379"
         } };
    }
}
