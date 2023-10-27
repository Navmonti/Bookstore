using System.ComponentModel.DataAnnotations;

namespace BookStore.Domain.Domain
{
    public class Book
    { 
        [Key]
        public int BookId { get; set; }

        [Required]
        public string Title { get; set; } = "";

        [Required]
        public decimal Price { get; set; }

        [Required]
        public string Category { get; set; } = "";
        
        public string Description { get; set; } = "";

        [Required]
        public DateTime CreatedDate { get; set; }
    }
}
