

interface  Student {
    Name: string,
    Age: number,
    Address: {
        District : string,
        State: string,
        PinCode : number
    },

}

let student : Student ={
    Name : "RAGHUNANDAN",
    Age: 21,
    Address : {
        District : "Kushinagar",
        State: "Uttar Pradesh",
        PinCode: 274301
    }
}

function isLegal(student : Student) : boolean{
    if(student.Age>18){
        return true;
    }else{
        return false;
    }
}


const ans = isLegal(student);
if(ans){
    console.log("I am legal")
}else{
    console.log("I am not illegal")
}