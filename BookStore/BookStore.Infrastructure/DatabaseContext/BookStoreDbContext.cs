using BookStore.Domain.Domain;
using BookStore.Infrastructure.Initialization;
using Microsoft.EntityFrameworkCore;

namespace BookStore.Infrastructure.DatabaseContext
{
    public class BookStoreDbContext : DbContext
    {
        public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options)
          : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
        }

        public DbSet<Book> Books { get; set; }
    }
}
