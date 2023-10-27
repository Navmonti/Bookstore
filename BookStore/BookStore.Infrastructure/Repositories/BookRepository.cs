using BookStore.Domain.Domain;
using BookStore.Domain.IRepositories;
using BookStore.Infrastructure.DatabaseContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Infrastructure.Repositories
{
    public class BookRepository : GenericRepository<Book>, IBookRepository
    {
        private readonly BookStoreDbContext _dbContext;
        public BookRepository(BookStoreDbContext dbContext) : base(dbContext)
            => _dbContext = dbContext;

        public async Task<Book> GetBookByTitleAsync(string title)
          => await _dbContext.Set<Book>().FirstOrDefaultAsync(x => x.Title == title);
    }
}
