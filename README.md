# 🗂️ Kanban Board Application with Authentication

A modern, full-stack Kanban Board application that enables users to manage tasks visually with drag-and-drop functionality. Includes user authentication, persistent storage, and responsive UI.

## 🚀 Features

- 🔐 **User Authentication**
  - Sign up, log in, and secure session management using JWT
- 🧩 **Task Management**
  - Create, edit, delete, and drag tasks across columns
- 📦 **Column Management**
  - Add or rename Kanban columns
- 💾 **Persistent Storage**
  - Tasks and boards saved in a database
- 📱 **Responsive Design**
  - Fully mobile-friendly and optimized for all screen sizes
- ☁️ **Deployed Version**
  - [Comming soon](#)

## 🛠️ Tech Stack

### Frontend
- **React 19** with `createBrowserRouter`
- TailwindCSS for styling
- `react-beautiful-dnd` for drag-and-drop
- React Context API for auth state management

### Backend
- Node.js + Express.js
- MongoDB (via Mongoose)
- JWT for authentication
- Bcrypt for password hashing

## 🔐 Authentication Flow

1. Users register or log in via the frontend form
2. Backend generates a JWT token upon successful login
3. Token is stored in localStorage and sent in headers for protected routes
4. Context API maintains auth state across components

## 📁 Folder Structure

