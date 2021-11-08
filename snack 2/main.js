// Snack 2
// A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
// Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]

arr = [1,2,3,4,5];

const newArr = arr.map((element) =>{
return element * element;
});
console.log(newArr)