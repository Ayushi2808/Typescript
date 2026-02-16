/* 1.Implement a new gateway class BankTransferGateway that logs payment processing. */
/* 2.Use it with PaymentProcessor to process a payment */
/* 3.Write a mock gateway that simulates failure (return false) and test error handling */

interface PaymentGateway{
    processPayment(amount: number): Promise<boolean>;
}

class BankTransferGateway implements PaymentGateway{
    async processPayment (amount: number): Promise<boolean>{
        console.log(`Processing bank transfer for amount: ${amount}`);

        //Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(`Transfer of ${amount}completed successfully.`);
        return true;
    }
}

class MockGateway implements PaymentGateway{
    async processPayment(amount: number): Promise<boolean> {
        console.log(`Simulating payment processing for amount: ${amount}`);
        await new Promise(resolve =>setTimeout(resolve,1000));
        console.log(`Payment processing failed for amount: ${amount}`);
        return false;

    }
}

class PaymentProcessor{
    constructor(private gateway: PaymentGateway){}
    async processPayment(amount: number): Promise<void>{
        const success = await this.gateway.processPayment(amount);
        if(success){
            console.log(`Payment is successful`);
        }else{
            console.log(`Payment failed.Try again later`);
        }

    }
}

//Using BankTransferGateway
const bankGateway= new BankTransferGateway();
const paymentProcessor= new PaymentProcessor(bankGateway);
paymentProcessor.processPayment(100);

//Using MockGateway to simulate failure
const mockGateway= new MockGateway();
const paymentProcessorwithMock= new PaymentProcessor(mockGateway);
paymentProcessorwithMock.processPayment(50);





