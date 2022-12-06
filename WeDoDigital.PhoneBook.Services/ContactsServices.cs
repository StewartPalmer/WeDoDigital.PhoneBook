using AutoMapper;
using Microsoft.EntityFrameworkCore;
using WeDoDigital.PhoneBook.Data;
using WeDoDigital.PhoneBook.Shared.Models.Display;
using WeDoDigital.PhoneBook.Shared.Models.DTO;

namespace WeDoDigital.PhoneBook.Services
{
    public class ContactsServices : IContactsServices
    {
        private readonly ContactsContext _contactsContext;
        private readonly IMapper _mapper;
        public ContactsServices(ContactsContext contactsContext, IMapper mapper)
        {
            _contactsContext = contactsContext;
            _mapper = mapper;
        }

        public async Task<ContactDisplayModel?> GetById(Guid id)
        {
            var contact = await _contactsContext.Contacts.FirstOrDefaultAsync(c => c.Id == id);

            if (contact == null) return null;

            var response = _mapper.Map<ContactDisplayModel>(contact);

            return response;
        }

        public async Task<IList<ContactDisplayModel>?> GetContacts(string? surname)
        {
            var contacts = new List<ContactEntityModel>();

            if (!string.IsNullOrEmpty(surname))
            {
                contacts = await _contactsContext.Contacts.Where(x => x.Surname.Contains(surname, StringComparison.CurrentCultureIgnoreCase)).ToListAsync();
            }
            else
            {
                contacts = await _contactsContext.Contacts.ToListAsync();
            }

            if (!contacts.Any()) return null;

            var response = _mapper.Map<IList<ContactDisplayModel>>(contacts);

            return response;
        }    

        public async Task<Guid> AddContact(NewContactModel model)
        {
            var data = new ContactEntityModel
            {
                UpdatedDate = DateTime.Now,
                CreatedDate = DateTime.Now,
            };

            _mapper.Map(model, data);

            await _contactsContext.AddAsync(data);

            await _contactsContext.SaveChangesAsync();

            return data.Id;
        }

        public async Task UpdateContact(UpdateContactModel model)
        {
            var contact = await _contactsContext.Contacts.FirstOrDefaultAsync(x => x.Id == model.Id);

            if (contact == null) return;

            _mapper.Map(model, contact);

            contact.UpdatedDate = DateTime.Now;

            _contactsContext.Contacts.Update(contact);

            await _contactsContext.SaveChangesAsync();

        }

        public async Task DeleteContact(Guid id)
        {
            var contact = await _contactsContext.Contacts.FirstOrDefaultAsync(x => x.Id == id);

            if (contact == null) return;

            _contactsContext.Contacts.Remove(contact);

           await _contactsContext.SaveChangesAsync();
            
        }
    }
}