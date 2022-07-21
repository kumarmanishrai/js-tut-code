//             Lecture- 1,2

// console.time('your code took');
// var nam = "manish";
// console.log(nam);
// console.log({who: 'manish', marks: 34}); //object
// console.table({who: 'manish', marks: 34});
// // console.clear();
// console.timeEnd('your code took');
// console.assert(567<189, 'this is not possible')
// console.error('this is a error');

//            Lecture- 3  .....VARIABLES....

// 'var', 'let' and 'const' are variables in js
// var nam = `manish`;
// var channel;
// var marks = 43;
// var num = `34;`
// console.log(nam, channel, marks, num);

/*
 ----Rules for creating js variables:
1. Cannot start with numbers 0
2. Can start with letters or $ or _ 
3. Are case sensetive 
*/

/*
var city = `Delhi`; //global scope
console.log(city);

const name = `Hari Ram`;
// name =`manish`; //cannot do this (error)
console.log(name);

{
    let city = `Rampur`;  // block level scope
    console.log(city);
}

const arr1 = [23, 45, 63, 23 ,2 ,34,];
// arr1 = [34, 45, 21, 6];   // cannot do this

arr1.push(78);
arr.shift();
arr.unshift(6);
arr.pop();
console.log(arr1);
*/

/*
 Most common programming case types:

 1. camelCase
 2. kebab-case
 3. snake_case
 4. PascalCase
*/

//              Lecture- 4  ....DATA TYPES......

// 1.Primitive data type (memory allocation in stack)

// -Strings
// let name = `Manish`;
// console.log('My name is: ' + name);
// console.log('Data type is: ' + (typeof name));

// // -numbers
// let marks = 34;
// console.log('The number is: ' + marks);
// console.log('The data type is: ' + (typeof marks));

// // -Boolean
// let isDriver = true;
// console.log(isDriver);
// console.log('The data type is: ' + (typeof isDriver));

// // -null
// let nullVar = null;
// console.log(nullVar);
// console.log('The data type is: ' + (typeof nullVar)); //object

// // -undefined
// let undef = undefined;
// console.log('The data type is: ' + (typeof undef));

// // -Symbol

// // 2.Refrence data type (memory allocation in heap)
// // -Arrays
// let myarr = [1, 3, 67, 76];
// console.log(myarr);
// console.log('The data type is: ' + (typeof myarr));

// // -Object literals

// let stMarks = {
//     manish: 100,
//     rohanDas: 34,
//     shubham: 45,
// }
// console.table(stMarks);

// // -Functions
// function findName(){

// }
// console.log('The data type is: ' + (typeof findName));

// // -dates
// let date = new Date();
// console.log(date);
// console.log('The data type is: ' + (typeof date));

//                            Lecture- 5 ...Type conversion and type coercion

// -----Type Conversion

// let myVar;
// // myVar = 34;
// myVar = String(34);
// console.log(myVar , (typeof myVar));

// let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

// let date = String(new Date());
// console.log(date , (typeof date));

// let myArr = String([1, 2, 3, 4, 5, 6]);
// console.log(myArr.length , (typeof myArr));

// // **to string method
// let i = 8;
// console.log(i.toString());

// let stri = Number('3465');
// console.log(stri, (typeof stri));

// let number = parseInt('34');
// console.log(number, (typeof number));

// let float = parseFloat('34.4724');
// console.log(float.toFixed(2));
// console.log(float, (typeof float));

// // -----Type Coercion

// let mystr = "698";
// let mynum = 34;
// console.log(mystr + mynum);

//                   Lecture- 6 ....Strings.......

// -----Concatination
// const name = "Manish";
// const greeting = "Good Morning";
// console.log("Hey"+ " " + name + " " + greeting)

// let html;
// html = '<h1> this is a heading.</h1>'+
//        '<p> this is a para.';

// html = html.concat('this');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// // ---indexing
// console.log(html[0]);
// console.log(html[5]);
// console.log(html.indexOf('heading'));
// console.log(html.indexOf('headding'));
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(15));
// console.log(html.endsWith('this'));
// console.log(html.includes('this'));
// console.log(html.substring(0,7));
// console.log(html.slice(-4));
// console.log(html.slice(0,4));
// console.log(html.split(' '));
// console.log(html.replace('this', 'it'));

