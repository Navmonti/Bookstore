using BookStore.Domain.Domain;
using BookStore.Domain.IRepositories; 

namespace BookStore.Domain.IServices
{
    public interface IBookService : IGenericRepository<Book>
    {
    }
}
