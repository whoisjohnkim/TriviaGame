var questionBody = $("#questionBody");
var questionCounter = 0;
var correctCounter = 0;
var wrongCounter = 0;
var incompleteCounter = 0;
var intervalId;
var number = 20;

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
        "question": "Out of the following teams, which has won a NBA championship?",
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

function stop(){
    clearInterval(intervalId);
}

function decrement(){
    number--;
    $("#timeRemaining").text(number);
    if(number === 0){
        incompleteCounter++;
        stop();
        wrongAnswer();
    }
}

function startTimer(){
    number = 20;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function finalPage(){
    questionBody.empty();
    // Make final giph in img tag
    var finalGiph = $("<img>");
    finalGiph.addClass("giph");

    // Make final message in h3 tag
    var finalMessage = $("<h3>");

    // Make final statistics to show user in h4 tags
    var finalCorrect = $("<h4>");
    finalCorrect.text("Correct Answers: " + correctCounter);
    var finalWrong = $("<h4>");
    finalWrong.text("Wrong Answers: " + wrongCounter);
    var finalUnanswered = $("<h4>");
    finalUnanswered.text("Unanswered: " + incompleteCounter);

    // Depending on correct answers, change final message and final giph shown
    if(correctCounter >= 6){
        finalGiph.attr("src", "https://media.giphy.com/media/Mj4r3w2crzOeY/giphy.gif");
        finalMessage.text("Good job! You know your stuff. Here's how you did!");
    }
    else{
        finalGiph.attr("src", "https://media1.tenor.com/images/c02da745cbc6388c5d512708828a638b/tenor.gif?itemid=7910092");
        finalMessage.text("...Maybe you should study up a little bit more on your NBA knowledge. Here's how you did.");
    }

    // Add a start again button
    var startAgainButton = $("<h1>");
    startAgainButton.attr("id", "startAgainButton");
    startAgainButton.text("Try Again!");
    startAgainButton.click(function(){
        questionCounter = 0;
        correctCounter = 0;
        wrongCounter = 0;
        incompleteCounter = 0;
        newQuestion();
    })

    questionBody.append(finalMessage);
    questionBody.append(finalCorrect);
    questionBody.append(finalWrong);
    questionBody.append(finalUnanswered);
    questionBody.append(finalGiph);
    questionBody.append(startAgainButton);
}


function newQuestion(){
    questionBody.empty();
    // Add Question Div
    var timeDiv = $("<div><h2>Time Remaining: <span id='timeRemaining'>20</span> seconds</h2></div>")
    questionBody.append(timeDiv);
    var questionDiv = $("<div>").html("<h2>" + questionArray[questionCounter].question + "</h2>");
    questionBody.append(questionDiv)

    // Add Answer Divs
    for(var i = 0; i < 4; i++){
        var tempDiv = $("<div>").text(questionArray[questionCounter].options[i])
        tempDiv.addClass("answer");
        tempDiv.addClass("clickable");
        tempDiv.attr("id", "answer" + i)
        // If it is the correct answer, attach class correct
        if(i === questionArray[questionCounter].answer){
            tempDiv.addClass("correct");
        }
        questionBody.append(tempDiv);
    }
    addClick();
    startTimer();
}

// Function to handle if correct answer is clicked
function correctAnswer(){
    questionBody.empty();
    questionBody.append("<h3>Correct!</h3>");
    questionBody.append("<h3>" + questionArray[questionCounter].correct + "</h3>");
    questionBody.append("<img class='giph' src='" + questionArray[questionCounter].gifURL + "'>");
    correctCounter++;
    questionCounter++;
    if(questionCounter === questionArray.length){
        stop();
        setTimeout(function(){finalPage();}, 4500);
    }
    else{
        setTimeout(function(){ newQuestion();}, 4000);
    }
}

// Function to handle if wrong answer is clicked
function wrongAnswer(){
    questionBody.empty();
    questionBody.append("<h3>Sorry, that's not the right answer!</h3>");
    questionBody.append("<h3>The correct answer was " + questionArray[questionCounter].options[questionArray[questionCounter].answer] + "</h3>")
    questionBody.append("<h3>" + questionArray[questionCounter].correct + "</h3>");
    questionBody.append("<img class='giph' src='" + questionArray[questionCounter].gifURL + "'>");
    questionCounter++;
    setTimeout(function(){ newQuestion();}, 4000);
    wrongCounter++;
    if(questionCounter === questionArray.length){
        stop();
        setTimeout(function(){finalPage();}, 4500);
    }
    else{
        setTimeout(function(){ newQuestion();}, 4000);
    }
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

        })
    }
}



$("#startButton").click(function(){
    questionBody.empty();
    newQuestion();
})