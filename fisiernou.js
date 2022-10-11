/*console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);*/

/*let sayHello = function (name) {
    return "hello, " + name;
}
console.log(sayHello("Elena"));*/

/*let sayHello = (name) => "Hello, " + name;

console.log(sayHello("me"));*/

/*let sayHello = (name) => "Hello, " + name;

console.log(sayHello(process.argv[2]));*/

/*const elements = ['elem1', 'elem2', 'elem3'];

console.log(elements.join());
// expected output: "elem1,elem2,elem3"

console.log(elements.join(' '));
// expected output: "elem1 elem2 elem3"

console.log(elements.join(''));
// expected output: "elem1elem2elem3"

console.log(elements.join('-'));
// expected output: "elem1-elem2-elem3"*/

/*const elements = ['This', 'is', 'a', 'test',3=="3", 3==="3"];
console.log(elements.join(' '));
const express = require("express")
const req = require("express/lib/request")
const app = express()
app.get('/', (req, res) => {
    res.send(elements.join(' '))
})
//console.log(3 == "3")
//console.log(3==="3")
console.log(0.1+0.2==0.3)
console.log(0.1+0.2)
app.listen(8080);*/


//if
function checkDivisible(n, divisor) {
    if (n % divisor) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))
//for
//function occurences(text, character) {
//    let count = 0;
//    for (var i = 0; i < text.length; i++) {
//        if (text.charAt(i) === character) {
//            count++;
//        }
//    }
//    return count;
//}

//console.log(occurences("sample text", "e"));
////var simplificata cu split
//function occurences(text, character) {
//    return text.split(character).length - 1;
//}

//console.log(occurences("sample text", "e"));
//lambda exp
let occurences = (text, character) => text.split(character).length - 1;

console.log(occurences("sample text", "e"));

//exercitiu

function checkNumber(elements) {
    const a = [];
    let j = 0;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i] % 2==0)
          a[j++]=elements[i];
    }
    return a;
}

const elements = [2, 4, 6, 7, 8];
console.log(checkNumber(elements));

//functie variadica
//function addToArray() {
//    let args = arguments;
//    let array = args[0];

//    for (var i = 1; i < args.length; i++) {
//        array.push(args[i]);
//    }
//    return array;
//}

//let array = ["a"];

//console.log(addToArray(array, "b", "c").join(", "));

////varianta simplificata
//function addToArray(array, ...args) {
//    for (var i = 0; i < args.length; i++) {
//        array.push(args[i]);
//    }
//    return array;
//}

//let array = ["a"];

//console.log(addToArray(array, "b", "c").join(", "));

//exercitiu
function addToArray(array, ...elements) {
    for (var i = 0; i < elements.length; i++) {
        if(elements[i]%2==0)
        array.push(elements[i]);
    }
    return array;
}

let array = [];

console.log(addToArray(array, 2, 5, 6, 7, 8, 10, 22).join(", "));


const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false;
        }
    }
    return true;
}

if (process.argv.lengh < 3) {
    console.log('not enough params')
} else {
    console.log(checkPrime(parseInt(process.argv[2])))
}

var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (var day in days) {
    console.log(day);
    console.log(days[day]);
}

for (var day of days) {
    console.log(day);
}

var phrase = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
const vect = [];
j = 0;
for (var word of phrase) {
    console.log(word, ':')
    var i = 1;
    for (var w in phrase) {
        if (w == word)
           vect[j]= i++;
    }
    j++;
    for (var k = 0; k = j;k++) {
        if (vect[k])
            console.log(i);
    }
    }
   


