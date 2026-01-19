var answers = {};
function recordAnswer(questionId, answer) {
    answers[questionId] = answer;
}
recordAnswer("q1", "yes");
recordAnswer("q2", 54);
recordAnswer("q3", true);
console.log(answers);
