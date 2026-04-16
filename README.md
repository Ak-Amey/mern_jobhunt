````markdown
# 💼 JobHunt

🚀 A full-stack job search platform connecting **candidates** and **recruiters** — built with **Node.js, Express.js, MongoDB, and Cloudinary**.

---

# 🛠️ Tech Stack - Node.js - Express.js - MongoDB - Mongoose - JWT Authentication - bcrypt.js - Cloudinary - Multer - REST API - JavaScript - Nodemon

---

# 📌 Overview

**JobHunt** is a dual-role job portal platform designed for:

👨‍💼 **Applicants**
- Browse jobs
- Search jobs
- Apply instantly
- Upload resume
- Track applications

🏢 **Recruiters / Admins**
- Post jobs
- Manage listings
- Register companies
- View applicants
- Update status

---

# ✨ Features

## 🔐 Authentication & Security
✔ JWT Cookie Authentication  
✔ bcrypt Password Hashing  
✔ Protected Routes  
✔ Role-Based Access Control

## 👤 User Profile
✔ Update profile  
✔ Upload profile photo  
✔ Upload resume (PDF / DOC)

## 💼 Job Management
✔ Create jobs  
✔ Search jobs  
✔ Get all listings  
✔ View single job details

## 📄 Application System
✔ Apply for jobs  
✔ Duplicate application prevention  
✔ View applied jobs  
✔ Status tracking

## 🏢 Company Management
✔ Register company  
✔ Upload logo  
✔ Update company profile

---

# 📂 Folder Structure

```bash
controllers/
models/
middleware/
utils/
routes/
````

---

# ⚡ API Routes

## 👤 Auth Routes

`/api/v1/user`

| Method | Route           | Description    |
| ------ | --------------- | -------------- |
| POST   | /register       | Register User  |
| POST   | /login          | Login User     |
| GET    | /logout         | Logout User    |
| PUT    | /profile/update | Update Profile |

---

## 💼 Job Routes

`/api/v1/job`

| Method | Route         | Description    |
| ------ | ------------- | -------------- |
| POST   | /post         | Create Job     |
| GET    | /get          | Get All Jobs   |
| GET    | /get/:id      | Get Single Job |
| GET    | /getadminjobs | Admin Jobs     |

---

## 📄 Application Routes

`/api/v1/application`

| Method | Route              | Description   |
| ------ | ------------------ | ------------- |
| GET    | /apply/:id         | Apply Job     |
| GET    | /get               | Applied Jobs  |
| GET    | /:id/applicants    | Applicants    |
| PATCH  | /status/:id/update | Update Status |

---

## 🏢 Company Routes

`/api/v1/company`

| Method | Route       | Description      |
| ------ | ----------- | ---------------- |
| POST   | /register   | Register Company |
| GET    | /get        | Get Companies    |
| GET    | /get/:id    | Get Company      |
| PUT    | /update/:id | Update Company   |

---

# ⚙️ Installation

## 📥 Clone Repository

```bash
git clone https://github.com/Ak-Amey/mern_jobhunt.git
cd jobhunt
```

## 📦 Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create `.env` file:

```env
PORT=8000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

---

# ▶️ Run Project

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

---

# 🚀 Future Improvements

✨ Email Notifications
✨ Resume Parsing
✨ Saved Jobs
✨ Interview Scheduling
✨ Analytics Dashboard

---

# 👨‍💻 Author

**Your Name**

🔗 GitHub: https://github.com/Ak-Amey

---

# 📜 License

MIT License

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!

```
```
