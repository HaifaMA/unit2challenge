let num1 = 4;
let num2 = 6;
let sum = num1 + num2;

console.log(sum);
let years = 5;
 years += 2;
console.log(years);

let itemPrice = 10;
itemPrice *= 2.5; 
console.log(itemPrice);

let age1 = 42;
let age2 = 34;
console.log( age1 > age2 );

let friendsName = 'Jack';
let otherName = 'John Doe';
console.log( friendsName != otherName );

let isMember = true;
let hasCupon = false;
if ( isMember || hasCupon === true ) {
    console.log( 'eligible for free shipping' );
}

let num = 2;
console.log( num != 0 );

let age = 9;
let isOldEnough = age >= 18 ? ' You are old enough to vote ' : ' You are not old enough to vote ';
console.log( isOldEnough );

let newPrice = 30;
let isOnSale = newPrice < 30 ? ' The product is on sale' : ' The product is not on nsale ';
console.log( isOnSale );
