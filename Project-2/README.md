# To Do List App (MERN Stack)

This is my Task-2 project for the MERN Stack Internship. In Task-1 I built a basic app that just displayed data from an API, and in this task I built a To Do List app where I can add tasks and see them saved in a database.

## Project Overview

It's a simple To Do List where you can:
- Type a task in the input box and click "Add Task"
- The task gets sent to the backend and saved in MongoDB
- The task list on the page shows all the tasks that are stored in the database

Nothing fancy, just the basic Create and Read part of CRUD, like the assignment asked for.

## Technologies Used

**Frontend**
- React (made with Vite)
- JavaScript
- CSS
- Fetch API (for calling backend)

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- cors
- nodemon (for auto restart during development)

## Folder Structure

```
todo-app/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │      TaskForm.jsx
│   │   │      TaskItem.jsx
│   │   │      TaskList.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── models/
│   │      Task.js
│   ├── routes/
│   │      taskRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## Installation Steps

Clone/download this project, then set up the backend and frontend separately (steps below).

## MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and make a free account (if you don't already have one).
2. Create a new cluster (the free M0 one is enough).
3. Create a database user with a username and password.
4. Under Network Access, add your IP address (or allow access from anywhere for testing, `0.0.0.0/0`).
5. Click on "Connect" -> "Drivers" and copy the connection string. It will look something like:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/tododb
   ```
6. Replace `<username>` and `<password>` with your actual db user credentials.

## Backend Setup

1. Go into the backend folder:
   ```
   cd backend
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the backend folder (copy from `.env.example`) and paste your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string_here
   PORT=5000
   ```
4. Start the server:
   ```
   npm run dev
   ```
   If everything is correct, you should see `Server running on port 5000` and `MongoDB connected` in the terminal.

## Frontend Setup

1. Open a new terminal and go into the frontend folder:
   ```
   cd frontend
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the react app:
   ```
   npm run dev
   ```
4. It will usually open on `http://localhost:5173`

## Running the Project

- Make sure the backend is running first (port 5000).
- Then start the frontend (port 5173).
- Open the frontend link in the browser, add a task, and it should show up in the list right away.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /add     | Adds a new task. Body: `{ "task": "Learn React" }` |
| GET    | /tasks   | Returns all the tasks stored in the database |

## Screenshots

(adding screenshots here later)

## Future Improvements

- Add a delete button to remove tasks
- Add a way to mark tasks as completed
- Add some kind of loading spinner while fetching tasks
- Maybe add edit task functionality

---
Made as part of my MERN Stack Internship - Task 2
