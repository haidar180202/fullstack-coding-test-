# Backend Users API (Laravel)

This repository contains a RESTful API built with Laravel that serves user and post data. It was created to fulfill the optional **Question 4** of the Full Stack Developer Coding Test. The primary purpose of this service is to provide a paginated list of users, which is consumed by the frontend application to power a user discovery feature.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Core Features](#core-features)
- [API Endpoint](#api-endpoint)
  - [Get Paginated Users](#get-paginated-users)
- [Architectural Overview](#architectural-overview)
  - [Models and Relationships](#models-and-relationships)
  - [Database Seeding](#database-seeding)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the Service](#running-the-service)
- [Frontend Integration](#frontend-integration)

## Tech Stack

- **Laravel**: A powerful PHP web application framework with expressive, elegant syntax.
- **PHP**: The server-side scripting language on which Laravel is built.
- **MySQL**: The relational database used to store user and post data.
- **Eloquent ORM**: Laravel's built-in Object-Relational Mapper, used for interacting with the database in an object-oriented way.
- **Artisan**: Laravel's command-line interface, used for tasks like running migrations and seeding the database.

## Core Features

-   **Paginated User Endpoint**: Provides a single, efficient endpoint (`GET /api/users`) that returns a paginated JSON response of users.
-   **Eager Loading Relationships**: To prevent the N+1 query problem, the user's posts are eager-loaded using Eloquent's `with()` method, ensuring efficient data retrieval.
-   **Database Migrations & Seeding**: The database schema is managed through migrations, and it comes pre-populated with sample data via database seeders, making it easy to get up and running.
-   **Dockerized Environment**: The entire service, including the PHP-FPM process and the Nginx web server, is containerized for consistency and ease of deployment.

## API Endpoint

### Get Paginated Users

-   **`GET /api/users`**

    Retrieves a paginated list of all users. Each user object in the response includes an array of their associated posts.

    **Query Parameters:**

    -   `page` (optional): The page number to retrieve (e.g., `?page=2`). Defaults to `1`.

    **Example Response (`/api/users?page=1`):**

    ```json
    {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "John Doe",
                "email": "john.doe@example.com",
                "posts": [
                    {
                        "id": 1,
                        "user_id": 1,
                        "title": "First Post",
                        "body": "This is the body of the first post."
                    }
                ]
            }
        ],
        "first_page_url": "http://localhost:8000/api/users?page=1",
        "from": 1,
        "last_page": 10,
        "last_page_url": "http://localhost:8000/api/users?page=10",
        "next_page_url": "http://localhost:8000/api/users?page=2",
        "path": "http://localhost:8000/api/users",
        "per_page": 10,
        "prev_page_url": null,
        "to": 10,
        "total": 100
    }
    ```

## Architectural Overview

The application follows the standard Laravel MVC (Model-View-Controller) architecture.

-   **Models**: `User.php` and `Post.php` define the Eloquent models and their relationships.
-   **Controller**: A single controller handles the logic for the `/api/users` endpoint.
-   **Routes**: The `routes/api.php` file defines the API route and links it to the controller.
-   **Database**: The `database/` directory contains migrations for creating the `users` and `posts` tables, as well as seeders for populating them with fake data using the Faker library.

### Models and Relationships

-   A `User` has a one-to-many relationship with `Post` (a user can have multiple posts).
-   This is defined in the `User` model with a `hasMany(Post::class)` relationship.

### Database Seeding

-   The `DatabaseSeeder` calls `UserSeeder` and `PostSeeder`.
-   `UserSeeder` creates 100 sample users.
-   `PostSeeder` creates 5 posts for each user, resulting in 500 sample posts.

## Project Structure

```
backend-users/
├── app/
│   ├── Http/Controllers/
│   ├── Models/
│   │   ├── Post.php
│   │   └── User.php
│   └── Providers/
├── bootstrap/
├── config/
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
├── public/
├── resources/
├── routes/
│   └── api.php
├── storage/
├── tests/
├── artisan
├── composer.json
└── Dockerfile
```

## Getting Started

### Prerequisites

-   Docker and Docker Compose.

### Running the Service

This service is containerized and managed by the root `docker-compose.yml` file. To run the entire application stack, use the following command from the project root:

```bash
docker-compose up -d --build
```

This will:
1.  Build the Docker image, which includes installing all Composer dependencies.
2.  Start the `backend-users` (PHP-FPM), `nginx-laravel` (web server), and `db` (MySQL) services.
3.  Automatically run database migrations and seed the database upon startup.

The API will be accessible via the Nginx container at **[http://localhost:8000/api/users](http://localhost:8000/api/users)**.

## Frontend Integration

This API serves as the data source for the **Random Profile Discovery** feature in the Vue.js frontend. The frontend application fetches users from the `/api/users` endpoint and displays them in an interactive, Tinder-like card stack, providing a dynamic and engaging user experience.