"use strict";
// const jd = {
//     name: 'JD',
//     age: 44
// };
// function Person(userName, userAge, address, phone) {
//     this.name = userName;
//     this.age = userAge;
//     this.address = address;
//     this.phone = phone;
// }
// Person.prototype.printBirthday = function() {
//     console.log( `${this.name} is ${this.age} years old`);
// }
class Person {
    constructor(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    printBirthday() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const jd = new Person('JD', 44, '555 coding dr', '7777777777');
const bob = new Person('Bob', 99, '777 old st', '8888888888');
const jane = new Person('Bob', 35, '1999 old st', '8888888888');
const frank = new Person('Bob', 55, '1111 old st', '8888888888');
bob.printBirthday();
// console.log(jd);
// console.log(bob);
