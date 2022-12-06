using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;
using WeDoDigital.PhoneBook.Shared.Models.DTO;

namespace WeDoDigital.PhoneBook.Data
{
    public class ContactsContext : DbContext
    {
        public ContactsContext()
        {
        }

        public ContactsContext(DbContextOptions<ContactsContext> options)
            : base(options)
        {
        }


        public DbSet<ContactEntityModel> Contacts { get; set; }

    }
}