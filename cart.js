class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(itemName) {
      this.items.push(itemName);
    }
  
    getTotal() {
      const priceTable = {
        Apple: 35,
        Banana: 20,
        Melon: 50, 
        Lime: 15    
      };
  
      const counts = this.items.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
      }, {});
  
      let totalPaisa = 0;
      for (const [item, count] of Object.entries(counts)) {
        switch (item) {
          case 'Melon':
            totalPaisa += Math.ceil(count / 2) * priceTable.Melon;
            break;
          case 'Lime':
            totalPaisa += (Math.floor(count / 3) * 2 + (count % 3)) * priceTable.Lime;
            break;
          default:
            totalPaisa += priceTable[item] * count;
        }
      }
  
      return totalPaisa/100; 
    }
  
    getTotalFormattedINR() {
      const paisa = this.getTotal();
      const rupees = (paisa).toFixed(2);
      return `₹${rupees}`; 
    }
  
    viewCart() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
    }
  }
  
  module.exports = ShoppingCart;