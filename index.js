// Your code here

//this global variable contains an array of question objects
//this data structure contain all the q and a info for the quiz
function runQuiz() {
    var questionsArr = [
        {question: 'Question 1', answer: true},
        {question: 'Question 2', answer: true},
        {question: 'Question 3', answer: true},
        {question: 'Question 4', answer: true},
        {question: 'Question 5', answer: true}
    ]

    //for = keyword, (marks the condition/counter)
    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i].question
        console.log(question) //this worked properly but content in next step is off
        var answer = confirm(question) //showing [object Object] in confirm
    }
}