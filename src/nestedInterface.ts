interface Address {
    city: string,
    country ?: string,
    pincode ?: number
}

interface User {
    name: string,
    age : number,
    address : Address 
}


interface Office {
    address: Address
}

let user : User = {
    name : "Raghunandan Kumar",
    age : 22,
    address: {
        city: "Kushinangar"
    }
}