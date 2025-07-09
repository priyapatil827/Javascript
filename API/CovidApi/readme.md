# 📊 COVID-19 India Data Table
This project fetches and displays the latest COVID-19 statistics for Indian states using the Rootnet API, styled beautifully with Bootstrap.

## ✨ Features
Fetches live COVID-19 data from the Rootnet API.

Displays data in a clean, responsive table.

Uses Bootstrap 5 for styling and a custom gradient background.

Highlights:

Serial number

State name

Number of Indian and foreign cases

Number of discharged patients

Number of deaths

Total confirmed cases

## ⚙️ How it works
The project makes a GET request to:

bash
Copy
Edit
https://api.rootnet.in/covid19-in/stats/latest
Parses the JSON response to extract regional data.

Dynamically creates table rows (<tr>) and cells (<td>) for each state’s data.

Appends the rows to the table body (<tbody>) in the HTML.

## 📁 Project structure
index.html – Contains:

HTML structure

Table layout

Bootstrap & custom CSS

script.js – Contains JavaScript code to:

Fetch data from the API

Populate the table dynamically

## 🚀 How to run
Clone or download this repository.

Open index.html in any web browser.

The table will automatically load and display the latest COVID-19 data.

## 📌 Technologies used
HTML5

CSS3 (with Bootstrap 5)

JavaScript (Fetch API)

https://github.com/user-attachments/assets/242d68fe-a965-41bd-a634-f50ad4f3a062
