// --------------------------------------
// Base Class: Product
// --------------------------------------
class Product {
  constructor(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
  }

  getCardHTML() {
    return `
      <div class="product-card">
        <img src="${this.image}" alt="${this.name}">
        <h3>${this.name}</h3>
        <p>₹${this.price}</p>
      </div>
    `;
  }
}

// --------------------------------------
// Child Class: Electronics
// --------------------------------------
class Electronics extends Product {
  constructor(name, price, image, brand) {
    super(name, price, image);
    this.brand = brand;
  }

  getCardHTML() {
    return `
      <div class="product-card electronics">
        <img src="${this.image}" alt="${this.name}">
        <h3>${this.name}</h3>
        <p>Brand: ${this.brand}</p>
        <p>₹${this.price}</p>
      </div>
    `;
  }
}

// --------------------------------------
// Child Class: Clothing
// --------------------------------------
class Clothing extends Product {
  constructor(name, price, image, size) {
    super(name, price, image);
    this.size = size;
  }

  getCardHTML() {
    return `
      <div class="product-card clothing">
        <img src="${this.image}" alt="${this.name}">
        <h3>${this.name}</h3>
        <p>Size: ${this.size}</p>
        <p>₹${this.price}</p>
      </div>
    `;
  }
}

// --------------------------------------
// Display Products
// --------------------------------------
const products = [
  new Electronics("Laptop", 55000, "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/15-3520/media-gallery/peripherals_latop_latitude_3520_gallery_3.psd?fmt=pjpg&pscan=auto&scl=1&wid=3339&hei=2291&qlt=100", "Dell"),
  new Electronics("Camera", 35000, "https://i1.adis.ws/i/canon/3011C001AA_EOS-4000D-EF-S18-55-III-BK/wi-fi-cameras?w=1500&bg=gray95", "Canon"),
  new Clothing("T-Shirt", 799, "https://slatehash.com/cdn/shop/products/VG-SH-46202792.jpg?v=1675584596&width=1946", "M"),
  new Clothing("Jacket", 1999, "https://tse3.mm.bing.net/th/id/OIP.sPRqjt2LgaWp3zsMJpBLUQHaHa?pid=Api&P=0&h=180", "L"),
];

document.querySelector("#productContainer").innerHTML =
  products.map(p => p.getCardHTML()).join("");