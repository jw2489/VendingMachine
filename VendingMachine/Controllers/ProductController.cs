using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace VendingMachine.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<ProductController> _logger;

        // These should be stored in a database along with image data, not image uri
        private Product[] products = new Product[]
            {
                new Product() { ProductID = new Guid("D191DA4C-C4C2-4FA5-95E9-3D5B0006157D"), Description = "Soda", Price = 0.95m, InStockCount = 10, ImageUri = "https://m.media-amazon.com/images/I/51qWOjnl2mL._SX385_.jpg" },
                new Product() { ProductID = new Guid("FE5C21F7-580F-443D-AB8C-1BDF63E0FB77"), Description = "Candy Bar", Price = 0.60m, InStockCount = 9, ImageUri = "https://www.snickers.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf616/files/migrate-product-files/dryeqrv2efldaaoyceat.png" },
                new Product() { ProductID = new Guid("54723FF1-3F81-4A6D-A22C-0C84BAC708FA"), Description = "Chips", Price = 0.99m, InStockCount = 8, ImageUri = "https://m.media-amazon.com/images/I/41ICZ6USaCL.jpg" }
            };

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return this.products;
        }

        [HttpGet("{id}")]
        public Product Get(string id)
        {
            Guid productID = Guid.Parse(id);

            Product product = this.products.FirstOrDefault(p => p.ProductID == productID);

            return product;
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
            
        }
    }
}
