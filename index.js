var customerName = 'bob'

function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
        customerName = customerName.toUpperCase();
    }
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Lee';

function changeLeastFavoriteCustomer(newCustomer) {
    leastFavoriteCustomer = newCustomer; 
}
