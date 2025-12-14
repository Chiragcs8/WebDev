let subs: number | string = '1m'

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

// apiRequestStatus = 'done'

apiRequestStatus = 'success'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'

airlineSeat = 'aisle'

const orders = ['12', '20', '28', '42']

let currentOrder: string | undefined;

for (let order of orders) {
    if(order === '28'){
        currentOrder = order
        break
    }
}

console.log(currentOrder);
