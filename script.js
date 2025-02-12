const questions = [
    {
        question: "How do you prefer to spend your free time?",
        options: ["Reading a book alone", "Going out with friends"]
    },
    {
        question: "Which environment do you prefer?",
        options: ["Quiet and peaceful", "Lively and energetic"]
    },
    {
        question: "How do you make decisions?",
        options: ["Carefully thinking it through", "Going with your gut feeling"]
    },
    // Add more questions here
];

let currentQuestion = 0;
let answers = [];

function updateProgress() {
    const progress = ((currentQuestion) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function updateQuestion() {
    const questionElement = document.getElementById('question');
    const questionNumberElement = document.getElementById('question-number');
    const optionButtons = document.querySelectorAll('.option');
    
    questionElement.textContent = questions[currentQuestion].question;
    questionNumberElement.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    
    optionButtons[0].textContent = questions[currentQuestion].options[0];
    optionButtons[1].textContent = questions[currentQuestion].options[1];
}

function selectOption(optionIndex) {
    answers.push(optionIndex);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestion();
        updateProgress();
    } else {
        // Quiz completed - you can add result calculation here
        alert('Quiz completed!');
        // Reset quiz if needed
        currentQuestion = 0;
        answers = [];
        updateQuestion();
        updateProgress();
    }
}

// Initialize the quiz
updateQuestion();
updateProgress(); 