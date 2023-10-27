using BookStore.Domain.Domain;
using BookStore.Domain.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BooksController(IBookService bookService)
         =>   _bookService = _bookService;


        [HttpPost]
        public async Task<IActionResult> AddBook(Book model) {
            return Ok(await _bookService.AddAsync(model));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateBook(Book model)
        {
            return Ok(await _bookService.AddAsync(model));
        }

        [HttpDelete("bookId")]
        public async Task<IActionResult> DeleteBook(int bookId)
        {
            return Ok(await _bookService.DeleteAsync(bookId));
        }

        [HttpGet("bookId")]
        public async Task<IActionResult> GetByBookId(int bookId)
        {
            return Ok(await _bookService.GetByIdAsync(bookId));
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBook()
        {
            return Ok(await _bookService.GetAllAsync());
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBookByPagination(int pageNumber , int pageSize)
        {
            return Ok(await _bookService.GetAllByPaginationAsync(pageNumber,pageSize));

        }
    }
}
