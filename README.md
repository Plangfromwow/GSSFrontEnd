# Garcia Software Solutions — Website

A modern, animated React site for Garcia Software Solutions, LLC. Built with Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Tech
- React + Vite + TypeScript
- Tailwind CSS v3
- Framer Motion for animations
- Lucide icons

## Local development
```bash
npm install
npm run dev
```
Then open the shown local URL.

## Build
```bash
npm run build
npm run preview
```

## Customize
- Company name and copy: edit `src/App.tsx` sections (Hero, Services, Process, Contact, Footer).
- Email: update `mailto:` links and the address in the contact form helper text.
- Meeting link: replace the Calendly URL in `src/App.tsx` (Contact section) with your scheduling link.
- Phone: update the `tel:` number.
- Contact form: replace `https://formspree.io/f/your-form-id` with your Formspree endpoint (or remove the form and rely on email/Calendly only).
- Colors: adjust theme in `tailwind.config.cjs` under `theme.extend.colors`.

## Deploy
- Static hosting works out of the box (Netlify, Vercel, GitHub Pages, Cloudflare Pages). Use the default build command `npm run build` and publish the `dist/` directory.

## Notes
- No backend required. The form posts to Formspree (replace with your endpoint). All other contact actions are client-only.# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
