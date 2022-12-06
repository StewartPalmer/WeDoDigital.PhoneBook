using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WeDoDigital.PhoneBook.Shared.Models.Display;
using WeDoDigital.PhoneBook.Shared.Models.DTO;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace WeDoDigital.PhoneBook.Shared.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ContactEntityModel, ContactDisplayModel>();
            CreateMap<UpdateContactModel, ContactEntityModel>();
            CreateMap<NewContactModel, ContactEntityModel>();
               
        }
    }
    
}
