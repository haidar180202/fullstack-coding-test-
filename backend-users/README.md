# Laravel API for Users and Posts

This project is the solution for **Question 4 — Laravel API** of the Full Stack Developer Coding Test.

## Task Requirements

The main goal of this task is to create a simple API using Laravel with the following specifications:

-   **Endpoint:** Create a `GET /api/users` endpoint.
-   **Response:** The endpoint must return a paginated JSON response containing a list of users.
-   **Data Relationship:** Each user object in the response must include their associated posts.
-   **Database:**
    -   Create `User` and `Post` models.
    -   Set up migrations for the `users` and `posts` tables.
    -   Define a one-to-many relationship where a `User` can have many `Posts`.
    -   Use database seeding to populate the tables with sample data.

---

## Features

-   Provides a paginated list of users.
-   Includes each user's posts within the user object.
-   Offers API documentation through Swagger (L5 Swagger).

## Getting Started

### Prerequisites

-   PHP >= 8.1
-   Composer
-   Laravel

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```sh
    composer install
    ```

3.  **Set up environment file:**
    Create a copy of the `.env.example` file and name it `.env`.
    ```sh
    cp .env.example .env
    ```

4.  **Generate application key:**
    ```sh
    php artisan key:generate
    ```

5.  **Configure the database:**
    This project uses SQLite by default. To create the database file, run:
    ```sh
    touch database/database.sqlite
    ```

6.  **Run migrations and seed the database:**
    This will create the necessary tables and populate them with sample data.
    ```sh
    php artisan migrate --seed
    ```

### Running the Application

To start the development server, use the following command:

```sh
php artisan serve
```

The application will be available at `http://127.0.0.1:8000` (or another port if 8000 is in use).

## API Endpoint

### Get Users

-   **GET** `/api/users`

    Retrieves a paginated list of users along with their posts.

    **Example Response:**

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
                        "title": "Post Title 1",
                        "body": "This is the body of post 1."
                    }
                ]
            }
        ],
        "first_page_url": "http://127.0.0.1:8000/api/users?page=1",
        "from": 1,
        "last_page": 2,
        "last_page_url": "http://127.0.0.1:8000/api/users?page=2",
        "next_page_url": "http://127.0.0.1:8000/api/users?page=2",
        "path": "http://127.0.0.1:8000/api/users",
        "per_page": 5,
        "prev_page_url": null,
        "to": 5,
        "total": 10
    }
    ```

## API Documentation

Swagger documentation is available for this API.

-   **URL:** `/api/documentation`

    After starting the application, you can access the interactive documentation at `http://127.0.0.1:8000/api/documentation`.