using System.ComponentModel.DataAnnotations;

namespace AspNetCoreAPI.Models
{
    public class Shoes
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public int? Price { get; set; }
        public float? Rating { get; set; }
        public string? UrlPicture { get; set; }
        public string? State { get; set; }
        public bool? Like { get; set; }
    }
}
