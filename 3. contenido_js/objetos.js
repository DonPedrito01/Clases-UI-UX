'use srict';

//1. objeto literal

let course ={
    name: "",
    time: "",
    level: ""
}

course.name = "Curso de JS";
course.time = 2;
course.level = "Basico";

//2. objeto con constructor

function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

console.log(course);

//instanciar un objeto Person
let myPerson = new Person("Pedro", "Morita", 25);
//otra forma de trabajar con objetos
const nameBook = "100 años de soledad";
const author = "Gabriel Garcia Marquez";
const year = 1967;

const book = {
    nameBook,
    author,
    year,
    //propiedad o atributo compuesto
    gender: ["Drama", "Misterio"], 
    printing:function(){
        return `El libro ${this.nameBook} fue escrito por ${this.author} en el año ${this.year}`;
    }
}

console.log(book.printing());

//valores de objeto
console.log(Object.values(book));
//atributos de objeto
console.log(Object.keys(book));

Object.entries(book).forEach(([key, value]) => console.log(key, value));