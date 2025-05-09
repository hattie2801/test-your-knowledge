console.log ("I hope this works!")

document.addEventListener(`DOMContentLoaded`, () =>{
    let flashcards = [
        {question: "What does HTML stand for?", answer: "HyperText Markup Language"},
        {question: "What tag is used to create a hyperlink in HTML?", answer: "<a>"},
        {question: "Which tag defines the largest heading?", answer: "<h1>"},
        {question: "What does CSS stand for?", answer: "Cascading Style Sheets"},
        {question: "How do you change the background color of an element in CSS?", answer: "Use background-color, ex. background-color: green"},
        {question: "What symbol is used to select a class in CSS?", answer: "A period (.), ex .myClass"},
        {question: "What keyword declares a variable in JavaScript?", answer: "let, const, or var"},
        {question: "What does console.log() do?", answer: "It prints output to the browser console."},
        {question: "What operator checks for both value and type equality?", answer: "==="},
        {question: "What data type is true (in quotes)?", answer: "A string"},
    ]

    let currentCard = 0;

    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');

    function displayCard() {
        questionElement.textContent = flashcards[currentCard].question;
        answerElement.textContent = flashcards[currentCard].answer;
        flashcardElement.classList.remove('is-flipped');
    }

    document.getElementById("flip-card").addEventListener("click", () => {
        flashcardElement.classList.toggle("is-flipped");
    });

    document.getElementById("next-card").addEventListener("click", () => {
        currentCard = (currentCard + 1) % flashcards.length;
        displayCard();
    })

    displayCard();
})

