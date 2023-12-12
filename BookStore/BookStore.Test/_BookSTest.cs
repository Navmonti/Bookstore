using BookStore.Application.Services;
using BookStore.Domain.Domain;
using BookStore.Domain.IServices;
using System.Diagnostics;

namespace BookStore.Test
{
    [TestFixture]
    public class _BookSTest
    {
        private BookService _bookService;
        int objBookId = 0;
        Book objBook = new Book()
        {
            Title = "The Catcher in the Rye",
            Price = 11.99m,
            Category = "Coming of Age",
            Description = "J.D. Salinger's classic about adolescence.",
            CreatedDate = DateTime.Now
        };

        Book objUpdateBook = new Book()
        {
            Title = "The Catcher in the Rye",
            Price = 11.00m,
            Category = "Coming of Age",
            Description = "J.D. Salinger's classic about adolescence.",
            CreatedDate = DateTime.Now
        };

        [SetUp]
        public void SetUp()
        {
            _bookService = new BookService();
           
        }

        [Test]
        public void Add_New_Book()
        {
            //Arrange
            Book objBook = new Book()
            {
                Title = "The Catcher in the Rye",
                Price = 11.99m,
                Category = "Coming of Age",
                Description = "J.D. Salinger's classic about adolescence.",
                CreatedDate = DateTime.Now
            };
            var result = _bookService.AddAsync(objBook);
            objBookId = result.Id;
            Assert.AreNotEqual(0, objBookId);
            Assert.Pass();
        } 

        [Test]
        public void Get_Book_By_BookId()
        {
            //Arrange
            var result = _bookService.GetByIdAsync(objBookId);
            Assert.NotNull(result);
            Assert.Pass();
        }

        [Test]
        public void Update_Exist_Book()
        {
            var book = _bookService.GetByIdAsync(objBookId);

            book.Result.Price = objUpdateBook.Price;
            var result = _bookService.AddAsync(objBook);
            objBookId = result.Id;
            Assert.AreNotEqual(0, objBookId);
            Assert.Pass();
        }
    }
}