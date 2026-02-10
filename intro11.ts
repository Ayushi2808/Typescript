/* 1.Add a counter for each transaction type(checkout,return,priority,cancelled)using for loop and an object */
type Transaction ={
    id: number;
    type: "checkout"| "return" |"cancelled" |"priority";
};
const transactions: Transaction[]=[
    {id:1, type:"checkout"},
    {id:2, type:"return"},
    {id:3, type:"cancelled"},
    {id:4, type:"priority"}
];

/* 2.for loop */
let totalProcessed =0;
for(let i=0;i< transactions.length;i++){
    const tx = transactions[i];
    if(tx.type ==="cancelled"){
        continue;
    }
    if(tx.type ==="priority"){
        console.log("priority transaction encountered, stopping");
        break;
    }
    console.log(`Processing transaction ${tx.id}: ${tx.type}`);
    totalProcessed++;
}
console.log(`Total Processed: ${totalProcessed}`);

/* 3.while loop */
let idx=0;
while(true){
    const tx=transactions[idx];
    if (tx.type === "priority"){
        console.log("priority transaction arrived --breaking loop");
        break;
    }
    console.log("processing:",tx.type);
    idx++;
}

/* 4.do-while loop */
const returnqueue: Transaction[]=[
    {id : 28, type :"return"}
];
let i=0;
do{
    console.log("Processing return transaction",returnqueue[i].id);
    if(i === 0){
        returnqueue.push({id:11 ,type: "return"});
    }
    i++;
}while(i< returnqueue.length);

/* 5.for-in loop 
Inventory means how many units of each item you have in stock */
/* In this I have faced issue as I was not declaring type information */
const inventory:{[key:string]:number}={
    pens:20,
    pencil:30,
    eraser:44
};
for(const item in inventory){
    inventory[item]=0;
}
console.log(inventory);

/* 6.Displaying visitors name in reverse order using a for or for---of loop */
const visitors: string[]=["Ayushi","nandani","anokhi","namo"];
for(let i=visitors.length-1;i>=0;i--){
    console.log(visitors[i]);
}

/* for__of loop */
const visitors1: string[]=["Ayushi","nandan","anupriya","anukampa"];
for(const name of[...visitors1].reverse()){
    console.log(name);
}