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
  
      let total = 0;
      for (const [item, count] of Object.entries(counts)) {
        switch (item) {
          case 'Melon':
            total += Math.ceil(count / 2) * priceTable.Melon; //buy one get one free offer;
            break;
          case 'Lime':
            total += (Math.floor(count / 3) * 2 + (count % 3)) * priceTable.Lime; //three for the price of two offer;
            break;
          default:
            total += priceTable[item] * count;
        }
      }
      return total
    }
  
    viewCart() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
    }
  }
  
  module.exports = ShoppingCart;