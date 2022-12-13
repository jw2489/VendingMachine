using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VendingMachine.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly ILogger<TransactionController> _logger;

        private List<Transaction> TransactionList = new List<Transaction>();

        public TransactionController(ILogger<TransactionController> logger)
        {
            _logger = logger;
        }

        // POST api/<TransactionController>
        [HttpPost()]
        public void Post([FromBody] string value)
        {
            Transaction newTransaction = JsonSerializer.Deserialize(value, typeof(Transaction)) as Transaction;
            if (newTransaction != null)
            {
                TransactionList.Add(newTransaction);
            }
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return new List<Product>();
        }
    }
}
