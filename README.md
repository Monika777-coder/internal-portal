
# 🌐 Intern Portal Website

This is a **full-stack Intern Portal** built using **HTML, CSS, JavaScript, and Node.js (Express)** with dummy data integration. It simulates a real-world internship portal with:

✅ Login simulation  
✅ Dashboard  
✅ Leaderboard  
✅ Rewards page  
✅ Backend API for dynamic data  
✅ Responsive UI with working **Unsplash images**  
✅ Fully structured code (frontend + backend)

---

## 📁 Project Structure

```

intern-portal/
│
├── index.html               → Home / login simulation
├── dashboard.html           → Intern details and stats
├── leaderboard.html         → Ranks and dummy data
├── rewards.html             → Unlockables / static content
│
├── style.css                → Common styles for all pages
├── script.js                → JS for fetching backend data and page navigation
│
├── assets/                  → Background images from Unsplash
│   ├── bg-index.jpg
│   ├── bg-dashboard.jpg
│   ├── bg-leaderboard.jpg
│   └── bg-rewards.jpg
│
├── backend/
│   ├── server.js            → Express backend server
│   └── data.json            → Dummy data (intern info, leaderboard data)
│
└── README.md                → You're reading it 😉

````

---

## 🚀 How to Run

### 1. Clone or Download

```bash
git clone https://github.com/your-username/intern-portal.git
cd intern-portal
````

### 2. Install Dependencies

Go inside the backend folder:

```bash
cd backend
npm install express
```

### 3. Start Backend Server

```bash
node server.js
```

The server will run on: `http://localhost:3000`

---

## 🌐 Pages Preview

* **Home (index.html)** — Simulated login interface with background image
* **Dashboard** — Displays intern name, referral code, total donations
* **Leaderboard** — Shows ranks of all interns (dummy data)
* **Rewards** — Static content showing unlockables

---

## 🔌 Backend API

| Route              | Description                       |
| ------------------ | --------------------------------- |
| `/api/intern`      | Returns logged-in intern details  |
| `/api/leaderboard` | Returns dummy leaderboard entries |

All data is served from `data.json` using Express.

---

## 📷 Image Credits

All images used are fetched from [Unsplash](https://unsplash.com) using direct image links and stored locally inside `assets/`.

---

## 👩‍💻 Created By

**Monika S**
PES College of Engineering, Mandya
CSE - 4th Sem

---

## 🛠️ Tech Stack

* HTML5, CSS3, JavaScript (Frontend)
* Node.js + Express (Backend)
* JSON (Data Simulation)
* Unsplash (Images)

---

## 💡 Notes

* This is a **dummy portal** for educational/demo purposes only.
* No real login or authentication is implemented — it's a static simulation.
* All images are working and all pages are interlinked.





