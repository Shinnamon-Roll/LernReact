// const colors = ["green", "blue", "yellow"];
// const [green, , yellow] = colors;
// console.log(green, yellow);

const product = {
    productName : "Computer",
    price : 30000,
    stock : 10
}

const productname = product.productName;

const {productName : productName, price : price, stock : stock} = product //Left is properties right is variables

console.log(productName);
console.log(price);
console.log(stock);