function createProduct(name, cost, amount){
    return{
        name: name,
        cost: cost,
        amount: amount,
        info: function(){
            alert(`${this.name} ціна ${this.cost} кількість ${this.amount}`)
        }
    }
}
function FullCost(product){
   res = product.cost * product.amount;
   alert(` Вартість ${res}`)
}
function Object(){
alert('Створити об’єкт, який містить інформацію про назву товару, ціну та кількість. Створити метод, який підраховує вартість. Реалізувати фабричну функцію для створення об’єкта.')
let stringProduct = prompt("інформацію про назву товару, ціну та кількість.");
stringProduct = stringProduct.split(" ");
let product = createProduct(stringProduct[0], stringProduct[1], stringProduct[2]);
console.log(product)
product.info();
FullCost(product);
}
