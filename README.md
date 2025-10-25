# 🚀 React + Vite Starter Template

A minimal, high-performance setup for building **React applications** with [Vite](https://vitejs.dev/).  
Includes **HMR (Hot Module Replacement)**, recommended ESLint rules, and optional TypeScript support.

---

## 🎬 Demo

Showcase your project with a GIF or video:

![Demo GIF](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZ6bGpjZTlkc2p3bGc0eGRtNmRkZzUweGMyaGE5N2tqbXQ4OTgyaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zaAwMUtdvrWXnWubhU/giphy.gif)
---

## ⚡ Features

- **React 18** with hooks and concurrent features
- **Vite** for blazing-fast dev server and optimized builds
- **ESLint** configured with best practices
- **HMR** for instant updates during development
- Optional **TypeScript support** for type safety

---

## 🧩 Supported Plugins

| Plugin | Compiler | Notes |
|--------|----------|-------|
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | Babel | Standard Fast Refresh |
| [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) | SWC | High-performance Fast Refresh |

> ⚠️ **React Compiler** is not enabled by default due to performance impact.  
> Learn more: [React Compiler Installation](https://react.dev/learn/react-compiler/installation)

---

## 🛠 ESLint & TypeScript

For production-ready apps:

- Use **TypeScript** for safer code
- Enable **type-aware ESLint rules** via [`typescript-eslint`](https://typescript-eslint.io)  
- Check out the [React + TS Vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/react-vite-template.git
cd react-vite-template

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint your code
npm run lint
