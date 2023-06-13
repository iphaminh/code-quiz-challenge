// This is an array of question objects. Each object represents one question and its choices.
var questions = [
    {
        title: "Question 1: Which HTML attribute is used to define inline styles?",
        choices: ["class", "styles", "font", "style", "id"],
        answer: "style"
    },
    {
        title: "Question 2: In Final Fantasy 7 Remake, who is the main protagonist?",
        choices: ["Cloud Strife", "Tifa Lockhart", "Barret Wallace", "Aerith Gainsborough"],
        answer: "Cloud Strife"
    },
    {
        title: "Question 3: Who is the primary antagonist in Final Fantasy 8?",
        choices: ["Ultimecia", "Seifer Almasy", "Edea Kramer", "Rinoa Heartilly"],
        answer: "Ultimecia"
    },
    {
        title: "Question 4: What is the name of the classified U.S. government program revealed in 2017 to investigate UFOs?",
        choices: ["Blue Book Project", "Majestic 12", "Advanced Aviation Threat Identification Program", "Project Sign"],
        answer: "Advanced Aviation Threat Identification Program"
    },
    {
        title: "Question 5: Which of these foods is NOT generally considered to be good for eye health?",
        choices: ["Carrots", "Leafy greens", "Fish", "Sugary drinks"],
        answer: "Sugary drinks"
    },
];

// We start with the first question
var currentQuestionIndex = 0;
var score = 0;

// Function to display a question
function displayQuestion() {
    // Get the current question from the global array of questions
    var question = questions[currentQuestionIndex]; //start from index 0 of the array of questions, meaning question 1 started
    // where to display and answer. Also clear out any old question and choices
    var questionContainer = document.getElementById('question');
    var choiceContainer = document.getElementById('choices');
    questionContainer.textContent = '';
    choiceContainer.innerHTML = '';
    questionContainer.textContent = question.title;


    // Now add each choice to the page
    question.choices.forEach(function(choice, i) { // meaning run a foreach function in choices array 
        var button = document.createElement('button'); // create a button element
        button.textContent = choice; // now inside the button we have to choose what is the current choice we have here!! thanks to the foreach function
        button.setAttribute('class', 'choice'); // setting up the class for button
        button.setAttribute('value', choice); // declare the current value of the button. Again thanks to foreach function

        // Add an event listener to each choice
        button.onclick = checkAnswer; //after "machanically" setting the button function, we now adding onclick function on the button to check the answer

        // Add the choice to the page
       choiceContainer.appendChild(button); 
    });
}
var quizEnd = false; 
function startCountDown() {

        var countdown = 100;
        var countDisplay = document.getElementById('countdown');
    
        var timer = setInterval(function() {
            countdown--;
            countDisplay.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(timer);
                if(!quizEnd) {
                endQuiz();
                }
            }
        }, 100);//every choices array now has button with class and value
    }

    

// Function to check if a choice is correct
function checkAnswer() {
    // Get a reference to the result container
    var resultContainerRight = document.querySelector('.containerRight');
    var resultContainerWrong = document.querySelector('.containerWrong');

    // If the choice is correct and the value matches the answer
    if (this.value === questions[currentQuestionIndex].answer) {
        // Display a success message
        resultContainerRight.textContent = 'Right!';
        resultContainerWrong.textContent = '';
        score++; //
    } else {
        // Otherwise, display a failure message
        resultContainerWrong.textContent = 'Wrong!';
        resultContainerRight.textContent = '';
    }

    // Move to the next question
    currentQuestionIndex++;

    // If there are no more questions, end the quiz
    if (currentQuestionIndex === questions.length && !quizEnd) {
        endQuiz();
    } else {
        displayQuestion();
    }
    
} 

function endQuiz() {
    var endQuizMessage = "All DONE!";
    var endQuizInstructions = "Your final score is: ";
    var content = document.getElementById('content');

    quizEnd = true;

    // Clear out the question area
    document.getElementById('question').textContent = '';
    document.getElementById('choices').innerHTML = '';

    // Create and append the "All DONE!" message
    var endMessage = document.createElement('h2');
    endMessage.textContent = endQuizMessage;
    endMessage.setAttribute('class', 'endMessage');
    content.appendChild(endMessage);

    // Show the final score
    var finalScore = document.createElement('p');
    finalScore.setAttribute('id', 'finalScore');
    finalScore.textContent = endQuizInstructions + score; 
    content.appendChild(finalScore);

    // Input for player's name
    var nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'playerName');
    nameInput.setAttribute('placeholder', 'Your name');
    content.appendChild(nameInput);

    // Submit button to save the score
    var submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('onclick', 'saveScore()'); 
    content.appendChild(submitButton);

    // Button to view high scores
    var viewScoresButton = document.createElement('button');
    viewScoresButton.textContent = 'View High Scores';
    viewScoresButton.setAttribute('onclick', 'viewHighScores()'); 
    content.appendChild(viewScoresButton);
}

// Start the quiz when the page loads
displayQuestion();
startCountDown();
