# Backend To-Do List API

This project is a simple REST API for managing a To-Do list, created to fulfill **Question 2** of the *Full Stack Developer Coding Test*. The API provides basic CRUD (Create, Read, Update, Delete) functionality for To-Dos using in-memory storage.

## Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **Swagger (OpenAPI)**: Used to design, build, document, and consume RESTful APIs.
  - `swagger-ui-express`: Serves auto-generated Swagger UI documentation.
  - `swagger-jsdoc`: Generates OpenAPI specifications from JSDoc comments.
- **Nodemon**: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- **pnpm**: A fast, disk space-efficient package manager.

## Features

- **To-Do Management**:
  - Create a new task.
  - Retrieve all tasks.
  - Update a task's status or content.
  - Delete a task.
- **API Documentation**:
  - Interactive API documentation available at the `/api-docs` endpoint.

## Project Structure

```
backend-todos/
├── controllers/
│   └── todoController.js
├── routes/
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

### To-Do (`/todos`)

- `POST /todos`: Create a new To-Do.
- `GET /todos`: Get all To-Dos.
- `PATCH /todos/:id`: Update a To-Do.
- `DELETE /todos/:id`: Delete a To-Do.