# Conway's Game of Life Backend

NestJS backend API for Conway's Game of Life patterns.

Supports the frontend at: https://conway-game-of-life-ten.vercel.app/

## Setup

```bash
npm install
```

## Development

```bash
# Start database
npm run db:dev:up

# Start dev server
npm run start:dev
```

## Database

- **Local**: MongoDB via Docker Compose
- **Production**: MongoDB Atlas (set `DATABASE_URL` env var)

## Structure

```
src/
├── main.ts                 # Application entry point
├── app.module.ts           # Root module
└── patterns/               # Patterns feature module
    ├── dto/
    │   └── create-pattern.dto.ts
    ├── pattern.schema.ts
    ├── patterns.controller.ts
    ├── patterns.service.ts
    └── patterns.module.ts
test/
└── app.e2e-spec.ts        # E2E tests
```

## Scripts

- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Lint code