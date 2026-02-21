

function sum(a: number, b:number) : number{
    return a+b
}
let result = sum(1,2);
console.log(result)



function isEven(num : number) : boolean {
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}


//interface
interface Address {
    city : string;
    country : string;
    pincode:  number;
    houseNumber ? : string
}

interface User {
    name : string;
    age : number;
    // address ? : {  // ? defines it is optional we can put or not
    //     city ? : string,
    //     country  ? : string,
    //     pincode ? : number
    // }
    address : Address

}

interface office {
    address : Address
}


let user2 : User = {
    name : "raman",
    age : 22,
    address : {
        city: "Bihar",
        country : "Japan",
        pincode: 415236
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