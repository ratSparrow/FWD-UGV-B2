let sum = (a,b) => a+b
console.log(sum(10,12))

const  EvenOdd = (a) => {

    if(a === 0){
        return "You have entered Zero"
    }else if(a % 2 !== 0){
        return "Odd Number"
    }else{
        return "Even Number"
    }
}