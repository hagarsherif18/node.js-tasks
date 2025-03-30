# Static Site Server

A project with two separate Node.js Express servers that serve static files.

## Project Structure

- `/task1`: Contains the basic Express server
  - `/public`: Static website files (HTML, CSS, JavaScript)
  - `server.js`: Basic Express server

- `/task2`: Contains the Express server with additional middlewares
  - `/public`: Static website files (HTML, CSS, JavaScript)
  - `server.js`: Express server with CORS and express.json() middlewares

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```

## Running the Servers

### Task 1 (Basic Server)
```
npm run start:task1
```

For development with auto-restart:
```
npm run dev:task1
```

### Task 2 (Server with Middlewares)
```
npm run start:task2
```

For development with auto-restart:
```
npm run dev:task2
```

Both servers run on http://localhost:3000 by default, so make sure to run them one at a time.

## Structure

- `/task1`: Contains the static website files (HTML, CSS, JavaScript)
- `server.js`: The Express server that serves the static files
- `package.json`: Project configuration and dependencies 