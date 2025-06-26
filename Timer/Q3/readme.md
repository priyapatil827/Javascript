# 🪟 Update Notification Popup – README
## 📄 Description:
This project displays a Bootstrap-styled update notification popup after a short delay. It asks the user to update to the latest version with options like Update, Not now, and Details.
The popup is built using HTML, CSS, Bootstrap, JavaScript, and jQuery. It appears 3 seconds after page load, unless the user closes it manually.

## 🎯 Features:
Delayed popup shown after 3 seconds

Close (X) button to dismiss the popup

Options: Update, Not now, and Details

Responsive and styled using Bootstrap 5

Popup does not reappear if closed before timeout

DOM interaction handled using jQuery

## 🖥️ How It Works:
The popup (#main) is initially hidden using main.hide().

A 3-second timer starts when the page loads.

If the user does not close the popup within that time, it appears using main.show().

If the user clicks the close button (#closeBtn), the popup is hidden immediately and won’t show afterward.

## 📁 File Structure:
File	Description

index.html	Contains the popup layout and Bootstrap

script.js	Contains jQuery code for logic control

## 🔧 Technologies Used:
HTML5

CSS3

Bootstrap 5

JavaScript

jQuery 3.7.1

## 🧪 Sample Behavior:
On page load, nothing shows.

After 3 seconds:
![Popup appears with update options]

If user clicks ❌ before 3 seconds → popup will not appear.

## 🚀 How to Run:
Download or clone the project.

Open index.html in your browser.

Wait for 3 seconds or click "X" to test both behaviors.



https://github.com/user-attachments/assets/0e87751b-5c41-47a9-a6d9-7c1bc6299685



