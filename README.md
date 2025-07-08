# JobTracker

JobTracker is a modern web application for tracking jobs, built with React, Vite, Shadcn UI, and Express.js.

## Features

- Dashboard and Jobs views
- Modern UI components (Shadcn UI, Lucide icons)
- Zustand for state management
- Express.js backend with CORS support

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, Radix UI, Zustand, Lucide Icons
- **Backend:** Node.js, Express.js, CORS
- **Dev Tools:** ESLint, Vite, Nodemon

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/jobtracker.git
cd jobtracker
```

#### 2. Install dependencies

**Client:**
```sh
cd client
npm install
```

**Server:**
```sh
cd ../server
npm install
```

### Running the App

**Start the backend server:**
```sh
cd server
npm run dev
```

**Start the frontend:**
```sh
cd ../client
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:8080](http://localhost:8080)

## Project Structure

```
client/   # React frontend
server/   # Express backend
```

## License

[MIT](LICENSE)