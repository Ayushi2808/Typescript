/* 1.Create an Assignment class extending Content 
2.Also adding a dueDate propery private*/

abstract class Content{
    protected title: string;
    protected sent: boolean=false;

    constructor(title: string){
        this.title=title;
    }
    sent_to(){
        this.sent=true;
    }
    abstract getType(): string;
}
class Assignment extends Content{
    /* here Assignment is a child class which inherits all properties and methods of Content */
    private dueDate: Date|null=null;
    constructor(title: string){
    super(title);
   }  

   //Instructor can modify and see all the changes------------
   setduedate(date: Date,user: {role: string}){
    if(this.sent){
        console.log("you cannot modify due date");
        return;
    }
    if(user.role != "instructor"){
        console.log("Only instructors can update the due date.");
        return;
    }
    this.dueDate=date;
    console.log("Updated");
   }
   
   // Admin can only review by this method------------
   review(user:{role:string}){
     if(user.role === "admin"){
        console.log("Title: ",this.title);
        console.log("Due Date: ",this.dueDate);
        console.log("Type: ",this.getType());
     }else{
        console.log("ONLY ADMIN can review");
     }
   }
   getduedate():Date |null{
    return this.dueDate;
   }
   getType(): string{
    return "Assignment";
   }
}

const instructor={role: "instructor"};
const learner= {role: "learner"};
const admin={role: "admin"};
const assignment=new Assignment("vibe completion");
assignment.setduedate(new Date("13-02-2026"),admin);
assignment.setduedate(new Date("14-02-2026"),instructor);

assignment.review(admin);
assignment.review(learner);
assignment.sent_to();


    