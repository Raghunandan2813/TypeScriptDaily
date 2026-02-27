 

 let subs : number | string = 'M1'

 let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending'

 //let airlineSeat : 'aisle' | 'window' | 'middle' = 'asile'

 //airlineSeat = 'aisle'

 const orders = ['12' , '20', '42']

 let currentorder : string | undefined;

 for(let order of orders){
    if(order === '28'){
        currentorder = order
        break 
    }
 }

 //currentorder = 42;
 console.log(currentorder)


