# HireLink 🚀

HireLink is a **full‑stack video calling interview platform** designed to conduct real‑time technical and HR interviews with modern authentication, background jobs, and scalable architecture. The project follows **industry‑grade practices**, clean separation of frontend and backend, and is production‑ready.

---

## 🧩 Tech Stack

### Frontend (`/web`)

* **React (Vite)**
* **Clerk** – Authentication
* **Stream** – Real‑time chat / activity
* **Axios** – API communication
* **Environment‑based configuration**

### Backend (`/services`)

* **Node.js**
* **Express.js**
* **MongoDB (Atlas)** with **Mongoose**
* **Clerk** – Auth verification
* **Inngest** – Background jobs / events
* **Stream API** – Server‑side integration
* **REST API architecture**

---

## 📁 Project Structure

```
HireLink/
│
├── services/          # Backend (Node + Express)
│   ├── src/
│   │   ├── config/    # DB & environment config
│   │   ├── routes/    # API routes
│   │   ├── controllers/
│   │   ├── models/    # Mongoose schemas
│   │   ├── middlewares/
│   │   └── index.js   # Server entry point
│   └── package.json
│
├── web/               # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/        # API & helpers
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── package.json       # Root scripts
```

---

## 🔐 Environment Variables

Create **separate `.env` files** for backend and frontend.

### Backend (`services/.env`)

```
PORT=3000
NODE_ENV=development

# Database
DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/HireLink

# Client
CLIENT_URL=http://localhost:5173

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=pk_test_XXXX
CLERK_SECRET_KEY=sk_test_XXXX

# Inngest
INNGEST_EVENT_KEY=XXXX
INNGEST_SIGNING_KEY=XXXX

# Stream (Server)
STREAM_API_KEY=XXXX
STREAM_API_SECRET=XXXX
```

### Frontend (`web/.env`)

```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_XXXX
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=XXXX
```

⚠️ **Never commit `.env` files to GitHub**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/Vaibhu18/HireLink.git
cd HireLink
```

---

### 2️⃣ Backend Setup

```
cd services
npm install
npm run dev
```

Backend will run at:

```
http://localhost:3000
```

---

### 3️⃣ Frontend Setup

```
cd web
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔄 API Communication

* Frontend communicates with backend using **REST APIs**
* Base URL controlled via `VITE_API_URL`
* Auth handled via **Clerk middleware**
* Secure routes are protected server‑side

---

## 🧵 Background Jobs (Inngest)

HireLink uses **Inngest** for:

* Event‑driven workflows
* Async background processing
* Scalable job execution

---

## 💬 Real‑Time Features

* Powered by **Stream API**
* Used for chat, activity feeds, or notifications
* Secure server + client key separation

---

## 🚀 Production Deployment

### Frontend & Backend (Render.com)

Both the **frontend** and **backend** of HireLink are deployed on **Render.com**, ensuring a unified, scalable, and production-grade deployment setup.

#### Backend Deployment (Render)

* Service Type: **Web Service**
* Environment: **Node.js**
* Set `NODE_ENV=production`
* Configure all backend environment variables in Render dashboard
* MongoDB Atlas used as the production database

#### Frontend Deployment (Render)

* Service Type: **Static Site** or **Web Service (Vite build)**
* Build Command:

```
npm install --prefix web && npm run build --prefix web
```

* Publish Directory:

```
web/dist
```

* Set frontend environment variables in Render dashboard

#### Environment Linking

* `CLIENT_URL` → Render frontend URL
* `VITE_API_URL` → Render backend API URL

Render automatically handles HTTPS, scaling, and restarts.

---

## ✅ Best Practices Followed

* Environment‑based configs
* Secure secret handling
* Modular architecture
* Scalable folder structure
* Production‑ready scripts

---

## 🧑‍💻 Author

**Vaibhav Shinde (vcode)**

* GitHub: [https://github.com/Vaibhu18](https://github.com/Vaibhu18)

---

## 📄 License

This project is licensed under the **MIT License**.

---

✨ *HireLink – Built with scalability, security, and performance in mind.*
