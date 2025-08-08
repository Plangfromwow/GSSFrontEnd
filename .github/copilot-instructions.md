# Garcia Software Solutions Frontend

Garcia Software Solutions is a modern React + TypeScript website built with Vite, Tailwind CSS, and Framer Motion. This is a professional company portfolio site featuring smooth animations, responsive design, and a contact form.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Initial Setup
- `npm install` -- installs all dependencies. Takes ~35 seconds. NEVER CANCEL.

### Development Workflow
- `npm run dev` -- starts development server on http://localhost:5173/. Starts in ~200ms.
- `npm run lint` -- runs ESLint. Takes ~1 second. Always run before committing.
- `npm run build` -- compiles TypeScript and builds for production. Takes ~7 seconds. Outputs to `dist/` directory.
- `npm run preview` -- serves the built application on http://localhost:4173/. Must run build first.

### TIMING AND TIMEOUTS
- **NEVER CANCEL** npm install: Set timeout to at least 120 seconds (actual time ~35s)
- Build is fast (~7 seconds): Set timeout to at least 60 seconds for safety
- Linting is very fast (~1 second): Set timeout to at least 30 seconds for safety
- Dev server starts instantly (~200ms): Set timeout to at least 30 seconds for safety

## Validation Scenarios

### Complete End-to-End Testing
Always test these scenarios after making changes:
1. **Navigation Test**: Click all navigation links (Services, Process, Testimonials, Contact) to verify smooth scrolling works
2. **Contact Form Test**: Fill out all form fields (Name, Email, Message) and attempt submission
   - **NOTE**: Form submission will fail with "formspree.io is blocked" - this is EXPECTED behavior
   - The form uses a placeholder Formspree endpoint that needs client configuration
3. **Responsive Design Test**: Test the website at different viewport sizes
4. **Animation Test**: Verify Framer Motion animations are working throughout the site

### Build Validation
Always run this complete sequence to validate changes:
```bash
npm run lint          # Must pass with no errors
npm run build         # Must complete successfully
npm run preview       # Test built application
```

### Development Validation
For development testing:
```bash
npm run dev           # Start dev server
# Test all user scenarios in browser at http://localhost:5173/
# Verify hot reload works by making a small change
```

## Key Project Structure

### Repository Root
```
/home/runner/work/GSSFrontEnd/GSSFrontEnd/
├── README.md                 # Project documentation
├── package.json              # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TypeScript config
├── tsconfig.node.json       # Node.js TypeScript config
├── eslint.config.js         # ESLint configuration
├── tailwind.config.cjs      # Tailwind CSS configuration
├── postcss.config.cjs       # PostCSS configuration
├── index.html               # Main HTML template
├── public/                  # Static assets
│   ├── vite.svg
│   └── robots.txt
└── src/                     # Source code
    ├── main.tsx             # React app entry point
    ├── App.tsx              # Main application component
    ├── App.css              # Component styles
    ├── index.css            # Global styles
    ├── vite-env.d.ts        # Vite type definitions
    └── assets/              # Asset files
```

### Technology Stack
- **React 19.1.1** with TypeScript for the UI
- **Vite 7.1.0** for build tooling and development server
- **Tailwind CSS 3.4.14** for styling with custom theme colors:
  - Brand: #1F7A8C (default), #0F5257 (dark), #4CC9F0 (light)
  - Accent: #F72585
- **Framer Motion 12.23.12** for animations
- **Lucide React 0.539.0** for icons
- **React Hook Form 7.62.0** for form handling

### Important Files to Check When Making Changes
- Always run `npm run lint` after editing TypeScript/JavaScript files
- Check `src/App.tsx` for main content and layout changes
- Check `tailwind.config.cjs` for design system/color changes
- Check `index.html` for meta tags and SEO-related changes

## Common Tasks

### Adding New Dependencies
```bash
npm install package-name
# or for dev dependencies:
npm install --save-dev package-name
```

### Updating Contact Information
Edit `src/App.tsx` and update:
- Email addresses in mailto: links
- Phone number in tel: links  
- Calendly URL (currently placeholder)
- Formspree form endpoint (currently placeholder)

### Customizing Colors and Styling
Edit `tailwind.config.cjs` under `theme.extend.colors`:
- Brand colors: DEFAULT, dark, light variants
- Accent color
- Custom box shadows and fonts

### Working with Animations
The site uses Framer Motion extensively. When modifying animations:
- Check existing animation patterns in `src/App.tsx`
- Test animations work smoothly in development mode
- Verify animations don't break on slower devices

## Troubleshooting

### Common Issues
- **Form submission blocked**: Expected behavior - form uses placeholder Formspree endpoint
- **Build errors**: Usually TypeScript issues - check `npm run lint` output
- **Styling issues**: Check Tailwind classes and ensure PostCSS is processing correctly
- **Animation issues**: Verify Framer Motion imports and component structure

### No Testing Framework
This project currently has no automated testing setup. Rely on:
1. Manual browser testing with the validation scenarios above
2. TypeScript type checking via `npm run build`
3. ESLint checks via `npm run lint`

### No CI/CD Pipeline
This project has no GitHub Actions or automated deployment. Changes must be manually validated using the commands and scenarios outlined above.

## Production Deployment

The built `dist/` directory can be deployed to any static hosting service:
- Netlify, Vercel, GitHub Pages, Cloudflare Pages
- Use build command: `npm run build`
- Publish directory: `dist/`
- No backend or server-side processing required

Before deployment, always run the complete validation sequence to ensure the site works correctly.