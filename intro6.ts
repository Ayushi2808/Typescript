/* to create function with given parameters and also give summary of transaction */
function processTransaction(amount:number, currency:string, isCredit :boolean): void{
    if(isCredit){
        console.log(`Creditd of Rs:${amount}, processed : ${currency}`);
    }else{
        console.log(`Debited of Rs:${amount}, processed : ${currency}`)
    }
}

processTransaction(4999,"INR",true);
processTransaction(1200,"Groceries",false);