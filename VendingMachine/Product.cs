namespace VendingMachine
{
    public class Product
    {
        public Guid ProductID { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public int InStockCount { get; set; }

        public int QuantityPurchased
        {
            get { return this.quantityPurchased; }
            set
            {
                this.quantityPurchased = value;
            }
        }
        private int quantityPurchased = 1;

        public string ImageUri { get; set; }
    }
}
