class MObileBrand {
  brandName;
  ModelName;
  price;
  constructor(x, y, z) {
    this.brandName = x;
    this.ModelName = y;
    this.price = z;
  }
  display() {
    console.log(this.ModelName + " " + this.brandName + " " + this.price);
  }
}
var apple = new MObileBrand("mobileApple", "iPhone", 10000);

apple.display();

var iphone = new MObileBrand("iphone", "iPhone", 10000);

iphone.display();
