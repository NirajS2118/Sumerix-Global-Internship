# MERN Stack Internship – Task 1
## Basic React App + API

**Submitted by:** Niraj kumar
**Internship:** Sumerix Global – MERN Stack
**Task:** Build a React frontend + Express + MongoDB backend (Products CRUD)

---

## Project Structure

```
Project-1/
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── ProductCard.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── vite.config.js
    └── package.json
```

---

## What I Built

### Backend (Express + MongoDB)
- Created an Express server on port 5000
- Connected to MongoDB Atlas using Mongoose
- Built a Product model with fields: name, price, description
- Built a full CRUD API:
  - `GET /api/products` – get all products
  - `GET /api/products/:id` – get one product
  - `POST /api/products` – add a new product
  - `PUT /api/products/:id` – update a product
  - `DELETE /api/products/:id` – delete a product

### Frontend (React + Vite)
- Set up React app using Vite
- Created a ProductCard component using props for name, price, description
- Used useEffect + axios to fetch products from the backend on page load
- Added a form to Create new products
- Added Edit button on each card that opens a modal to update the product
- Added Delete button on each card that removes the product from DB

---

## How to Run

### Step 1 – Start Backend

```bash
cd backend
npm install
npm start
```

Make sure your .env file has your MongoDB Atlas connection string:

```
MONGO_URI=mongodb+srv://yourUsername:yourPassword@cluster0.xxxxx.mongodb.net/mern-task1
PORT=5000
```

You should see:

```
✅ Connected to MongoDB
🚀 Server running on http://localhost:5000
```

### Step 2 – Start Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

App opens at http://localhost:5173

---

## CRUD Operations

| Operation | How |
|-----------|-----|
| Create | Fill the form at the top and click Add Product |
| Read | Products load automatically from MongoDB on page open |
| Update | Click Edit on any card, change values, then click Save Changes |
| Delete | Click Delete on any card and confirm to remove from DB |

---

## Testing the API with Postman

| Method | URL | Body |
|--------|-----|------|
| GET | http://localhost:5000/api/products | none |
| POST | http://localhost:5000/api/products | { "name": "Laptop", "price": 999, "description": "Gaming laptop" } |
| PUT | http://localhost:5000/api/products/id | { "price": 899 } |
| DELETE | http://localhost:5000/api/products/id | none |

---

## Skills Used

- React basics – components, props, state, useEffect
- REST API development with Express
- MongoDB schema design with Mongoose
- Connecting frontend and backend using axios
- Vite for fast React development