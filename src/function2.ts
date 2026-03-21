function twocall(otherfn : (digit1 : number, digit2:number)=> number, x : setTimeout(()=>{
        const result = otherfn(x , y);
        console.log(result)
    }, 5000)
}


function addition(a :number , b: number) :number{
    return a + b
}

twocall(addition, 2, 3)