// let fruit1 = 'Orange';
// let fruit2 = 'Apple';
// let myHtml =  `Hello ${name}
//             <h1> This is heading </h1>
//             <p> You like ${fruit1} and ${fruit2}

//             `;
// document.body.innerHTML = myHtml;

//            Lecture- 7 ...Arrays and Objects....

// const marks = [34, 56, 64, 33, 54, 34];
// const fruits = ['Orange', 'Apple', 'Pineappple'];
// const mixed = ['str', 46, [3, 7]];

// const arr = new Array(34, 4, 32, 'Orange');
// console.log(marks);
// console.log(fruits[2]);
// console.log(mixed);
// console.log(arr);
// console.log(arr.length);
// console.log(Array.isArray(arr));
// arr[0] = 'manish';
// console.log(arr);

// ---indexing
//let marks = [34, 56, 64, 33, 54, 34];
// console.log(marks);
// let value = marks.indexOf(34);
// console.log(value);
// //  ---mutating
// marks.push(3443);
// console.log(marks);
// marks.unshift(1838);
// console.log(marks);
// marks.pop();
// console.log(marks);
// marks.shift()
// console.log(marks);
// marks.splice(1, 2);
// console.log(marks);
// marks.reverse();
// console.log(marks);

// let marks2 =[1, 2, 4, 6];
// marks = marks.concat(marks2);
// // console.log(marks);

// let myobj = {
//     first name: 'Manish',
//     course: 'btech',
//     isActive: true,
//     marks:[1, 3, 3, 32, 22]
// }
// console.log(myobj);
// console.log(myobj.isActive);
// console.log(myobj['first name']);

//            Lecture- 8 ...If - Else & Switches....
// const age = 18;
// if(age==19){
//     console.log('age is 19');
// }
// else{
//     console.log('age is not 19');
// }
// console.log(age ==45? 'age is 45' : ' age is not 45');

// switch (age){
//     case 18:
//         console.log("You are 18");
//         break;
//     case 28:
//         console.log("You are 28");
//         break;
//     default:
//         console.log("You are a nice person");
//         break;
// }

//         Lecture- 9 ....Loops...

// for(let i=1; i<=10; i++)
// {
//     console.log(i);
// }

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let k = 0;
// do {
//     // console.log(k+1);
//     // if(k==5){
//     //     break;
//     // }
//     if(k==5){
//         k++;
//         continue;
//     }
//     console.log(k+1);
//     k++;
// }while (k<9)

// let arr = [ 3, 4, 6, 1, 3];
// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

// let obj = {
//     name: "Manish",
//     age: 18,
//     type: "Pro coder"
// }
// for(let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }
// -----------------------------------------------------------------------

//          Lecture- 10 .....Functions....

// function greet(name, thanks = 'Thank You'){
//     console.log(`Happy birthday ${name}, ${thanks}. `);

// }
// let val = greet('manish', 'thanks a lot');
// console.log(val);

// function greet(name, thanks = 'Thank You'){
//      let msg = `Happy birthday ${name}, ${thanks}. `;
//      return msg;
// }
// let val = greet('manish', 'thanks a lot');
// console.log(val);

// const mygreet = function(name, thanks = 'Thank You'){
//     let msg = `Happy birthday ${name}, ${thanks}. `;
//     return msg;
// }
// let val = mygreet('manish', 'thanks a lot');
// console.log(val);

// const myobj = {
//     name: 'manish',
//     course: 'b-tech',
//     year: 'first',
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game());

// arr = ['fruit', 'veg', 'toys'];
// arr.forEach(function(element, index, array){
//     console.log(element, array, index);
// });

// var i = 234;

// console.log(i);
// function ui(name){
//     i = 9;
//     console.log(i);
//     return`this is a ${name} ui`
// }
// console.log(ui("harry"), i);
// --------------------------------------------------------------------

//          Lecture- 11 ...JS Window...

