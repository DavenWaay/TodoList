**Todo List (ITEC116_ACTIVITY1_TODOLIST)**

- **Description:** Short, minimal To‑Do application with a NestJS + MongoDB backend and a React + Vite frontend. Features: create, read, update (inline edit), delete tasks, and a Swagger UI for API documentation.

**Features**
- **Create:** Add tasks with title and optional description.
- **Read:** List all tasks.
- **Update:** Edit task title/description and toggle completed state.
- **Delete:** Remove tasks.
- **Docs:** Swagger UI available for the backend API.

**Prerequisites**
- **Node.js & npm:** Install Node 18+ recommended. Verify with `node -v` and `npm -v`.
- **MongoDB:** Local MongoDB or a connection string for a cloud MongoDB instance.
- **Git:** To clone the repository.

**Get the code**
- **Clone:**
	- `git clone https://github.com/countryboy11/ITEC116_ACTIVITY1_TODOLIST.git`
	- `cd ITEC116_ACTIVITY1_TODOLIST`

**Backend (API)**
- **Location:** `backend/`
- **Install dependencies:**
	- `cd backend`
	- `npm install`
- **Environment (optional):**
	- Configure MongoDB connection if needed (the project may read a `MONGODB_URI` or use a default). If your project requires an env file, create `.env` in `backend/` and add `MONGODB_URI=<your-uri>`.
- **Run (development):**
	- `npm run start:dev`
	- The server listens on `http://localhost:3000` by default.
- **API docs (Swagger):**
	- Open `http://localhost:3000/api-docs` after starting the backend.

**Frontend (UI)**
- **Location:** `frontend/`
- **Install dependencies:**
	- `cd frontend`
	- `npm install`
- **Run (development):**
	- `npm run dev`
	- Vite usually serves at `http://localhost:5173` (or another port if 5173 is in use).

**Quick test**
- Start backend first, then frontend.
- Open the frontend URL in your browser and the Swagger URL for API reference.

**Troubleshooting**
- **Peer dependency errors when installing:** If `npm install` fails for the backend due to peer dependencies, try:
	- `npm install --legacy-peer-deps`
- **TypeScript / TSX errors in frontend:** Install types if needed:
	- `npm install --save-dev @types/react @types/react-dom`

