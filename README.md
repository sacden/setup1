# Setup1 — Next.js 15 + React 19 + TypeScript + Tailwind Project

This is a **starter project** using **Next.js 15.5**, **React 19**, **TypeScript**, and **TailwindCSS**.  
It provides a **basic project setup** ready for development with modern technologies, including:

- Next.js 15 with Turbopack
- TypeScript support
- TailwindCSS for styling
- React Query (tanstack/react-query) for data fetching and caching
- GraphQL integration
- GraphQL Code Generator for automatic TypeScript types and React Query hooks
- ESLint and Prettier for code quality
- Husky for git hooks

---

## Quick Start

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd setup1
```

2. **Install dependencies**

```bash
npm install
```

3. **Generate TypeScript types and hooks from GraphQL queries**

```bash
npx graphql-codegen
```

4. **Build the project for production**

```bash
npm run build
```

5. **Start the production server**

```bash
npm run start
```

6. **Optional: Run the development server**

```bash
npm run dev
```

---

## Available Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Starts Next.js development server    |
| `npm run build`    | Builds project for production        |
| `npm run start`    | Starts production server             |
| `npm run lint`     | Lints project using ESLint           |
| `npm run lint:fix` | Lints and automatically fixes issues |
| `npm run format`   | Formats project using Prettier       |
| `npm run prepare`  | Installs Husky git hooks             |

---

## Purpose

This project serves as a **base template** for starting new Next.js + React projects with TypeScript and TailwindCSS.  
It comes fully configured with essential tooling for development, linting, formatting, building, and includes **GraphQL + React Query setup** so you can focus on implementing features rather than boilerplate.

---

## License

MIT © Denis Sachmajev