// let a = window;
// let a = window.document;
// window.alert("hello manish");
// a = prompt("this will destroy your computer");
// a = confirm("Are you sure you want to delete this page");
// a = window.innerHeight;
// a = scrollY;
// a = location;
// a = history;

// console.log(a);

// ----------------------------------------------------------------------
// Lecture- 20 ....Storage.. .

// let impArray = ['adarak', 'pyaz', 'bhindi'];

// localStorage.setItem('Name', 'Manish');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('sabzi', impArray); //return string
// localStorage.setItem('sabzi', JSON.stringify(impArray));

// // localStorage.clear();

// // localStorage.removeItem('Name2');
// let khana = JSON.parse(localStorage.getItem('sabzi'));
// console.log(khana);

// let name2 = localStorage.getItem('Name2');
// console.log(name2);

// ----------------------------------------------------------------------
//  Lecture- 23 ..Math Object....

// let x= 3;
// let y = 0;
// let z = x+y;
// z = x/y;
// z = Math;
// z = Math.PI;
// z = Math.round(5.4);
// z = Math.ceil(5.4);
// z = Math.floor(5.7);
// z = Math.floor(-5.7);
// z = Math.abs(-5.2);
// z = Math.sqrt(2);
// z = Math.pow(4,2);
// z = Math.min(2,4,5,-3,-6,34);
// z = Math.max(2,4,5,-3,-6,34);
// z = Math.random();
// z = Math.round((50+((100-50)*Math.random())));
// console.log(z);

// ----------------------------------------------------------------------
// Lecture- 24 ..Date & Time.........

//refer Date mdn
// let today = new Date();
// // console.log(today);
// let otherDate = new Date('8-3-2003 04:54:08');
// console.log(otherDate);
// let a = otherDate.getDay();
// a = otherDate.getDate();
// a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getTime();
// a = otherDate.getMilliseconds();
// a = otherDate.getMonth();
// otherDate.setDate(23);
// otherDate.setMonth(2);
// otherDate.setFullYear(1900);
// otherDate.setMinutes(23);
// otherDate.setHours(2);
// otherDate.setSeconds(43);

// console.log(otherDate);

// ---------------------------------------------------------------------

// Lecture- 27 ...........Object Literals, Constructors and Object Oriented Javascript

// Object
// let car = {
//     name: 'maruti',
//     topSpeed:  89,
//     run: function(){
//         console.log("car is running");
//     }
// }

// we have already seen constructors like this
// new Date();

// crating a constructor for cars
// function generalCar(givenName, speed){
//     this.name = givenName;
//     this.topspeed = speed;
//     this.run = function(){
//         console.log(`${this.name} is running`);
//     }
//     this.analyze = function(){
//         console.log(`this car is slower by ${200- this.topspeed} than mercedes`);
//     }
// }
// car1 = new generalCar('nisaan', 190);
// car2 = new generalCar('alto', 60);
// console.log(car.run());

// ===============================================================================

//Lect- 28 ....Object prototype.......

// let obj = {
//     _name: 'manish',
//     channel: 'code with harry',
//     address: 'mars'
// }

// function obj (givenName){
//     this._name = givenName
// }

// obj.prototype.getName = function(){
//     return this._name;
// }

// let obj2 = new obj("manish");
// console.log(obj2);

// --------------------------------------------------------------------

// Lect - 30 ........prototype inheritance.........

// const proto = {

//     slogan: function(){
//         return 'this compsnny is the best';
//     },
//     changeName: function(newName){
//         this.name = newaNme
//     }
// }

// const harry =  object.create(proto);
// harry.name = 'Harry';
// harry.role = "programmer"
// harry.changeName("harry2");
// console.log(harry);

// or
// const harry = object.create(proto,{
//     name: {value: "harry", writable:true},
//     rolr: {value: "programmer"},
// })
// harry.changeName("harry2");
// console.log(harry);

// employee cconstructor

// function Employee(name, salry, experience){
//     this.name = name;
//     this.salry = salry;
//     this.experience = experience;
// }

//slogan
// Employee.prototype.slogan = function(){
//     return `this company is the best. regards, ${this.name}`;
// }
// let harryObj= new Employee("harry", 4453287, 3);
// console.log(harryObj);

