using BookStore.Domain.Domain;
using BookStore.Infrastructure.DatabaseContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Infrastructure.Initialization
{
    public static class SeedBook
    {
        public static void Init(ModelBuilder modelBuilder ,BookStoreDbContext context)
        {
            if (!context.Books.Any())
            {
                modelBuilder.Entity<Book>().HasData(new Book
                {
                    Title = "The Catcher in the Rye",
                    Price = 11.99m,
                    Category = "Coming of Age",
                    Description = "J.D. Salinger's classic about adolescence.",
                    CreatedDate = DateTime.Now
                },
                   new Book
                   {
                       Title = "The Lord of the Rings",
                       Price = 22.99m,
                       Category = "Fantasy",
                       Description = "J.R.R. Tolkien's epic fantasy trilogy.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "Brave New World",
                       Price = 13.99m,
                       Category = "Dystopian",
                       Description = "Aldous Huxley's vision of a future society.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Da Vinci Code",
                       Price = 15.99m,
                       Category = "Mystery",
                       Description = "Dan Brown's thrilling mystery novel.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Alchemist",
                       Price = 9.99m,
                       Category = "Adventure",
                       Description = "Paulo Coelho's inspiring tale of a journey.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "Frankenstein",
                       Price = 12.99m,
                       Category = "Gothic Horror",
                       Description = "Mary Shelley's classic tale of science and creation.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Road",
                       Price = 14.99m,
                       Category = "Post-Apocalyptic",
                       Description = "Cormac McCarthy's haunting post-apocalyptic story.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Girl with the Dragon Tattoo",
                       Price = 16.99m,
                       Category = "Mystery",
                       Description = "Stieg Larsson's gripping mystery-thriller.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Shining",
                       Price = 11.99m,
                       Category = "Horror",
                       Description = "Stephen King's chilling tale of the Overlook Hotel.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Art of War",
                       Price = 10.99m,
                       Category = "Philosophy",
                       Description = "Sun Tzu's classic treatise on strategy.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Hunger Games",
                       Price = 14.99m,
                       Category = "Dystopian",
                       Description = "Suzanne Collins' dystopian trilogy.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "Crime and Punishment",
                       Price = 12.99m,
                       Category = "Psychological Thriller",
                       Description = "Fyodor Dostoevsky's exploration of guilt and redemption.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "Moby-Dick",
                       Price = 13.99m,
                       Category = "Adventure",
                       Description = "Herman Melville's epic tale of Captain Ahab and the white whale.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Odyssey",
                       Price = 10.99m,
                       Category = "Epic Poetry",
                       Description = "Homer's ancient Greek epic.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Count of Monte Cristo",
                       Price = 15.99m,
                       Category = "Adventure",
                       Description = "Alexandre Dumas' swashbuckling tale of revenge.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "War and Peace",
                       Price = 19.99m,
                       Category = "Historical Fiction",
                       Description = "Leo Tolstoy's epic novel of Russian society.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "Wuthering Heights",
                       Price = 11.99m,
                       Category = "Gothic Romance",
                       Description = "Emily Brontë's haunting love story on the moors.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Little Prince",
                       Price = 9.99m,
                       Category = "Children's Literature",
                       Description = "Antoine de Saint-Exupéry's beloved tale of friendship and imagination.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Sun Also Rises",
                       Price = 12.99m,
                       Category = "Modernist Literature",
                       Description = "Ernest Hemingway's novel of the 'Lost Generation.'",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Grapes of Wrath",
                       Price = 14.99m,
                       Category = "Historical Fiction",
                       Description = "John Steinbeck's Dust Bowl epic.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "Fahrenheit 451",
                       Price = 10.99m,
                       Category = "Dystopian",
                       Description = "Ray Bradbury's warning against censorship and suppression of books.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Divine Comedy",
                       Price = 13.99m,
                       Category = "Epic Poetry",
                       Description = "Dante Alighieri's journey through Hell, Purgatory, and Heaven.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Great Expectations",
                       Price = 12.99m,
                       Category = "Classic",
                       Description = "Charles Dickens' coming-of-age novel.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Outsiders",
                       Price = 11.99m,
                       Category = "Young Adult",
                       Description = "S.E. Hinton's novel of youth and class struggles.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Hitchhiker's Guide to the Galaxy",
                       Price = 12.99m,
                       Category = "Science Fiction",
                       Description = "Douglas Adams' comedic space adventure.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Scarlet Letter",
                       Price = 11.99m,
                       Category = "Historical Fiction",
                       Description = "Nathaniel Hawthorne's tale of sin and redemption.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Canterbury Tales",
                       Price = 13.99m,
                       Category = "Medieval Poetry",
                       Description = "Geoffrey Chaucer's collection of stories told by pilgrims.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Color Purple",
                       Price = 12.99m,
                       Category = "African American Literature",
                       Description = "Alice Walker's powerful story of Celie's life in the South.",
                       CreatedDate = DateTime.Now
                   },
                   new Book
                   {
                       Title = "The Time Traveler's Wife",
                       Price = 11.99m,
                       Category = "Science Fiction",
                       Description = "Audrey Niffenegger's tale of love and time travel.",
                       CreatedDate = DateTime.Now
                   });
            }
        }
    }
}
