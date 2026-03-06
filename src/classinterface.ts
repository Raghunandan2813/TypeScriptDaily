

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
    return student.Age>18;
}