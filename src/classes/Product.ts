class Product {
  name: String;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getPrice() {
    return this.price;
  }
  getName() {
    return this.name;
  }
  getCategory() {
    return this.category;
  }

  setName(name: string) {
    this.name = name;
  }
  setPrice(price: number) {
    this.price = price;
  }
  setCategory(category: string) {
    this.category = category;
  }

  static isEqual(product1: Product, product2: Product) {
    return (
      product1.name === product2.name &&
      product1.price === product2.price &&
      product1.category === product2.category
    );
  }
}
