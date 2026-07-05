# ISS-WEB-PROJECT

This repository contains the complete web project, comprising the React Frontend application and the PHP Backend database scripts.

## Project Structure

- **`frontend/`**: The frontend portion built with React, Vite, and Tailwind CSS.
- **`backend/`**: The backend portion composed of PHP script files for authentication (login/register) and product management operations (add, delete, update, fetch).

## Getting Started

### Prerequisites

- **Frontend**: Node.js and npm (Node Package Manager).
- **Backend**: A local PHP server environment like XAMPP, WAMP, or Laragon, along with MySQL database.

### Running the Frontend

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

### Running the Backend

1. Move or link the contents of the `backend/` directory to your web server's root folder (e.g., `htdocs/Database` in XAMPP).
2. Configure the database credentials in `backend/connection.php`.
3. Start Apache and MySQL from your XAMPP/WAMP Control Panel.
