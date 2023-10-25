// @abstract
class ProductFactory {
    constructor() {
        if (this.constructor === ProductFactory) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    getProduct(customization) {
        throw new Error("Abstract methods can't be implemented.");
    }
    getProductFactory(factoryType) {
        //pass
    }
}

class Product { //interface like abstract class but without any implementation of functions and etc
    constructor() {
        if (this.constructor === Product) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    make() {
        throw new Error("Abstract methods can't be implemented.");
    }
}

class Customization {
    constructor(extra_milk, sugar, mugSize) {
        this.extra_milk = extra_milk;
        this.sugar = sugar;
        this.mugSize = mugSize;
    }
}
let custom = new Customization(20, 3, 300);
console.log(custom.sugar);

class Preparation {
    constructor(milk, water, sugar, coke, liquidCoffee, addedFlavour, tea) {
        this.milk = milk;
        this.sugar = sugar;
        this.coke = coke;
        this.liquidCoffee = liquidCoffee;
        this.addedFlavour = addedFlavour;
        this.tea = tea;
    }
}
let preparation = new Preparation();

class CappuccinoFactory extends ProductFactory {
    constructor() {
        super();
        this.create = function (cust, prep) {
            return new Cappuccino(cust, prep);
        }
    }
    getProduct(cust, prep) {
        return this.create(cust, prep);
    }
}

class Cappuccino extends Product {
    constructor(cust, prep) {
        super();
        super.cust = cust;
        super.prep = prep;
    }
    make() {
        //void
    }
    setMilk() {
        //void
    }
    setSugar() {
        //void
    }
    setCoffee() {
        //void
}
}

class BlackCoffeeFactory extends ProductFactory {
    constructor() {
        super();
        this.create = function (cust, prep) {
            return new BlackCoffee(cust, prep);
        }
    }
    getProduct(cust, prep) {
        return this.create(cust, prep);
    }
}

class BlackCoffee extends Product {
    constructor(cust, prep) {
        super();
        super.cust = cust;
        super.prep = prep;
    }
    make() {
        //
    }
    setWater() {
        //
    }
    setCoffee() {
        //
    }
}

class LemonadeFactory extends ProductFactory{
    constructor() {
        super();
        this.create = function (cust, prep) {
            return new Lemonade(cust, prep);
        }
    }
    getProduct(cust) {
        return this.create(cust, prep);
    }
}

class Lemonade extends Product{
    constructor(cust, prep) {
        super();
        super.cust = cust;
        super.prep = prep;
    }
    make() {
        //
    }
    setWater() {
        //
    }
    setSugar() {
        //void
    }
    setLemonJuice() {
        //
    }
}

class HotMilkFactory extends ProductFactory{
    constructor() {
        super();
        this.create = function (cust, prep) {
            return new HotMilk(cust, prep)
        }
    }
    getProduct(cust) {
        return this.create(cust, prep);
    }
}

class HotMilk extends Product{
    constructor(cust, prep) {
        super();
        this.cust = cust;
        this.prep = prep;
    }
    make() {
        //
    }
    setMilkr() {
        //
    }
}

class CocaColaFactory extends ProductFactory{
    constructor() {
        super();
        this.create = function (cust, prep) {
            return new CocaCola(cust, prep);
        }
    }
    getProduct(cust) {
        return this.create(cust, prep);
    }
}

class CocaCola extends Product{
    constructor(cust, prep) {
        super();
        this.cust = cust;
        this.prep = prep;
    }
    make() {
        //
    }
    setWater() {
        //
    }
    setCoke() {
        //
    }
}

const run = () => {
    let cappuccino_fac = new CappuccinoFactory();
    let black_coffee_fac = new BlackCoffeeFactory();
    let lemonade_fac = new LemonadeFactory();
    let hotmilk_fac = new HotMilkFactory();
    let coke_fac = new CocaColaFactory();
    console.log(cappuccino_fac.create(10, 12));
    console.log(black_coffee_fac.create(12, 15));
    console.log(lemonade_fac.create(10, 15));
    console.log(hotmilk_fac.create(23, 10));
    console.log(coke_fac.create(2, 3));
};
run();






