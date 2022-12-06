using WeDoDigital.PhoneBook.Shared.Models.Display;

namespace WeDoDigital.PhoneBook.Services
{
    public interface IContactsServices
    {
        Task DeleteContact(Guid id);
        Task<IList<ContactDisplayModel>?> GetContacts(string? surname);
        Task<ContactDisplayModel?> GetById(Guid id);
        Task<Guid> AddContact(NewContactModel model);     
        Task UpdateContact(UpdateContactModel model);
    }
}