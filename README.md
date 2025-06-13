# cuanto-cuesta

## Tech Stack
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **ORM:** Sequelize
* **Environment Management:** dotenv

## Prerequisites
Before you begin, ensure you have the following installed on your local machine:
* [Node.js](https://nodejs.org/) (v18.x or newer recommended)
* [npm](https://www.npmjs.com/) (usually comes with Node.js)
* [PostgreSQL](https://www.postgresql.org/download/) server running locally.

## Getting Started
Follow these steps to get your development environment set up and running.

### 1. Installation
First, clone the repository to your local machine and install the necessary dependencies.

```bash
# Clone the repository
git clone <your_repository_url>
cd cuanto-cuesta

# Navigate into the server directory
cd server

# Install NPM packages
npm install

### 2. Environment Variables
This project uses a `.env` file to handle sensitive information like database credentials.

1.  Create a copy of the example environment file. It's best practice to have a `.env.example` file in your repository.
    ```bash
    cp .env.example .env
    ```
    *(If `.env.example` doesn't exist, create a new file named `.env` manually)*

2.  Open the `.env` file and update the variables with your local PostgreSQL details.

    **.env**
    ```env
    # PostgreSQL Database Configuration
    DB_NAME="cuanto-cuesta"
    DB_USER="your_local_postgres_username"
    DB_PASS="your_local_postgres_password"
    DB_HOST="localhost"
    DB_DIALECT="postgres"
    ```

**Important:** The `.env` file should **never** be committed to Git. Ensure your `.gitignore` file contains a line for `.env`.

### 3. Database Setup
The application requires a PostgreSQL database named `cuanto-cuesta`.

1.  **Create the Database:** Before starting the application, you must create the database. Connect to `psql` and run:
    ```sql
    CREATE DATABASE "cuanto-cuesta";
    ```

2.  **Run Database Migrations:** Once the database exists, run the Sequelize migrations to create all the necessary tables.
    ```bash
    npx sequelize-cli db:migrate
    ```

## Running the Application
To start the Express server for development, run the appropriate script from your `package.json`.