Sure! Here’s the complete content for your `README.md` file. You can copy the entire block below:

# Full-Stack To-Do List Application

This is a full-stack To-Do List application built using React for the frontend and Node.js with Express for the backend. The application allows users to create, read, update, and delete their to-do items.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Running the Project Locally](#running-the-project-locally)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

## Features

- User can add, edit, and delete to-do items.
- Display list of to-do items.
- Responsive design for mobile and desktop views.
- Authentication enabling only todos shown to the user who created it

## Technologies

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, MongoDB
- **Deployment**: Vercel (for frontend and backend)

## Installation

Git clone the repository:

```bash
git clone [url of this repo]
```

### Frontend

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Backend

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Project Locally

### Frontend

1. Navigate to the `client` directory:

   ```bash
   cd client
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

### Backend

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Start the backend server:

   ```bash
   npm start
   ```

3. The backend server will run on `http://localhost:5000`.

## Environment Variables

For the backend, create a `.env` file in the `server` directory and add the following environment variables:

```
MONGODB_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

## Deployment

The application is deployed on Vercel. You can access it via the following URL:

to-do-web-app-master.vercel.app

Ensure to set up environment variables in Vercel similar to your local setup.
