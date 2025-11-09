# Backend To-Do List & Auth API

This project provides a REST API for managing a To-Do list and handling user authentication, created to fulfill **Question 2 and 3** of the *Full Stack Developer Coding Test*. The API provides full CRUD functionality for To-Dos and a complete authentication system using JWT. All data is stored in-memory.

## Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **JSON Web Token (JWT)**: For securing API endpoints.
- **bcrypt.js**: For hashing user passwords.
- **Swagger (OpenAPI)**: Used to design, build, document, and consume RESTful APIs.
  - `swagger-ui-express`: Serves auto-generated Swagger UI documentation.
  - `swagger-jsdoc`: Generates OpenAPI specifications from JSDoc comments.
- **Nodemon**: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- **pnpm**: A fast, disk space-efficient package manager.

## Features

- **User Authentication**:
  - Register a new user.
  - Log in with email and password to receive a JWT.
  - JWT-protected routes.
- **User Profile Management**:
  - Fetch the current user's profile.
  - Update the current user's profile information.
- **To-Do Management**:
  - Create, retrieve, update, and delete tasks.
  - All To-Do endpoints are protected and user-specific.
- **API Documentation**:
  - Rich, interactive API documentation available at the `/api-docs` endpoint.

## Project Structure

```
backend-todos/
├── controllers/
│   ├── authController.js
│   └── todoController.js
├── middleware/
│   └── auth.js
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
├── .gitignore
├── index.js
├── package.json
├── pnpm-lock.yaml
└── swagger.js
```

## Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd backend-todos
    ```

2.  **Install dependencies** using `pnpm`:
    ```bash
    pnpm install
    ```

## Running the Application

To start the development server, run the following command:

```bash
pnpm start
```

The server will run at `http://localhost:3000`.

## API Endpoints

Full and interactive documentation is available at **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)** after running the server.

### Authentication (`/auth`)

- `POST /auth/register`: Create a new user account.
- `POST /auth/login`: Log in and receive a JWT.
- `GET /auth/profile`: Get the logged-in user's profile (Requires JWT).
- `PATCH /auth/profile`: Update the logged-in user's profile (Requires JWT).

### To-Do (`/todos`)

- `POST /todos`: Create a new To-Do (Requires JWT).
- `GET /todos`: Get all To-Dos for the logged-in user (Requires JWT).
- `PATCH /todos/:id`: Update a specific To-Do (Requires JWT).
- `DELETE /todos/:id`: Delete a specific To-Do (Requires JWT).