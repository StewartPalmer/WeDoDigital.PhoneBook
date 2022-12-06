using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeDoDigital.PhoneBook.Services;
using WeDoDigital.PhoneBook.Shared.Models.Display;

namespace WeDoDigital.PhoneBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactsServices _contactServices;

        public ContactsController(IContactsServices contactServices)
        {
            _contactServices = contactServices;
        }


        [HttpGet]
        public async Task<IActionResult> GetContactsAsync(string? surname)            
        {       
            var  response = await _contactServices.GetContacts(surname);

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var rseponse = await  _contactServices.GetById(id);

            if(rseponse == null) return NotFound(); 

            return Ok(rseponse);
        }  


        [HttpPost]
        public async Task<IActionResult> AddContactAsync(NewContactModel model)
        {
            await _contactServices.AddContact(model);

            return Ok();
        }

        [HttpPatch]
        public async Task<IActionResult> UpdateContactAsync(UpdateContactModel model)
        {
            await _contactServices.UpdateContact(model);

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteContact(Guid id)
        {
            _contactServices.DeleteContact(id);

            return Ok();
        }
    }
}
