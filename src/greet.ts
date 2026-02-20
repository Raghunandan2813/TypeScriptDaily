
function greet (firstName : string){
    console.log("Hello" + firstName)
}

function meet (age : string | number){
    console.log("How are you" + age )
}

function random (details : any){
    console.log("Tell me about your details" + details)
}

random("Raghu")
meet("Sixteen")
meet(16)
greet("Raghu");

function sum (a :number , b :number){
    return (a+b)
}
let ans = sum (2 , 3)
console.log(ans)


function isLegal(age : number){
    if(age>18) return true;
    else return false;
}

console.log(isLegal(20))


function delayedCall(fn : ()=> void){
    setTimeout(fn , 1000);
}

delayedCall(function(){
    console.log("hello");
})


function onecall(anotherfn : ()=> void){
    setTimeout(anotherfn , 5000)
}

function log(){
   return console.log("hii")
}

onecall(log);




// function twocall(otherfn : (digit1 : number, digit2:number)=> number, x : setTimeout(()=>{
//         const result = otherfn(x , y);
//         console.log(result)
//     }, 5000)
// }


// function addition(a :number , b: number) :number{
//     return a + b
// }

// twocall(addition, 2, 3)


function twocall(otherfn: (digit1: number, digit2: number) => number, x: number, y: number) {
    setTimeout(() => {
        const result = otherfn(x, y);
        console.log(result);
    }, 5000);
}

function addition(a: number, b: number): number {
    return a + b;
}

twocall(addition, 2, 3); // prints 5 after 5 seconds



let greetings = ()=> {
    console.log("Hii there");
}