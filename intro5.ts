const answers: Record<string, any>={};
function recordAnswer(questionId: string, answer: any): void{
    answers[questionId] = answer;
}

recordAnswer("q1","yes");
recordAnswer("q2",54);
recordAnswer("q3",true);

console.log(answers);