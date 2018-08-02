var questionBody = $("#questionBody");
var questionCounter = 0;

// Array containing the objects which will contain each question to display along with the correct answer
var questionArray = [
    // Question 1
    {
        "question": "Which NBA team has the most NBA Championships?",
        "options": [
                        "Los Angeles Lakers", "Chicago Bulls","Boston Celtics", "Golden State Warriors"
                    ],
        "answer": 2,
        "gifURL": "https://media.giphy.com/media/13nGUkFuWXyJgc/source.gif",
        "correct": "The Boston Celtics have won 17 total titles!"
    },
    // Question 2
    {
        "question": "Which NBA player has won the most MVP awards?",
        "options": [
                        "Kareem Abdul-Jabbar", "Bill Russel", "Lebron James", "Michael Jordan"
                    ],
        "answer": 0,
        "gifURL": "https://78.media.tumblr.com/dcb85b1b8fbd1844e4756276a9360508/tumblr_oom5xwUeHz1sdydefo1_400.gif",
        "correct": "Kareem Abdul-Jabbar won 6 total MVP awards!"
    },
    // Question 3
    {
        "question": "Out of the following teams, which has won an NBA championship?",
        "options": [
                        "Charlotte Hornets", "Denver Nuggest", "Toronto Raptors", "Detroit Pistons"
                    ],
        "answer": 3,
        "gifURL": "https://media.giphy.com/media/3o6ZsWqqp4meCU6Yx2/giphy.gif",
        "correct": "The Pistons have won 3 total championships!"
    },
    // Question 4
    {
        "question": "Which of the following players has the most MVP awards?",
        "options": [
                        "Allen Iverson", "Kobe Bryant", "Steve Nash", "Shaquille O'Neal"
                    ],
        "answer": 2,
        "gifURL": "https://media.giphy.com/media/JIRwKDrQuvEYM/giphy.gif",
        "correct": "Steve Nash has won 2 MVPs while the rest have only won 1!"
    },
    // Question 5
    {
        "question": "Which NBA player has played the most total games?",
        "options": [
                        "Michael Jordan", "Robert Parrish", "Bill Russel", "Karl Malone"
                    ],
        "answer": 1,
        "gifURL": "https://prohoopshistory.files.wordpress.com/2013/04/robert-parish-schools-kareem.gif",
        "correct": "Robert Parrish has the record with 1611 games!"
    },
    // Question 6
    {
        "question": "Who was the youngest player to win the MVP award?",
        "options": [
                        "Michael Jordan", "Derrick Rose", "Lebron James", "Kobe Bryant"
                    ],
        "answer": 1,
        "gifURL": "https://media.giphy.com/media/pLDmEOvyx2XLO/giphy.gif",
        "correct": "Derrick Rose was the youngest to win it at 22 years and 5 months old."
    },
    // Question 7
    {
        "question": "Who was the oldest player to win the MVP award?",
        "options": [
                        "Karl Malone", "Kareem Abdul Jabbar", "Lebron James", "Tim Duncan"
                    ],
        "answer": 0,
        "gifURL": "https://media0.giphy.com/media/ZWVLbmDFOcRby/giphy.gif",
        "correct": "Karl Malone was 35 when he won the MVP award."
    },
    // Question 8
    {
        "question": "Which NBA icon had the nickname \"The Answer\"?",
        "options": [
                        "Paul Pierce", "Allen Iverson", "Kevin Garnett", "Shaquille O'Neal"
                    ],
        "answer": 1,
        "gifURL": "https://media.giphy.com/media/3UYJvASLVfFDO/giphy.gif",
        "correct": "Allen Iverson was given this nickname because his challenge to the basketball's conformity to a family friendly environment."
    }
]

function newQuestion(){
    questionBody.empty();
    // Add Question Div
    var questionDiv = $("<div>").html("<h2>" + questionArray[questionCounter].question + "</h2>");
    questionBody.append(questionDiv)

    // Add Answer Divs
    for(var i = 0; i < 4; i++){
        var tempDiv = $("<div>").text(questionArray[questionCounter].options[i])
        tempDiv.addClass("answer");
        tempDiv.attr("id", "answer" + i)
        // If it is the correct answer, attach class correct
        if(i === questionArray[questionCounter].answer){
            tempDiv.addClass("correct");
        }
        questionBody.append(tempDiv);
    }
    addClick();
}

// Function to handle if correct answer is clicked
function correctAnswer(){
    questionBody.empty();
    questionBody.append("<h3>Correct!</h3>");
    questionBody.append("<h3>" + questionArray[questionCounter].correct + "</h3>");
    questionBody.append("<img class='giph' src='" + questionArray[questionCounter].gifURL + "'>");
}

// Function to handle if wrong answer is clicked
function wrongAnswer(){
    questionBody.empty();
    questionBody.append("<h3>Sorry, that's not the right answer!</h3>");
    questionBody.append("<h3>The correct answer was " + questionArray[questionCounter].options[questionArray[questionCounter].answer] + "</h3>")
    questionBody.append("<h3>" + questionArray[questionCounter].correct + "</h3>");
    questionBody.append("<img class='giph' src='" + questionArray[questionCounter].gifURL + "'>");
}


// Add click events onto each potential answer
function addClick(){
    for(var i = 0; i < questionArray.length;i++){
        $("#answer" + i).click(function(){
            if($(this).hasClass("correct")){
                correctAnswer();
            }
            else{
                wrongAnswer();
            }
            questionCounter++;
            setTimeout(function(){ newQuestion();}, 4000);
        })
    }
}



$("#startButton").click(function(){
    questionBody.empty();
    newQuestion();
})