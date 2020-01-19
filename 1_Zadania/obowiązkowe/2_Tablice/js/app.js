//zad 0
function distFromAvarage(arr) {
    let average = (array) => array.reduce((a, b) => a + b) / array.length;
    let avarage = average(arr);

    let output = [];

    for(let elem of arr) {
        output.push(elem - avarage);
    }

    return output;
}

console.log(distFromAvarage([1,2,3,4,5,6,7]) );
console.log(distFromAvarage([1,1,1,1]) );
console.log(distFromAvarage([2,8,3,7]) );
//zad 1
let fruits = ['Orange', 'Apple', 'Banana'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}