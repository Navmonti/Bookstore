using BookStore.Domain.Domain;
using BookStore.Domain.IServices;  
using BookStore.Domain.IRepositories;

namespace BookStore.Application.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;
        public BookService(IBookRepository bookRepository)
                => _bookRepository = bookRepository;

        public BookService()
        {
                
        }

        public async Task<Book> AddAsync(Book model)
        {
            try
            {
              return await _bookRepository.AddAsync(model);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public async Task<Book> UpdateAsync(Book model)
        {
            try
            {
                return await _bookRepository.UpdateAsync(model);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Book> DeleteAsync(int id)
        {
            try
            {
                return await _bookRepository.DeleteAsync(id);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
        public async Task<Book> GetByIdAsync(int id)
        {
            try
            {
                return await _bookRepository.GetByIdAsync(id);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public async Task<IEnumerable<Book>> GetAllAsync()
        {
            try
            {
                return await _bookRepository.GetAllAsync();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public async Task<IEnumerable<Book>> GetAllByPaginationAsync(int pageNumber , int pageSize)
        {
            try
            {
               return await _bookRepository.GetAllByPaginationAsync(pageNumber, pageSize);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public async Task<Book> GetBookByTitleAsync(string title)
        {
            try
            {
                return await _bookRepository.GetBookByTitleAsync(title);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
         
    }
}
