const add = (a,b, cb) =>{

    let sum = a+b
    let sub = a-b

    let result = cb(sum,sub) 
    console.log(result) 

}




add(55,5, (a,b)=>a*b)
add(55,5, (a,b)=>a/b)
add(55,5, (a,b)=>a+b)
