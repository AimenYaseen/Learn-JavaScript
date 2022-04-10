// New features had introduced in ES6 regarding objects which simplifies code
// ObjectLiterals || Rules
// 1. When the key and value has identical name condensed it down to varianble name
// 2. IF the key value is a functon just omit the : funtion and start from ()
// we write shorter key value pairs first or aat left side

const createBookShop = (inventory) => {
  return {
    inventory, // 1. inventory: inventory,
    //2. inventoryValue: function () {
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    //2. priceForTitle: function (title) {
    priceForTitle(title) {
      return this.inventory.find((book) => book.title === title).price;
    },
  };
};

const inventory = [
  { title: "Mushaf", price: 15 },
  { title: "peer-e-kamil", price: 25 },
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Mushaf"));
