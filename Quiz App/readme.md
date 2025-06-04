# 🧠 Quiz App
A simple, interactive multiple-choice quiz application built with HTML, CSS (Bootstrap), and JavaScript. This app displays a series of general knowledge questions, allows the user to select answers, and displays the final score at the end.

---

## 🚀 Features
10 general knowledge questions

Each question has 4 options

Users select one option per question

Displays score out of 10 at the end

Built with Bootstrap for responsive and clean UI

---

## 🛠️ Technologies Used
**HTML5**: Structure of the quiz

**CSS/Bootstrap 5**: Styling and layout

**JavaScript (Vanilla)**: Logic for questions, options, selection, and scoring

---

## 📂 Project Structure

quiz-app/

├── index.html       # Main HTML structure

├── script.js        # JavaScript logic for quiz flow

└── README.md        # Project description and instructions

---

## 📋 How It Works
On page load, the first question and its options are displayed.

The user selects one of the radio buttons and clicks "Submit & Next".

The next question is loaded.

After the final question, the total score is displayed below.

---

## 🔍 Key JavaScript Logic
**showQuestion(index)**: Displays the current question and its options.

**checkQuestion(index)**: Checks which option the user selected and stores the answer.

**countScore()**: Compares user answers with correct answers and calculates the score.

**btn.addEventListener('click')**: Manages navigation through the quiz and triggers score display at the end.

---

## ✅ How to Run
Download or clone this repository.

Open index.html in a web browser.

Start the quiz and test your knowledge!

---

## 📌 To Improve
Add a timer per question.

Show correct answer after each question.

Add progress bar and restart functionality.

Store high scores using localStorage.



https://github.com/user-attachments/assets/8f8d8a7b-e0cf-4c56-93c2-a47a248d0004


