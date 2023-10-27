using BookStore.Domain.Domain;
namespace BookStore.Domain.IRepositories
{
    public interface IBookRepository : IGenericRepository<Book>
    {
        Task<Book> GetBookByTitleAsync(string title);
    }
}
