const ShoppingCart = require('./cart');

describe('ShoppingCart', () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test('calculates total for apples and bananas', () => {
    cart.addItem('Apple');
    cart.addItem('Banana');
    expect(cart.getTotal()).toBe(0.55);
  });

  test('applies Buy one get one for melons', () => {
    cart.addItem('Melon');
    cart.addItem('Melon');
    expect(cart.getTotal()).toBe(0.50);
  });

  test('applies 3-for-2 for limes', () => {
    cart.addItem('Lime');
    cart.addItem('Lime');
    cart.addItem('Lime');
    expect(cart.getTotal()).toBe(0.30);
  });

  test('combines multiple offers correctly', () => {
    cart.addItem('Melon');
    cart.addItem('Melon');
    cart.addItem('Melon');
    cart.addItem('Lime');
    cart.addItem('Lime');
    cart.addItem('Lime');
    cart.addItem('Apple');
    expect(cart.getTotal()).toBe(1.65);
  });
});
