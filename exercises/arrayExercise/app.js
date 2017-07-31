var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

vegetables.pop();
console.log("Buy only", vegetables + " from the shopping list." );
console.log("Vegetables", vegetables);

fruit.shift();
console.log("Fruit", fruit);

var indexNum = fruit.indexOf("orange");
console.log("Orange sits at #" + fruit.indexOf("orange"));

fruit.push(indexNum);
console.log(fruit);

console.log(vegetables.length);

vegetables.push(3);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

// use splice to add or remove items from the middle of an array
food.splice(4, 2);
console.log(food);

var revfood = food.reverse();
console.log(food);

var printToConsole = revfood.toString();
console.log(printToConsole);