//programmer
// function Programmer(name, salary, experience, language){
// Employee.call(this, name, salary, experience);
// this.language = language
// }

//inherit the prototype
// Programmer.prototype = Object.create(Employee.prototype);

//manualy set the constructor
// Programmer.prototype.constructor = Programmer;

// let rohan = new Programmer("rohan", 3, 0, "C++");
// console.log(rohan);

// ----------------------------------------------------------------------------------------------------------------

// lect- 31        ES6 Classes and Inheritance

// class Employee{
//     constructor(givenName, givenExperience, givenDivision){
//         this.name = givenName;
//         this.experience = givenExperience;
//         this.division = givenDivision;
//     }
//     slogan(){
//         return `I am ${this.name} and this company is the best`;
//     }
//     joiningYear(){
//         return 2019 - this.experience;
//     }
//     static add(a, b){
//         return a+b;
//     }
// }

// harry = new Employee("harry", 56, "swcds");
// console.log(harry);

//inheritance

// class Programmer extends Employee{
//     constructor(givenName, givenExperience, givenDivision, language){
//         super(givenName, givenExperience, givenDivision);
//         this.language = language;

//     }
//     favouriteLanguage(){
//         if (this.language == 'python'){
//             return 'python';
//         }
//         else{
//             return 'javascript';
//         }
//     }
//     static multiply(a, b){
//         return (a*b);
//     }
// }

// rohan = new Programmer("rohan", 455, 34, "java");
// console.log(rohan)

// ----------------------------------------------------------------------------------------------

// lecture- 37 Callback Functions

// //pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject:"js"},
//     {name: "manish", subject:"cpp"}

// ]

// function enrollStudent(student, callback){
//     setTimeout(function(){
//         students.push(newStudent);
//         callback();
//     }, 100);
// }

// function getStudent(){
//     setTimeout(function(){
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//     }, 3000);
// }

// let newStudent = {name: "Sunny", subject: "python"};
// enrollStudent(newStudent);
// getStudent();

// ----------------------------------------------------------------

// lecture- 39 promises

// Promise:
// -resolve
// -Reject
// -pending

// function func1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const error = true;
//       if (!error) {
//         console.log("func1: Your promise has been resolved");
//         resolve();
//       } else {
//         console.log("Your promise has not been resolved");
//         reject('sorry not fulfilled');
//       }
//     }, 2000);
//   });
// }
// func1().then(function(){
//     console.log("harry: thanks for resolving");
// }).catch(function(error){
//     console.log('harry: very bad bro' + error);
// });

// -------------------------------------------------------------------

// lecture - 41 Arrow functions

// let greet = (name) => {
//     return "good morning " + name ;
// }
// console.log(greet("manish"));

//-----------------------------------------------------------------

//lecture -43 async / await

// async function harry () {
//     console.log('inside harry function');
//     const response = await fetch ('https://api.github.com/users');
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved');
//     return users;
//     // return "harry";
// }
// console.log("before calling harry");

// let variable = harry();
// console.log("after calling harry");
// console.log(variable);
// variable.then(data => console.log(data));
// console.log("last line of this js file");

//-------------------------------------------------------------

//lecture - 44   error handeling & try catch

// pretend this is coming from a server as response
// let a = 'harry bhai';
// a = undefined;
// if (a != undefined){
//     throw new Error('this is not undefined');
// }
// else{
//     console.log('this is undefined');
// }

// try {
//     console.log('we are inside try block');
//     functionbhb();

// } catch (error) {
//     console.log('are you okay!');
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);

// }

// finally{
//     console.log('finally we will run this!')

// }

// -----------------------------------------------------------------

// lecture - 46 Regular expressions and related functions

let reg = /harry/; //this is a regular expression literal in js
reg = /harry/i; //i means case insensitivity
reg = /harry/g; //g means global

// console.log(reg);
// console.log(reg.source);

let s = 'this is great code with haRry and also harry bhai. ';
//functions to match expressions
// 1. exec() - This function will return an array for match or null for no match

for (var i=0; i<8; i++) {
    let result = reg.exec(s);
    // console.log(result);
}
