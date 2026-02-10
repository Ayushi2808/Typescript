/* OPTIONAL AND DEFAULT PARAMETERS IN TYPESCRIPT */
/* 1.Describe person 
  name: string, optional: age?:number, print it */
function describeP(name:string, age ?:number): void{
    console.log(`Name: ${name},Age : ${age !==undefined? age:"Unknown"}`);
}
describeP("Eve");
describeP("Frank",18);

/* 2.calculating price */
function calculatePrice(bprice:number,discount: number=0.1 ): number{
      return bprice-bprice*discount;

}
console.log(calculatePrice(100));
console.log(calculatePrice(100,0.2));
console.log(calculatePrice(100,0.3));