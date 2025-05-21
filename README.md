# WAD External - Set Number 2 (21 May 2025)

## Student Management System

This is a Student Management System created for Set Number 2 of the WAD External examination conducted on 21st May 2025. 

## Features

- **Mock User Authentication**
  - Login system
  - Registration form
  
- **Student Management**
  - View student information
  - Track marks for multiple subjects
  - Organized dashboard layout


## Subjects Covered

- Web Application Development
- Operating System
- Computer Organization
- Design and Analysis of Algorithms
- Software Engineering

## Project Structure

```
src/
├── components/
│   └── common/
│       └── Navbar.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/
│   └── students.js
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Access the application at `http://localhost:5173`
2. Register a new account or login with:
   - Username: admin
   - Password: password
3. Navigate through different pages using the navigation bar
4. View student information and marks on the dashboard

## Technologies Used

- React
- React Router DOM
- Bootstrap
- Vite

## Mock Credentials

- **Login**
  - Username: admin
  - Password: password

- **Registration**
  - Passwords must match
  - All fields are required

## Note

I used mock data for this project