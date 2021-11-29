class Customer {
    constructor(order_facade) {
        this.order_facade = order_facade;
    };
    orderItem() { //public
        this.order_facade.doOperation();
    }
}

class OrderFacade {
    constructor(order, inventory, shipment, payment ) {
        this.order = order;
        this.inventory = inventory;
        this.shipment = shipment;
        this.payment = payment;


        if (!this.order) {
            throw new Error(`No ${this.order}`);
        }
        if (!this.inventory) {
            throw new Error(`No ${this.inventory}`);
        }
        if (!this.shipment) {
            throw new Error(`No ${this.shipment}`);
        }
        if (!this.payment) {
            throw new Error(`No ${this.payment}`);
        }
    }
    getDone() {
            this.order.orderSmth();
            this.inventory.checkInventory();
            this.shipment.shipSmth();
            this.payment.payForSmth();
        }

    doOperation() { //public
        return;
    }
}


class OrderProcessSubsystem {
    constructor() {};
    orderSmth() {
        console.log(`Ordered.`);
    }
}

class Order {
    constructor(id) {
        this.id = id;
    }
    createOrder() {
        return ;
}
    editOrder() {
        return ;
    }
}


class ShoppingCart {
    constructor(order_arr = []) {
        this.order_arr = order_arr;
    }
    addItem(id) {
        this.order_arr.push(id);
        //return this.order_arr;
    }
    updateAmount() {
        return;
    }
    checkout() {
        return;
    }
}

class InventorySubsystem {
    constructor() {}
    checkInventory() {
        console.log('Checked');
    }
}

class Product {
    constructor(id) {
        this.id = id;
    }
    addProduct(id) {

    }
    updateProduct() {

    }
}

class Stock {
    constructor(stock_arr = []) {
        this.stock_arr = stock_arr;
    }
    selectStockItem(id) {
        //this.stock_arr.push(id);
        if (this.stock_arr[id]) {
            console.log('Cool, we have it!')
        }
        else {
            console.log('Absent now...')
        }
    }
    updateStock() {
        return;
    }
}

class ShipmentSubsystem {
    constructor() {
    }
    shipSmth() {
        console.log('Shipped.')
    }
}

class Shipment {
    constructor(ship_id) {
        this.ship_id = ship_id;
    }
    createShipment() {
        return;
    }
    addProvider() {
        Object.assign(this.ship_id, new Shipment());
    }
}

class ShipmentProvider {
    constructor(ship_id, people = []) {
        this.ship_id = ship_id;
        this.people = people;
    }
    addProvider() {
        if (this.people[this.ship_id]) {
            console.log('You have chosen a provider!');
        }
        else {
            console.log('Please, try again!');
        }
    }
    modifyProvider() {
        return;
    }
}

class PaymentSubsystem {
    constructor() {
    }
    payForSmth() {
        console.log('Paid');
    }
}

class Payment {
    constructor() {
    }
    addCardDetails() {
        return;
    }
    verifyPayment() {
        return;
    }
}

let order_process_system = new OrderProcessSubsystem();

let inventory_sub = new InventorySubsystem();
let stock = new Stock();

let shipment_provider = new ShipmentProvider();
let ship_sub = new ShipmentSubsystem();

let payment_sub = new PaymentSubsystem();

let order_facade = new OrderFacade(order_process_system, inventory_sub, ship_sub, payment_sub  );

let customer = new Customer(order_facade);

//TODO: может когда-нибудь пригодится....
// let order = new Order(order_facade);
// let product = new Product(order_facade);
// let shipment = new Shipment(order_facade);
// let payment = new Payment(order_facade);

order_facade.getDone();

