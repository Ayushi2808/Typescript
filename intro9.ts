/* In this we are practising type aliases */
/* 1. Define a CustomerID alias for string */
type CustomerID = string;
type Customer ={
    id: CustomerID;
    name : string;
    email ?: string;
};

/* 2.creating a Customer object alias with id: CustomerID, name: string, and optional email?: string */
 let Customer1: Customer ={
    id :"24105", 
    name : "ayushi jain",
    email :"ayushik882525@gmail.com" };

type OrderStatus ="pending" | "shipped" | "delivered" |"cancelled";

type processOrder =(
    orderId: number,
    callback: (status: OrderStatus) => void
)=>void;

let process: processOrder =(orderId ,callback) =>{
    console.log("Order ID:", orderId);

    let status: OrderStatus ="shipped";
    callback(status);
};

type Container<T> = {
    value: T;
};

let customerContainer: Container<Customer> ={
    value :Customer1
};

process (101,(status)=>{
      console.log("Order Status:",status);
});


