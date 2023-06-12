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
        
        var countdown = 100;
        var countDisplay = document.getElementById('countdown');
    
        var timer = setInterval(function() {
            countdown--;
            countDisplay.textContent = countdown;
            if (countdown <= 0) {
                clearInterval(timer);
                endQuiz();
            }
        }, 1000);//every choices array now has button with class and value
    };


// Function to check if a choice is correct
function checkAnswer() {
    // If the choice is correct and the value is match the answer the correct
    if (this.value === questions[currentQuestionIndex].answer) {
        alert('Correct!'); //Need to change it to RIGHT OR WRONG in the footer/container
    } else { //otherwise wrong
        alert('Wrong!');
    }

    // Move to the next question
    currentQuestionIndex++;

    // If there are no more questions, end the quiz
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

// Function to end the quiz
function endQuiz() {
    // Do something to end the quiz...
}

// Start the quiz when the page loads
displayQuestion();


