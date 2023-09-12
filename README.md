# Quiz Website

Welcome to the Quiz website! This website allows you to take a quiz  with ten different questions. You can answer multiple-choice questions and true/false questions. Here's how to use the site:

## Instructions

1. Visit the website using your web browser.

2. You will see a question displayed on the screen.

3. Depending on the question type, you will either see multiple-choice options or true/false buttons.

4. Select your answer by clicking on an option or button.

5. Click the "Next" button to move to the next question.

6. After answering all twelve questions, you will receive a completion message.

7. Enjoy the quiz!

## Website Structure

The website is built using HTML, CSS, and JavaScript. Here's how classes, switch statements, and try-catch-finally statements were incorporated into the website:

### Classes

Classes are used to represent quiz questions and answers. Each question is an object with properties such as `type`, `question`, `options`, and `correctAnswer`. For example:

```javascript
{
    type: 'multiple-choice',
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Jupiter'
}
```

### Switch Statements

Switch statements are used to determine the type of question (multiple-choice or true/false) and dynamically generate the answer options or buttons accordingly. For example:

```javascript
if (question.type === 'multiple-choice') {
    // Generate multiple-choice options dynamically
} else if (question.type === 'true-false') {
    // Generate true/false buttons dynamically
}
```

### Try-Catch-Finally

Try-catch-finally statements are used for error handling, although this example focuses on a basic implementation. Error handling occurs when checking if the user's answer is correct, and appropriate messages are displayed using alert():

```javascript
try {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }

    // ...
} catch (error) {
    console.error('An error occurred:', error);
}
```

Feel free to explore and customize the code to meet your specific requirements or add more questions to the quiz. Enjoy using the Quiz  website!
