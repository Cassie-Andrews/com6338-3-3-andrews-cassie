// Your code here

//this global variable contains an array of question objects
//this data structure contain all the q and a info for the quiz
function runQuiz() {
    var questionsArr = [
        {
            question:'Question 1',
            answer:true
        },
        {
            question:'Question 2',
            answer:false 
        },
        {
            question:'Question 3',
            answer:true
        },
        {
            question:'Question 4',
            answer:false
        },
        {
            question:'Question 5',
            answer:true
        }
    ];

    //for = keyword, (marks the condition/counter)
    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i].question
        var answer = confirm(question)
    }
}