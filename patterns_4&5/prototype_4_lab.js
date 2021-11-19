class Bank {
    constructor(bankId, name, location) {
        this.bankId = bankId;
        this.name = name;
        this.location = location;
    }
}

class Customer {
    constructor(id, name, address, phone, acc_no) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.acc_no = acc_no;
    }
    generalInquiry() {

    }
    depositMoney() {

    }
    withdrawMoney() {

    }
    openAccount() {

    }
    closeAccount() {

    }
    applyForLoan() {

    }
    requestCard() {

    }
}

class CustomerPrototype { //name, address, phone, acc_no
    constructor(proto) {
        this.proto = proto;
        this.clone = function () {
            let customer = new Customer();
            // Customer.prototype = proto;
            customer.id = proto.id;
            customer.name = proto.name;
            customer.address = proto.address;
            customer.phone = proto.phone;
            customer.acc_no = proto.acc_no;

            return customer;
        }
    }
}

class Teller {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    collectMoney() {

    }
    openAccount() {

    }
    closeAccount() {

    }
    loanRequest() {

    }
    provideInfo() {

    }
    issueCard() {

    }

}

class Account {
    constructor(id, customerId) {
        this.id = id;
        this.customerId = customerId;
    }
}

class Loan {
    constructor(id, type, accountId, customerId ) {
        this.id = id;
        this.customerId = customerId;
        this.accountId = accountId;
        this.type = type;
    }
}

class Checking extends Account {
    constructor(id, customerId) {
        super();
        this.id = id;
        this.customerId = customerId;
    }
}

class Savings extends Account {
    constructor(id, customerId) {
        super();
        this.id = id;
        this.customerId = customerId;
    }
}

let bank = new Bank();
let teller = new Teller();
let account = new Account();
let loan = new Loan();
let checking = new Checking();
let savings = new Savings();

let proto = new Customer();
let customer_prototype = new CustomerPrototype(proto);
let customer = customer_prototype.clone();


