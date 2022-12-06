using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WeDoDigital.PhoneBook.Data;
using WeDoDigital.PhoneBook.Services;
using WeDoDigital.PhoneBook.Shared.Helpers;
using WeDoDigital.PhoneBook.Shared.Mapper;
using WeDoDigital.PhoneBook.Shared.Ohers;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllersWithViews();


builder.Services.AddAutoMapper(cfg => cfg.AddProfile<MappingProfile>());

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IContactsServices, ContactsServices>();

builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

builder.Services.AddDbContext<ContactsContext>(options => options.UseInMemoryDatabase(ApplicationConstants.DatabaseName));

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwaggerUI();
}

using (var serviceScope = app.Services.CreateScope())
{
    using (var context = serviceScope.ServiceProvider.GetService<ContactsContext>())
    {
        context.Contacts.AddRange(SeedDatabase.Contacts);

        context.SaveChanges();

    }
}

app.Run();
