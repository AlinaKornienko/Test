
'use strict'

let a = 3
const b = 5

console.log('значение переменной a', a);
console.log(b);

console.log(typeof a);


function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch (type) { // Change this line
     case starter:// Change this line
        price = 0; // Change this line
        break;
  
     case professional:// Change this line
        price = 20; // Change this line
        break;
  
     case organization:// Change this line
        price = 50; // Change this line
        break;
    }
  
    // Change code above this line
    return price;
  }