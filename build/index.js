"use strict";
let userInfo = 'JD';
let num = 10;
let isCool = true;
let fruits = ['orange', 'apple', 'grape'];
let strictArray = ['JD', 44];
function add(a, b) {
    return a + b;
}
// console.log(add(10, 5));
const jd = {
    name: 'JD',
    age: 44
};
const jdDetails = {
    phone: '777-777-7777',
    address: '555 coding dr',
    // hobbies: ['fishing', 'pickleball']
};
function printUserinfo(userObj, detailsObj) {
    console.log(`${userObj.name} is ${userObj.age} years old. They live at ${detailsObj.address} and you can reach them at ${detailsObj.phone}`);
    if (detailsObj.hobbies) {
        console.log(`${userObj.name} likes ${detailsObj.hobbies[0]}`);
    }
}
printUserinfo(jd, jdDetails);
// if (typeof userInfo === 'string') {
//     console.log(userInfo.toLocaleLowerCase())
// }
// if (typeof userInfo === 'number') {
//     console.log(Math.round(userInfo))
// }
// if (typeof userName === 'string') {
//     console.log(userName.toLowerCase())
// }
