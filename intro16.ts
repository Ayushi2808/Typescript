/* Singleton- Only one instance of a class can be created
Instance- an object of a class
An object is an instance of a class */
/* 1.Implement a PromotionSystem observer that announces special offers to customers when a drink is served */
class PromotionSystem{
    private static instance: PromotionSystem;
    private constructor(){}// it prevents the creation of multiple instances of the class from outside the class
    public static getInstance(): PromotionSystem{
        if(!PromotionSystem.instance){
            PromotionSystem.instance=new PromotionSystem();
        }
        return PromotionSystem.instance;
    }

    Offer(Drink: string){
        console.log(`Special Offer for YOU: Get 30% off on ${Drink} today !!`);
    }
}

const promotion1=PromotionSystem.getInstance();
promotion1.Offer("Coke");

const promotion2 = PromotionSystem.getInstance();
promotion2.Offer("Pepsi");
console.log(promotion1 === promotion2);//It returns true because both promotion1 and promotion2 are refering to the same instance of PromotionSystem class.

/* 2. Add it to the DrinkOrder notification list and test it */

class DrinkOrder{
    private drinkName: string;
    constructor(drinkName: string){
        this.drinkName=drinkName;
    }

    notify(){
        console.log(`Your ${this.drinkName}is ready`);
        const p = PromotionSystem.getInstance();
        p.Offer(this.drinkName);
    }
}

const order1=new DrinkOrder("Lemonade");
order1.notify();

const order2=new DrinkOrder("sharbat");
order2.notify();