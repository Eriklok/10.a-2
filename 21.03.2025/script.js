let a = 5; 
let b = 10; 

console.log("Mainīgais a:", a);
console.log("Mainīgais b:", b);

console.log("Summa (a + b):", a + b);
console.log("Starpība (a - b):", a - b);
console.log("Reizinājums (a * b):", a * b);
console.log("Dalījums (a / b):", a / b);

console.log("a pakāpē b (a ** b):", a ** b);
console.log("Dalījuma atlikums (a % b):", a % b);

if (a > b) {
  console.log("a ir lielāks par b");
} else if (a == b) {
  console.log("a ir vienāds ar b");
} else if (b > a) {
  console.log("b ir lielāks par a");
}

switch (true) {
  case a > b:
console.log("a ir lielāks par b");
break;
 case a == b:
console.log("a ir vienāds ar b");
 break;
 case b > a:
console.log("b ir lielāks par a");
 break;
 default:
  console.log("Nezināms salīdzinājums");
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Masīvs:", array);

for (let i = 0; i < array.length; i++)
 {
    console.log("Masīva elements:", array[i]);
 }
 for (let i = array.length - 1; i >= 0; i--) 
  {    
    console.log("Masīva elements apgrieztā secībā:", array[i]);
     }