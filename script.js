const questions = [
    {
        question: "You receive an email from your bank asking you to verify your account by clicking a link. The email uses your name but the URL looks suspicious. What should you do?",
        options: [
            "Click the link immediately",
            "Reply to the email asking for confirmation",
            "Ignore the email and contact the bank through official channels",
            "Forward the email to friends"
        ],
        correct: 2,
        explanation: "Banks never ask for sensitive information via email links. Always contact them through official apps or websites. never trust them lil homie or you'll end up hacked"
    },
    {
        question: "Which password is the most secure?",
        options: [
            "password123",
            "MyName2004",
            "Q@9!mL#2z",
            "12345678"
        ],
        correct: 2,
        explanation: "Strong passwords contain a mix of letters, numbers, and symbols and are hard to guess. never be an idiot who uses 1234"
    },
    {
        question: "What is phishing?",
        options: [
            "A way to improve internet speed",
            "A cyberattack that tricks users into giving personal information",
            "A software update",
            "A type of antivirus"
        ],
        correct: 1,
        explanation: "Phishing uses fake messages or websites to steal personal or financial data, take it seriously"
    },
    {
        question: "You get a message saying you won a prize you never entered. What is the safest response?",
        options: [
            "Claim the prize quickly",
            "Share your details to confirm identity",
            "Ignore or delete the message",
            "Click the provided link"
        ],
        correct: 2,
        explanation: "Unexpected prizes are common scams. Ignoring them is the safest option. or you'll end up poor and bitter"
    },
    {
        question: "What is social engineering?",
        options: [
            "Building social media apps",
            "Manipulating people to gain confidential information",
            "Fixing software bugs",
            "Encrypting data"
        ],
        correct: 1,
        explanation: "Social engineering exploits human trust rather than technical vulnerabilities."
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestion];

    if (selectedIndex === q.correct) {
        feedbackEl.textContent = "Correct! " + q.explanation;
        feedbackEl.style.color = "green";
        score++;
    } else {
        feedbackEl.textContent = "Incorrect. " + q.explanation;
        feedbackEl.style.color = "red";
    }

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
