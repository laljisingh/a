class product {
  name;
  price;
  qty;
  totalamount;
  static category;
  constructor(x, y, z, a, b) {
    this.name = x;
    this.price = y;
    this.qty = z;
    this.totalamount = a;
    product.category = b;
  }
  display() {
    console.log(
      this.name +
        " " +
        this.price +
        " " +
        this.qty +
        " " +
        this.totalamount +
        " " +
        product.category
    );
  }
  calTotalamt() {
    this.totalamount = this.price * this.qty;
    console.log(this.totalamount);
  }
}
var mobile = new product("mobile", 10000, 2, 0, "Electronics");
mobile.display();
mobile.calTotalamt();

var laptop = new product("laptop", 20000, 1, 0, "Electronics");
laptop.display();
laptop.calTotalamt();

var TV = new product("TV", 30000, 3, 6, "ELectronics");
TV.display();
TV.calTotalamt();

product.category = "Lalji";
laptop.display();
mobile.display();
