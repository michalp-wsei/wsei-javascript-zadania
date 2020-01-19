// zad 1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

console.log(task1Array[3][2]);
console.log(task1Array[1].length)
console.log(task1Array[4][2]);

//zad 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for (let arr of task2Array) {
    console.log(arr);
}

for (let arr of task2Array) {
    console.log(arr.length);
}

for (let arr of task2Array) {
    for (let elem of arr) {
        console.log(elem);
    }
}

//zad 0
function checkArray(array) {
    let output = [];
    for (let arr of array) {
        let isEven = arr[0] % 2 === 0 && arr[1] % 2 === 0;
        output.push(isEven);
    }

    return output;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

console.log(checkArray(arr));

//zad 3
function print2DArray(array) {
    for (let arr of array) {
        for (let elem of arr) {
            console.log(elem);
        }
    }
}

print2DArray([[1,2], [3,4]]);

//zad 4
let array2d = [[1,2], [3,4], [5,6,7], [8,9,10]];
print2DArray(array2d);

//zad 5
function create2DArray(columns, rows) {
    let output = [];
    let iterator = 1;
    for (let i = 0; i < columns; i++) {
        let row = [];
        for (let j = 0; j < rows; j ++) {
            row.push(iterator++);
        }
        output.push(row);
    }

    return output;
}

console.log(create2DArray(4,4));