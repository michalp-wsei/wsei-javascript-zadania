//zad 0a
const city = {
    capital: 'Warszawa',
    population: 1234566,
    president: "Andrzej Duda",
    primeMinisters: ['Morawiecki', 'Gowin', 'Sasin']
};

console.log(city.capital,city.population,city.president,city.primeMinisters);


//zad 0b
const timeMachine = {
    shape:'koło',
    model:'model',
    run: function(date,place) {
        console.log(`${date}: we are in ${place}`);
    }
}

console.log(`shape: ${timeMachine.shape}`);
console.log(`model: ${timeMachine.model}`);
timeMachine.run('2023-10-23', 'Boston');

//zad 1
const book = {
    title: 'Wiedźmin Wieża Jaskółki',
    author: 'Andrzej Sapkowski',
    numberOfPages: 342
};
console.log(book.title, book.author, book.numberOfPages);

//zad 2
const person = {
    name: 'Michał',
    age: 24,
    sayHello: function () {
        console.log("Hello");
    }
};
console.log(person.name, person.age);
person.sayHello();

//zad 3


const recipe = {
    title: 'Owsianka',
    servings: 1
};

recipe.ingredients = [
    'Płatki owsiane',
    'Jogurt naturalny',
    'Jogurt danio',
    'Banan'
];
console.log(recipe.title,recipe.servings,recipe.ingredients);

//zad 6
var spoon = {
    isExist: true
};

var fork = spoon;
fork.isExist  = false;

console.log(fork.isExist);
//Nie istnieje
