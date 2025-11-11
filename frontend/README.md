# Frontend Vue.js Application

This repository contains the frontend application for the Full Stack Developer Coding Test. It is a modern, single-page application (SPA) built with Vue.js 3, designed to provide a seamless and interactive user experience. The application integrates with two backend services: a Node.js/Express API for to-do management and user authentication, and a Laravel API for user discovery.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Core Features](#core-features)
  - [Authentication and Profile Management](#1-authentication-and-profile-management)
  - [To-Do List Management](#2-to-do-list-management)
  - [Interactive User Discovery](#3-interactive-user-discovery)
- [Architectural Overview](#architectural-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contribution Guidelines](#contribution-guidelines)

## Tech Stack

- **Vue.js 3**: The core progressive JavaScript framework, utilizing the Composition API for better code organization and reusability.
- **Vite**: A next-generation frontend build tool that provides an extremely fast development server and optimized build process.
- **Vue Router**: The official library for handling client-side routing and navigation between views.
- **Axios**: A promise-based HTTP client for making asynchronous requests to the backend APIs.
- **pnpm**: A fast and disk-space-efficient package manager used for dependency management.

## Core Features

This application fulfills the requirements for **Questions 1, 3, and 4** of the coding test, demonstrating a wide range of frontend capabilities.

### 1. Authentication and Profile Management

-   **Secure User Authentication**: Provides robust forms for user registration and login. All authentication logic is handled by the `backend-todos` service.
-   **JWT-Based Session Management**: Upon successful login, a JSON Web Token (JWT) is retrieved and stored securely in the browser's local storage. This token is attached to the headers of all subsequent API requests to authenticate the user.
-   **Protected Routes**: Implements navigation guards using Vue Router to prevent unauthenticated users from accessing protected areas of the application, such as the user profile and to-do list.
-   **Dynamic User Profile**: The `UserProfile.vue` component allows authenticated users to view and update their profile information. It features an auto-save mechanism with debouncing to minimize API calls and provides real-time feedback on the save status (`Saving...`, `Saved!`).

### 2. To-Do List Management

-   **Full CRUD Functionality**: A dedicated view for creating, reading, updating, and deleting to-do items.
-   **Real-Time Updates**: The UI is reactive, meaning any changes (add, edit, delete) are instantly reflected in the to-do list without requiring a page refresh.
-   **In-Place Editing**: Users can double-click a task to edit its content directly within the list, providing a smooth and intuitive user experience.
-   **Task Completion**: A simple checkbox allows users to toggle the completion status of each task.

### 3. Interactive User Discovery

-   **Tinder-Style Card Interface**: A unique feature that connects to the `backend-users` (Laravel) API to display user profiles in an engaging, Tinder-like card stack.
-   **Fluid Animations**: Utilizes CSS transitions and transforms to create smooth swipe animations. Users can swipe left or right to dismiss a profile and reveal the next one.
-   **Depth and Perspective**: The card stack is designed with a sense of depth, with the next two cards slightly scaled down and offset, giving users a preview of what's to come.
-   **Infinite Scrolling**: The application automatically fetches the next paginated set of users from the API when the current stack is depleted, creating a seamless and endless browsing experience.

## Architectural Overview

The application follows a component-based architecture, which is standard for Vue.js projects.

-   **Views**: Top-level components that correspond to different pages or routes (e.g., `Login.vue`, `Todos.vue`).
-   **Components**: Reusable, self-contained UI elements (e.g., `UserProfile.vue`, `TodoList.vue`) that are composed to build complex views.
-   **Services**: API communication is abstracted away into dedicated modules or handled within the Composition API's `setup` function, keeping components clean and focused on the UI.
-   **Routing**: Vue Router manages the mapping between URLs and views, enabling a single-page application experience.

## Project Structure

The project is organized to promote scalability and maintainability:

```
frontend/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, stylesheets, etc.
│   ├── components/       # Reusable Vue components
│   ├── router/           # Routing configuration
│   ├── services/         # API communication logic (optional)
│   ├── views/            # Page-level components
│   ├── App.vue           # Root application component
│   └── main.js           # Application entry point
├── .gitignore
├── index.html            # Main HTML file
├── package.json
├── pnpm-lock.yaml
└── vite.config.js        # Vite configuration
```

## Getting Started

### Prerequisites

-   Node.js (v22 or higher)
-   pnpm package manager (`npm install -g pnpm`)
-   A running instance of the `backend-todos` and `backend-users` APIs.

### Installation

1.  **Clone the repository** and navigate to the `frontend` directory:
    ```bash
    git clone <repository-url>
    cd frontend
    ```

2.  **Install dependencies** using `pnpm`:
    ```bash
    pnpm install
    ```

### Running the Application

This service is containerized and managed by the root `docker-compose.yml` file. To run the entire application stack, use the following command from the project root:

```bash
docker-compose up -d --build
```

The frontend application will be available at **[http://localhost:5173](http://localhost:5173)**.

## Contribution Guidelines

We welcome contributions to improve this project! To contribute, please follow these steps:

1.  **Fork the repository**.
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/my-new-feature`.
3.  **Make your changes** and ensure the code follows the existing style.
4.  **Test your changes** thoroughly.
5.  **Commit your changes** with a clear and descriptive commit message.
6.  **Push to your branch**: `git push origin feature/my-new-feature`.
7.  **Create a Pull Request** against the `main` branch of the original repository.