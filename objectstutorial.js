// Objects and Object Constructors Tutorial.

const myObject = { // "Object Literal": Object containing a list key value pairs separated by commas.
    property: 'Value!',
    "obnoxiousProperty": 77,
    otherProperty: function() {
        //do stuff
    }

}

// Two ways to get information out of an object. 1. Dot notation. 2. Bracket notation.

console.log(myObject.property) // 'Value!'
console.log(myObject["obnoxiousProperty"]) // 77

// As above, "obnoxiousProperty" is a string so dot notation won't work. But usually dot notation is cleaner.

// Object Constructors
function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
        console.log(name)
    }
}

const player = new Player ('Steve', 'X')

console.log(player.name) // 'Steve'

player.sayName() // 'Steve'

// Prototypes: 
// Another object that the original object inherits from. Every object has a prototype.
// It is better to put functions inside prototypes (unlike above) so it is not duplicated in every instance of the object.
// This saves memory and avoids making each object larger than necessary.

function Student(name, grade) {
    this.name = name
    this.grade = grade
}

Student.prototype.sayName = function() {
    console.log(this.name)
}

const studentOne = new Student('Susan', 6)

studentOne.sayName(); // 'Susan'

// Object.create(): Using an existing object as the prototype of the newly created object.

EightGrader.prototype = Object.create(Student.prototype) // Creates a copy, rather than being equated with Student.prototype itself.

function EightGrader(name) {
    this.name = name
    this.grade = 8
}

// Exercise: A constructor for Book objects

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
    this.report = function() {
        let readString;
        if (read === true) {readString = "already read."} else {readString = "not read yet."}
        return name + " by " + author + ", " + pages + " pages long, " + readString
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)

console.log(theHobbit.report()) // "The Hobbit by J.R.R. Tolkien, 295 pages long, not read yet."

// More on Prototypes:
// The value of the Object Constructor's .prototype property contains the prototype object.
// The Constructor is a function, the prototype is an object containing the methods and properties inherited
// by objects created by the Constructor.

// Object.prototype: The most basic prototype. Every other prototype inherits from Object.prototype by default.

// Exercise 2: Creating a prototypal inheritance chain. Two objects: Man and Person. But every Man is a Person,
// so let us make Man inherit from Person.

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello, I am ${this.name}.`)
}

function Man(name, job) {
    this.name = name
    this.job = job
}

Man.prototype.sayJob = function () {
    console.log(`I work as a ${this.job}.`)
}

console.log(Object.getPrototypeOf(Man.prototype)) // returns Object.prototype
Object.setPrototypeOf(Man.prototype, Person.prototype) // Sets Man.prototype to inherit from Person.prototype instead of Object.prototype.
console.log(Object.getPrototypeOf(Man.prototype)) // returns Person.prototype

const person1 = new Man('William','pilot')

person1.sayName() //'Hello, I am William.'
person1.sayJob() //'I work as a pilot.'