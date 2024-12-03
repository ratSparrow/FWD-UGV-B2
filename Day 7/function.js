// function Sum (a,b) {

//     return a+b
// }

// console.log(Sum(100,100))
// function Sub (a,b) {

//     return a-b
// }
// console.log(Sub(300,200))
// function Mult (a,b) {

//     return a*b     
// }
// console.log(Mult(10,5))
// function Div (a,b) {

//     return a/b
// }
// console.log(Div(55,11))
// function EvenOdd (a) {

//     if(a === 0){
//         return "You have entered Zero"
//     }else if(a % 2 !== 0){
//         return "Odd Number"
//     }else{
//         return "Even Number"
//     }
// }

// console.log(EvenOdd(10))
// console.log(EvenOdd(0))






function SumOfArray (array) {
    let sum = 0
    for(let number of array){
        sum = sum + number 
    }
    return sum
}

console.log(SumOfArray([1,2,3,4,5,6]))
