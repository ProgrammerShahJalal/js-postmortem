/*
 1) How JavaScripts Work 
 2) Execution Context 
 3) Hoisting 
 4) Scope
 5) Lexical Scope 
 6) Scope Chaining 
 7) Closure 
 8) Synchronous & Asynchronous
*/



// 2) Execution Context

const name = "Programming Hero "
function programming() {
    const x = 10;
    console.log(name)
    console.log("Codding")
}


programming();

// Creational Phase 
// name = Programming hero;
// programming = ref
// x = undefine

// 3) Hoisting 


console.log(a) // a = undefine 
var a = 10; // create  a = undefine

// a = undefine 


biriani()
function biriani() {
    console.log("Hi I am biriani")
}

//creational phase 
// b = ref 

//executional phase
// biriani()

// console.log(b)
// const b = 20;

// creational phase 
// a = undefine 

//executional phase
// a =  10


// Scope 
// ==> scope হচ্ছে একটা এরিয়া যেখান থেকে একটা ভ্যারিয়েবল / ফাংশনকে এক্সেস করা যায়। 

// Global Scope 

// ==> যেখানে কোন ভ্যারিয়েবল/ ফাংশনকে ডিক্লেয়ার করলে সব জায়গা থেকে এক্সেস করা যায় 
const x = 10;

function hello() {
    //local Scope 
    //  যেখানে কোন ভ্যারিয়েবল/ ফাংশনকে ডিক্লেয়ার করলে এর বাহির থেকে এক্সেস করা যায় না 
    var y = 20

    console.log(x)
    console.log(y)

    function c() {
        console.log(x)
    }

    c();



}

hello();

// Scope chaining 
function steveKaku() {
    billGatesKaku()
    console.log("Hello i am steve jobs")
}

function billGatesKaku() {
    markZuckerbergKaku()
    console.log("Hello i am  bill Gates")
}

function markZuckerbergKaku() {

    console.log("Hello i am markZuckerbergKaku")

}

const charlesBabbage = "Ami togo bap Charles Babbage"
steveKaku();
console.log(charlesBabbage)

// global scope -- stevekaku

// Closure 

function parent() {
    const x = 10;

    return function () {
        const y = 20;
        console.log(x + y); // x = parent function er bhitore
    }

    // console.log(y); // y = child function er bhitore 
}

const grandParent = parent()
grandParent();

// parent function er vhitore kono variable or function touri korle child function theke acess kora jay , kintu 
// child function er vhitore kono variable or function touri korle parent theke acess kora jay na 




function a() {
    const x = 10;
    return "kicu ekta";
}


console.log(a())
console.log(x)



// 8) Synchronous & Asynchronous

//Synchronous
console.log("I am First")
console.log("I am Second")
console.log("I am Third")
console.log("I am fourth")

//Asynchronous

console.log("I am First")

setTimeout(() => {
    console.log("I am Second")
}, 2000)

setTimeout(() => {
    console.log("I am Third")
}, 1000)


console.log("I am fourth")



function api(book) {
    const books = ["javascript", "react", "CSS"]

    const result = books.filter(element => element == book);
    return result


}

console.log(api("react"))

fetch()
    .then(response => response.json())

