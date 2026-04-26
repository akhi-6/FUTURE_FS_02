# 📊 Mini CRM Web Application

### 🚀 Future Interns – Full Stack Development Internship (Task 02)

A simple and functional **Customer Relationship Management (CRM)** web application built using **React (Frontend)** and **Node.js + Express + MongoDB (Backend)**.

This project allows users (Admin) to manage leads, track customer details, and perform CRUD operations in a clean dashboard interface.

---

# 🌟 Features

* 🔐 Admin Login Authentication
* ➕ Add New Leads
* 📋 View All Leads
* ✏️ Update Lead Details
* ❌ Delete Leads
* 📊 Track Lead Status (New, Contacted, Converted)
* ⚡ Real-time updates with API integration

---

# 🧰 Tech Stack

## Frontend:

* React.js
* Axios
* CSS

## Backend:

* Node.js
* Express.js
* MongoDB
* Mongoose

---

# 📁 Project Structure

```
crm-project/
│
├── backend/
│   ├── backend/
│   │   ├── models/
│   │   │   └── Lead.js
│   │   ├── routes/
│   │   │   └── leadRoutes.js
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Login.jsx
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/crm-project.git
cd crm-project
```

---

## 2️⃣ Setup Backend

```bash
cd backend/backend
npm install
node server.js
```

👉 Backend runs on:

```
http://localhost:5000
```

---

## 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm start
```

👉 Frontend runs on:

```
http://localhost:3000
```

---

# 🔐 Admin Login Credentials

Use these credentials to login:

```
Username: admin
Password: admin123
```

> ⚠️ This is a demo authentication system (hardcoded).

---

# 📌 How to Use the Application

### 1. Open the app

Go to:

```
http://localhost:3000
```


### 2. Login

Enter admin credentials to access dashboard.

---

### 3. Manage Leads

#### ➕ Add Lead

* Enter name, email, source
* Click Add

#### 📋 View Leads

* All leads appear in dashboard

#### ✏️ Update Lead

* Modify status (New / Contacted / Converted)

#### ❌ Delete Lead

* Remove unwanted leads

---

# 🔄 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/leads     | Get all leads |
| POST   | /api/leads     | Add new lead  |
| PUT    | /api/leads/:id | Update lead   |
| DELETE | /api/leads/:id | Delete lead   |
| POST   | /api/login     | Admin login   |

---

# 🧠 Learning Outcomes

* Full Stack Development workflow
* REST API creation & integration
* MongoDB database handling
* React state management
* Debugging real-world issues (CORS, API errors, Git conflicts)

---

# 📸 Screenshots


<img width="1920" height="880" alt="Save" src="https://github.com/user-attachments/assets/e280fd0c-3402-41c4-b71f-89e9b2c26e15" />


# 🚀 Future Improvements

* JWT Authentication 🔐
* Role-based access (Admin/User)
* Search & Filter Leads 🔍
* Dashboard Analytics 📊
* Deployment (Vercel + Render)

---

# 👩‍💻 Author

**Akhila Bodduri**
Full Stack Web Development Intern
Future Interns



# ⭐ Acknowledgement

This project was developed as part of the **Future Interns Internship – Task 02** to gain hands-on experience in full stack web development.

---

⭐ If you like this project, don’t forget to star the repository!
