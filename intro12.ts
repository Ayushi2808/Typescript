/* FUNCTIONS IN TYPESCRIPT
1.Call displayMember for two members: one with email,one without */
function displayMember(id: number,name: string, email ?:string): void{
    console.log(`ID: ${id},Name: ${name}`);
    if(email) console.log(`Email: ${email}`);
}

/* one with email */
displayMember(1,"Ayushi","ayushik882525@gmail.com");
/* one without email */
displayMember(2,"Anokhi");

/* 2.Use calculateFines to sum fines: 5,10,2.5 */
function calculateFines(...fines: number[]):number{
    let total=0;
    for(let fine of fines)
        total+=fine;
    return total;
}
let totalfine=calculateFines(5,10,2,5);
console.log(`Total fines: ${totalfine}`);

/* 3.compute a membership fee of $100 with default discount and then with 20% */
function membershipfee(price: number, discountRate: number=0.1):number {
    return price-price *discountRate;
}
let fees=membershipfee(100,0.2);
console.log(`Totalfees: ${fees}`);

/* 4.Greet visitors"Alice " and "BOb"using both vipGreet and consoleGreet. */
/* ----------------REvise it------------------ */
function GreetVisitor( visitor: string, formatter:(name:string)=>void ): void{
    formatter(visitor);
}

const vipGreet=(name: string) =>console.log(`Welcome to india ${name}`);
const consoleGreet=(name: string)=>console.log(`Hello ${name}`);

GreetVisitor("Alice",vipGreet);
GreetVisitor("Bob",vipGreet);
GreetVisitor("Alice",consoleGreet);
GreetVisitor("Bob",consoleGreet);

/* 5.To compute factorial(5) */
function factorial(n:number): number{
    if(n<=1) 
        return 1;
    return n*factorial(n-1);
}
let f=factorial(5);
console.log(`fact:${f}`);