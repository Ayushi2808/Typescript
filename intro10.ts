/* 1.Checking sign of integar number */
function checkSign(num : number): boolean{
    if(num >=0){
        console.log(num,"is a positive number");
        return true;
    }else{
        console.log(num, " is a negative number");
        return false;
    }
}

/* 2.checking even or odd using if...else function */
function checkEvenOdd (num: number): boolean{
    if(num % 2 ===0){
        console.log(num," is an even number");
        return true;
    }else{
        console.log(num," is an odd number");
        return false;
    }
}

/* 3.Checking grade score using if..else if..else */
function checkGrade(score: number): string{
    if(score >=90) 
        return "Grade A";
    else if(score >=80) 
        return "Grade B";
    else if(score >=70) 
        return "Grade C";
    else if(score >=60) 
        return "Grade D";
    else if(score >=50) 
        return "Grade E";
    else 
        return "Grade F";
}

/* 4. function to provide feedback according to grade of student */
function provideFeedback(score : string): void{
    switch(score){
        case "Grade A": 
            console.log("Excellent work !!");
            break;
        case "Grade B":
            console.log("Very good job !!");
            break;
        case "Grade C":
            console.log("Good effort !!");
            break;
        case "Grade D":
            console.log("You passed , but there's room for improvement");
            break;
        default:
            console.log("unsatisfactory performance, better luck next time");
            break;
    }
}

function evaluateperformance(num: number): void{
    if(!checkSign(num))return;
    if(!checkEvenOdd(num)) return ;
    const grade = checkGrade(num);
    console.log(`Assign Grade: ${grade}`);
    provideFeedback(grade);
    
}
evaluateperformance(90);
evaluateperformance(-45);