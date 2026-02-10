class FeedbackBox<T>{
    private feedbackList: T[]=[];
    addFeedback(feedback: T):void{
        this.feedbackList.push(feedback);
    }
    getFeedback():T[]{
        return this.feedbackList;
    }
}

const Feedback1=new FeedbackBox<string>();
Feedback1.addFeedback("Great content !!");
Feedback1.addFeedback("Very helpful for me and pushed to learn beyond my limits within limited time");
console.log(Feedback1.getFeedback());

const Feedback2=new FeedbackBox<number>();
Feedback2.addFeedback(5);
Feedback2.addFeedback(4);
console.log(Feedback2.getFeedback());