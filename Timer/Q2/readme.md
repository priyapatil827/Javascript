# 🕒 Digital Clock – README

## 📄 Description:
This project is a simple, responsive Digital Clock built using HTML, CSS, JavaScript, and jQuery.
It displays the current time (HH:MM:SS) and date (DD/Month/YYYY) and updates every second in real time.
The design uses a dark gradient background and modern glowing text style for an elegant appearance.

## 🎯 Features:
Live clock and date that update every second

Stylish, centered digital UI using Bootstrap and custom CSS

Uses setInterval to update time and date in real-time

Localized month names using an array

Fully responsive and visually modern

## 🖥️ How It Works:
The clock initializes by creating a Date object.

The date and time are extracted using JavaScript's Date methods:

getDate(), getMonth(), getFullYear(), getHours(), getMinutes(), getSeconds()

A setInterval() runs every 1000ms (1 second) to:

Get the current time and date

Update the #p1 and #p2 HTML elements using jQuery .text()

Month name is displayed using a predefined monthNames[] array.

## 📁 File Structure:
File	Description

index.html -->	Main structure with Bootstrap & UI

script2.js -->	JavaScript logic for time and date

## 🧪 Sample Output:
makefile
Copy
Edit

🕒 Digital Clock

10:25:48

26/June/2025

## 🧰 Technologies Used:
HTML5

CSS3 (custom styling + Bootstrap 5)

JavaScript (for time/date)

jQuery 3.7.1

## 🚀 How to Run:
Clone/download the project files.

Open index.html in a browser.

The digital clock will appear and update automatically every second.




https://github.com/user-attachments/assets/6e999c34-d73a-4028-ac99-6d02f8efedfe


