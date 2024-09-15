//start quiz button is already set to run the function runQuiz


//global variable containing an array of >= 5 question objects
//question objects should have 2 properties; question (string) and answer (boolean)
var questionsArr = [
        {
            question: "Florida gained statehood in 1845.",
            answer: true
        },
        {
            question: "Miami is Florida's most populous city.",
            answer: false 
        },
        {
            question: "Florida's state flower is the orange blossom.",
            answer: true
        },
        {
            question: "Florida's state bird is the flamingo.",
            answer: false
        },
        {
            question: "Florida's capital city is Tallahassee.",
            answer: true
        },
        {
            question: "Florida's nickname is the hurricane state.",
            answer: false
        }
    ];


//function named runQuiz that uses a for loop to iterate over the array above
function runQuiz() {

    console.log(questionsArr);

    var score = 0; //score starts at 0

    //for loop where "for" is the keyword and (parentheses mark the condition/counter)
    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i].question;
        var answer = questionsArr[i].answer;
        var userInput = confirm(question);
    
    //calculating score, if user input is correct then +1 to score
        if (userInput === answer) {
            score++;
        }

        console.log(typeof score)
    }

    //calculating score percentage 
    var totalQuestions = questionsArr.length;
    var percentage = (score / totalQuestions) * 100;

    //round score percentage to a whole number
    var finalPercentage = (Math.round(percentage));

    //alert displaying final score as a percentage of total correct
    alert('You scored: ' + finalPercentage + '%');

}