
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

function printTable(array) {
    for(let elem of array) {
        console.log(elem);
    }
}

printTable(createArray(10));

function multiply(array) {
    let output = 1;
    for(let elem of array) {
        output *= elem;
    }

    return output;
}

console.log(multiply([1,2,3,4,5,6,7]));
console.log(multiply([1,1,1,1]));
console.log(multiply([2,8,3,7]));

function getEvenAvarage(array) {
    let length = 0;
    let output = 0;

    for (let elem of array) {
        if (elem % 2 === 0) {
            length++;
            output += elem;
        }
    }

    if (!length) {
        return null;
    }

    return output / length;
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]) );
console.log(getEvenAvarage([1,1,1,1]) );
console.log(getEvenAvarage([2,8,3,7,4]) );

function sortArray(array) {
    return array.sort((a, b) => a - b);
}

console.log(sortArray([145,11,3,64,4,6,10]) );

function addArrays(array, array2) {
    let output = [];
    if (array.length == array2.length) {
        for(let i in array) {
            output.push(array[i] + array2[i]);
        }
    } else if(array.length < array2.length) {
        for (let i in array2) {
            if (array[i]) {
                output.push(array[i] + array2[i]);
            } else {
                output.push(array2[i])
            }
        }
    } else {
        for (let i in array) {
            if (array2[i]) {
                output.push(array[i] + array2[i]);
            } else {
                output.push(array[i])
            }
        }
    }


    return output;
}

console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
console.log(addArrays([8,3,22], [1,3,2]));
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));