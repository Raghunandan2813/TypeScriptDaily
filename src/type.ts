

function sum(a: number, b:number) : number{
    return a+b
}
let ans = sum(1,2);
console.log(ans)



function isEven(num : number) : boolean {
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}


//interface


interface User {
    name : string,
    age : number,
    address : {
        city: string,
        country : string,
        pincode : number
    }
}



let user : User  = {
    name :"rahgu",
    age: 22,
    address : {
        city: "Chandighar",
        country :"India",
        pincode: 27343,
    }
}


function islegal(user : User): boolean {
    if(user.age >=18){
        return true;

    }else{
        return false;
    }
}

const ans = islegal(user);
if(ans){
    console.log('I am legal')
}else{
    console.log("I am illegal")
}