class AACCT { //@abstract class
    constructor() {}
    getBalance() {
        throw new Error('No implementation');
    }
    withdraw() {
        throw new Error('No implementation');
    }
}

class ATMController {
    constructor() {}
    handleBalanceRequest(balance) {
        return balance;
    }
    handleLogin(account_id) {
        if (account_id === new AccountDB().logIn()) {
           return true;
        }
        else { return false; }
    }
    handleLogout() {}
    handleWithDrawal() {
        if (new AccountProxy().withdraw()) {
            return true;
        }
        else { 'Hehe, I will give you no money'};
    }
}

class IDB extends AACCT { //abstract class
    constructor() {
        super();
    }
    logIn() {
        throw new Error('No implementation');
    }
    logOut() {
        throw new Error('No implementation');
    }
}

class Account extends AACCT {
    constructor() {
        super();
    }
    getBalance(balance) {
        return balance;
    }
    withdraw() {
    }
}

class AccountDB extends IDB {
    constructor(account_id) {
        super();
        this.account_id = account_id;
    }
    logIn(account_id) {
        return account_id;
    }
    logOut() {
        if (new AccountProxy().withdraw()) {
            return 'The operation finished. Logged out.';
        }
    }
}

class AccountProxy extends AACCT {
    constructor(balance) {
        super();
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    withdraw() {
        if (this.balance > 0) {
            return true;
        }
        else { return 'Your balance is null'}
    }
}

class DBProxy extends IDB {
    constructor() {
        super();
    }
    logIn(account_id) {
        return account_id;
    }
    logOut() {
        if (new AccountProxy().withdraw()) {
            return 'The operation finished. Logged out.'
        }
    }
    makeAccountProxy() {
        new AccountProxy();
    }
}

let acc_proxy = new AccountProxy();
let db_proxy = new DBProxy();

