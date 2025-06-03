📚 **Quiz App - README**

📝 **Description**

This is a simple web-based Quiz Application built using HTML, Bootstrap 5, and JavaScript. The quiz dynamically displays one multiple-choice question at a time and allows users to select an answer and move to the next question by clicking a "Submit & Next" button.

💡 **Features**

Displays one question at a time

Multiple-choice options with radio buttons (A, B, C, D)

Uses a JavaScript array (mcqlist) to store questions, options, and answers

Dynamically updates the DOM on button click

Bootstrap 5 styling for clean UI

📁 **Project Structure**

project-folder/

├── index.html      # Main HTML page

├── script.js       # JavaScript logic for quiz (inline in your case)

└── style.css       # Optional: for custom styles (not included currently)

**🧠 How It Works**

HTML (index.html)

A container holds:

A title (Quiz)

A paragraph to display the current question

Four radio buttons (A, B, C, D) each with a label and a span to show answer options

A "Submit & Next" button

JavaScript (script.js)
mcqlist: Array of 10 multiple-choice questions with options and correct answers.

answer: Array containing the correct answer strings (not used for scoring currently).

quizquestions(index): Function to update the DOM with the current question and its options.

btn.addEventListener('click'): Increments the current index and shows the next question. After the last question, it loops back to the start.

options: NodeList of .option spans that display each answer choice.

input: NodeList of all the radio inputs (for future use like answer checking).

🚧 Limitations & To-Do
❌ Currently no score tracking or feedback on right/wrong answers

❌ No logic to check if an answer was selected

🔁 Resets to question 1 after question 10 without a final score or summary

✅ Potential enhancements:

Add score tracking

Prevent advancing without selecting an answer

Display result at the end

Show correct answer after each question

**🛠️ Tech Stack**

HTML5

CSS3 (via Bootstrap 5)

JavaScript (Vanilla)

https://github.com/user-attachments/assets/0baa9e0f-7c20-4e89-b224-ec6493c3a827




