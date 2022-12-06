using System.ComponentModel.DataAnnotations;


namespace WeDoDigital.PhoneBook.Shared.Models.Display
{
    public class UpdateContactModel
    {
        [Required]
        public Guid Id { get; set; }
        public string Forename { get; set; }

        [Required]
        public string Surname { get; set; }

        [Phone]
        [Required]
        public string ContactNumber { get; set; }
    }
}
