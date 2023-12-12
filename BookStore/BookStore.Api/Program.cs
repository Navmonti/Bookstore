using BookStore.Application.Services;
using BookStore.Domain.IRepositories;
using BookStore.Domain.IServices;
using BookStore.Infrastructure.DatabaseContext;
using BookStore.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

 
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<BookStoreDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("BookStoreContext"));
});


///Repositories Mapping
builder.Services.AddScoped<IBookRepository, BookRepository>(); 

///Services Mapping
builder.Services.AddScoped<IBookService, BookService>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
