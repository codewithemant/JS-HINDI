let score = true
const {score} = req.body
console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

// "33" => 33
// "33abc" => NAN
// true => NAN  
// undefined => NAN 


let isLoggedIn = "true" 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// // 1 => true; 0 => false
// // "" => false
// // "hemant" => true

let someNumber = 33 
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


//**********************operations*************************


let value = 3
let negValue = -value
// console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(2%3)



let str1 = "hemant "
let str2 = "hello"
let str3 = str1 + str2
console.log(str3)


console.log("1" +2+3)
console.log(1 +"2")
console.log("1+2"+8)
console.log(1+2+"8")
console.log((3+4)*8%6)


console.log(true)
console.log(+"")


let mun1, num2, num3

num1 = num2 = num3 = 2+2
let gamecounter = 100
++gamecounter;
console.log(gamecounter)




