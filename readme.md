# Express TypeScript Starter Template

A production-oriented starting point for building an Express API with TypeScript, native ESM imports, request validation, structured logging, correlation IDs, API versioning, and centralized error handling.

## Prerequisites

- Node.js 22 or a newer LTS release
- npm
- Git (optional, but recommended)

Check your installed versions:

```bash
node --version
npm --version
```

## Start a new project from this template

### 1. Clone or copy the template

```bash
git clone https://github.com/anmolsharma170/Express-TypeScript-Template.git my-api
cd my-api
```

If you downloaded the files instead, open a terminal in the project directory.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3001
```

`PORT` is optional. The application uses port `3001` when it is missing or not a valid number. Do not commit `.env`; it is ignored by Git.

### 4. Run the development server

```bash
npm run dev
```

This uses `nodemon` and `tsx`, so the TypeScript server restarts when source files change. The server is available at `http://localhost:3001` by default.

### 5. Verify the starter endpoints

```bash
curl http://localhost:3001/api/v1/ping
curl http://localhost:3001/api/v1/ping/health
curl http://localhost:3001/api/v1/ping/123/comments
```

Expected responses:

- `GET /api/v1/ping` returns `{"message":"pong"}`.
- `GET /api/v1/ping/:id/comments` currently uses the same starter ping handler and returns `{"message":"pong"}`.
- `GET /api/v1/ping/health` returns `ok`.

## Available npm scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Run the development server with automatic restart |
| `npm run build` | Compile `src/` to `dist/` and emit JavaScript, declarations, and source maps |
| `npm start` | Start the TypeScript server with `ts-node` |
| `npm test` | Placeholder script; tests have not been added yet |

For a production-style run, build first and then replace the start command with a compiled-output command such as `node dist/server.js` after confirming the deployment convention for your project.

## Project structure

```text
src/
├── config/
│   ├── index.ts              # dotenv loading and server configuration
│   └── logger.config.ts      # Winston console and rotating-file logger
├── controllers/
│   └── ping.controller.ts   # starter ping controller
├── middlewares/
│   ├── correlation.middleware.ts
│   └── error.middleware.ts
├── routers/
│   ├── v1/
│   │   ├── index.router.ts
│   │   └── ping.router.ts
│   └── v2/
│       └── index.router.ts  # reserved for future v2 routes
├── utils/
│   ├── errors/app.error.ts
│   └── helpers/request.helpers.ts
├── validators/
│   ├── index.ts
│   └── ping.validator.ts
└── server.ts
```

## Adding an endpoint

1. Add a Zod schema in `src/validators/` when the endpoint accepts body or query data.
2. Add a controller in `src/controllers/`.
3. Add a focused router in `src/routers/`.
4. Mount the router in the appropriate version router (`/api/v1` or `/api/v2`).
5. Use the existing logger and custom errors so operational behavior stays consistent.
6. Run `npm run build` before opening a pull request.

The application already calls `express.json()` before routers, attaches a correlation ID to every request, and registers the generic error handler after application routes. Keep that middleware order when adding new global middleware.

## Logging

Logs are written to:

- the console; and
- `logs/YYYY-MM-DD-app.log`.

Daily files rotate at 20 MB and are retained for 14 days. Each structured log entry includes a timestamp, level, message, correlation ID, and additional data. The `logs/` directory is ignored because logs are runtime output, not source code.

## Important starter-template notes

- The v2 router is intentionally empty so new API changes can be introduced without changing v1 behavior.
- The validation helpers and error classes are reusable building blocks; they are not all wired to the starter ping routes yet.
- The default error handler expects errors with a `statusCode` and `message`. Add a safe fallback before exposing arbitrary production errors.
- There is no database, authentication, authorization, CORS policy, rate limiting, or test suite in this starter. Add these per application requirements rather than assuming they are included.
- Never commit secrets, `.env` files, `node_modules`, compiled output, or runtime logs.

For an interviewer-friendly explanation of the design and implementation decisions, see [INTERVIEW_GUIDE.md](./INTERVIEW_GUIDE.md).
