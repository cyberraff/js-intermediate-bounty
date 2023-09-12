// Define quiz/survey questions and answers as objects
const questions = [
	{
		type: 'multiple-choice',
		question: 'What is the capital of France?',
		options: ['Paris', 'Berlin', 'London'],
		correctAnswer: 'Paris',
	},
	{
		type: 'true-false',
		question: 'Is the Earth flat?',
		correctAnswer: 'false',
	},
	{
		type: 'multiple-choice',
		question: 'What is the largest planet in our solar system?',
		options: ['Mars', 'Venus', 'Jupiter'],
		correctAnswer: 'Jupiter',
	},
	{
		type: 'true-false',
		question:
			'The Great Wall of China is visible from space. (True or False)',
		correctAnswer: 'False',
	},
	{
		type: 'multiple-choice',
		question:
			'Which gas do plants absorb from the atmosphere during photosynthesis?',
		options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen'],
		correctAnswer: 'Carbon Dioxide',
	},
	{
		type: 'true-false',
		question: 'The Earth has one moon. (True or False)',
		correctAnswer: 'True',
	},
	{
		type: 'multiple-choice',
		question: 'Who wrote the play "Romeo and Juliet"?',
		options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen'],
		correctAnswer: 'William Shakespeare',
	},
	{
		type: 'true-false',
		question:
			'Water boils at 100 degrees Celsius at sea level. (True or False)',
		correctAnswer: 'True',
	},
	{
		type: 'multiple-choice',
		question: 'Which planet is known as the Red Planet?',
		options: ['Mars', 'Venus', 'Jupiter'],
		correctAnswer: 'Mars',
	},
	{
		type: 'true-false',
		question: 'The Eiffel Tower is located in London. (True or False)',
		correctAnswer: 'False',
	},
	{
		type: 'multiple-choice',
		question: "Which gas makes up the majority of the Earth's atmosphere?",
		options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen'],
		correctAnswer: 'Nitrogen',
	},
	{
		type: 'multiple-choice',
		question: 'What is the largest mammal in the world?',
		options: ['African Elephant', 'Giraffe', 'Blue Whale'],
		correctAnswer: 'Blue Whale',
	},
	// Add more questions here
];

let currentQuestionIndex = 0;

const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

function displayQuestion(question) {
	questionTextElement.textContent = question.question;

	optionsContainer.innerHTML = '';

	if (question.type === 'multiple-choice') {
		question.options.forEach((option, index) => {
			const optionElement = document.createElement('div');
			optionElement.textContent = option;
			optionElement.classList.add('option');
			optionElement.addEventListener('click', () => checkAnswer(option));
			optionsContainer.appendChild(optionElement);
		});
	} else if (question.type === 'true-false') {
		const trueButton = document.createElement('button');
		trueButton.textContent = 'True';
		trueButton.addEventListener('click', () => checkAnswer('true'));

		const falseButton = document.createElement('button');
		falseButton.textContent = 'False';
		falseButton.addEventListener('click', () => checkAnswer('false'));

		optionsContainer.appendChild(trueButton);
		optionsContainer.appendChild(falseButton);
	}
}

function checkAnswer(userAnswer) {
	try {
		const correctAnswer = questions[currentQuestionIndex].correctAnswer;

		if (userAnswer === correctAnswer) {
			alert('Correct!');
		} else {
			alert('Incorrect!');
		}

		currentQuestionIndex++;

		if (currentQuestionIndex < questions.length) {
			displayQuestion(questions[currentQuestionIndex]);
		} else {
			alert('Quiz/survey completed!');
		}
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

// Initialize the quiz/survey
displayQuestion(questions[currentQuestionIndex]);

nextButton.addEventListener('click', () => {
	if (currentQuestionIndex < questions.length) {
		displayQuestion(questions[currentQuestionIndex]);
	} else {
		alert('Quiz/survey completed!');
	}
});
