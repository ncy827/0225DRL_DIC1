# 🔗 Demo
👉 [[https://your-demo-url.com](https://ncy827.github.io/0225DRL_DIC1/)](https://ncy827.github.io/0225DRL_DIC1/)

---

# Nien Personal Page

A simple personal single-page website built using HTML, CSS, and JavaScript.  
This page displays the name **Nien** and shows the **live current time**, updating every second.

---

## 📌 Features

- Displays the name **Nien**
- Shows real-time current date and time
- Updates automatically every second
- Uses external CSS and JavaScript files
- Clean modern glassmorphism design
- Responsive centered layout

---

## 🛠 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

---

## 📂 Project Structure
/project-folder
│
├── index.html
├── style.css
└── script.js


---

## 🚀 How to Run

1. Download the files below.
2. Place them in the same folder.
3. Open `index.html` in your browser.
4. The page will automatically display the name and live time.

---

# 📄 Source Code

---

## 1️⃣ index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nien - Personal Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Nien</h1>
        <div id="time"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>

2️⃣ style.css

body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    font-family: Arial, sans-serif;
    color: white;
    text-align: center;
}

.container {
    background: rgba(255, 255, 255, 0.1);
    padding: 40px 60px;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

#time {
    font-size: 28px;
    letter-spacing: 2px;
}

3️⃣ script.js (Stable Live Clock Version)

document.addEventListener("DOMContentLoaded", function () {

    function updateTime() {
        const now = new Date();

        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        };

        const formattedTime = now.toLocaleString("zh-TW", options);
        document.getElementById("time").textContent = formattedTime;
    }

    updateTime(); // Run immediately
    setInterval(updateTime, 1000); // Update every second

});

⏱ How It Works

Date() retrieves the current system time.

toLocaleString("zh-TW", options) formats it clearly.

setInterval() refreshes the display every 1000 milliseconds.

DOMContentLoaded ensures the DOM is ready before execution.
