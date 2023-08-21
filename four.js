const products =[
    {name:"Laptop", price:120000},
    {name:"Mobile", price:90000},
    {name:"Laptop Bag", price:20000},
    {name:"Smart Watch", price:20000},
    {name:"Mobile Charger", price:1500}
];

let maxValue = {name:"", price: 0};
let minValue = {name:"", price: Number.MAX_VALUE};

for(let product of products) {
    if(product.price > maxValue.price) {
        maxValue = product;
    }
    if(product.price < maxValue.price) {
        minValue = product;
    }
}

console.log(
    `The product with maximum ammount is ${maxValue.name} which is priced at Rs. ${maxValue.price}`
  );
  console.log(
    `The product with minimum ammount is ${minValue.name} which is priced at Rs. ${minValue.price}`
  );