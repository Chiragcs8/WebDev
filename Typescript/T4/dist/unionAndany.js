"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = '1m';
let apiRequestStatus = 'pending';
// apiRequestStatus = 'done'
apiRequestStatus = 'success';
let airlineSeat = 'aisle';
airlineSeat = 'aisle';
const orders = ['12', '20', '28', '42'];
let currentOrder;
for (let order of orders) {
    if (order === '28') {
        currentOrder = order;
        break;
    }
}
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map