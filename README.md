# 🔐 Simple-Login-App

A straightforward Node.js application for user authentication (signup and login) using Express.js and MongoDB. This project demonstrates basic server-side logic for handling user credentials, connecting to a database, and serving static HTML files.

-----

## 🛠️ Installation

Before you begin, ensure you have **Node.js** and **MongoDB** installed on your system.

1.  **Clone the repository**:

    ```bash
    git clone [repository-url]
    cd login
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

    This command installs all the packages listed in `package.json`, including Express and Mongoose.

3.  **Start the MongoDB server**:
    Make sure your MongoDB server is running. The application is configured to connect to a local instance at `mongodb://127.0.0.1:27017/loginApp`.

4.  **Run the application**:

    ```bash
    npm start
    ```

    The server will start and run on `http://localhost:3000`.

-----

## 🚀 Usage

Once the server is running, you can access the application through your web browser.

1.  **Signup Page**: Navigate to `http://localhost:3000` to access the signup form.

      * Enter a new username and password.
      * Click "Signup". The application will check if the username already exists and, if not, create a new user in the database.
      * You'll see a success message upon successful signup.

2.  **Login Page**: Navigate to `http://localhost:3000/index` to access the login form.

      * Enter your registered username and password.
      * Click "Login". The application will verify the credentials against the database.
      * If successful, a welcome message will be displayed. If not, you'll see an "Invalid username or password\!" error.

-----

## ✨ Features

  * **User Registration**: Allows new users to sign up with a unique username and password.
  * **User Login**: Authenticates existing users by verifying their credentials.
  * **MongoDB Integration**: Uses **Mongoose** for seamless interaction with a MongoDB database.
  * **Express.js Routing**: Manages API endpoints for signup and login, as well as serving static files.
  * **Basic Security**: Checks for existing usernames to prevent duplicate user creation.

-----

## 📁 Project Structure

```
.
├── database.js
├── package.json
├── server.js
└── public/
    ├── signup.html
    └── index.html
```

  * `server.js`: The main application file that sets up the Express server, handles routes, and serves static files.
  * `database.js`: Contains all the database connection logic and functions for user-related operations (finding, creating users).
  * `package.json`: Manages project metadata and lists all dependencies.
  * `public/`: A directory for static assets, including the HTML files for the signup and login pages.

-----

## 📦 Dependencies

The project relies on the following npm packages:

  * **express**: `^5.1.0` - A fast, unopinionated, minimalist web framework for Node.js.
  * **mongoose**: `^8.18.2` - An elegant MongoDB object modeling tool.
  * **body-parser**: `^2.2.0` - A Node.js body parsing middleware.

-----

## 🤝 Contribution

Contributions are welcome\! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

-----

## 📜 License

This project is licensed under the **ISC License**.
