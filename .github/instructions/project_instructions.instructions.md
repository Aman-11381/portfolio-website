---
applyTo: '**'
---

# Portfolio Website - Project Context & Guidelines

## Project Overview
Personal portfolio website for a software developer with 2 years of experience. The project follows a phased approach - starting simple and gradually adding advanced features like animations and 3D objects.

## Technology Stack

### Core Technologies
- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **TypeScript** - (Optional) For type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing

### Animation & 3D (Phase 2+)
- **Framer Motion** - UI animations and transitions
- **React Three Fiber + Drei** - 3D objects and scenes

### Form Handling (Phase 2)
- **EmailJS** or **Formspree** - Contact form service (no backend needed)

### State Management
- **React Context API** or **Zustand** - For simple state needs (theme toggle, etc.)

### Deployment
- **Azure Static Web Apps** - Hosting platform with CI/CD from GitHub

### Development Tools
- **ESLint + Prettier** - Code quality and formatting
- **Git + GitHub** - Version control
- **GitHub Actions** - Automated deployment (built-in with Azure Static Web Apps)

## Project Structure
```
personal_site/
├── src/
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections (Hero, About, Projects, Skills, etc.)
│   ├── assets/         # Images, icons, media files
│   ├── data/          # JSON/Markdown files for content
│   ├── styles/        # Global styles, Tailwind config
│   └── App.jsx        # Main application component
├── public/            # Static assets
└── package.json
```

## Development Phases

### Phase 1 (MVP)
- Basic React + Vite + Tailwind setup
- Static sections: Hero, About, Skills, Projects, Footer
- Responsive design for mobile/tablet/desktop
- Deploy to Azure Static Web Apps

### Phase 2 (Enhanced)
- Framer Motion for smooth animations
- Contact form with EmailJS/Formspree
- 3D elements with React Three Fiber
- Dark/light theme toggle

## Coding Guidelines

### Component Structure
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use Tailwind utility classes for styling

### File Naming
- Components: PascalCase (e.g., `HeroSection.jsx`)
- Utilities/Hooks: camelCase (e.g., `useTheme.js`)
- Data files: kebab-case (e.g., `projects-data.json`)

### Content Management
- Store content (projects, skills, etc.) in JSON/Markdown files in `src/data/`
- Keep content separate from components for easy updates

### Styling
- Use Tailwind utility classes as primary styling method
- Create custom Tailwind classes for repeated patterns
- Responsive design: mobile-first approach

### Performance
- Lazy load images and heavy components
- Optimize assets before committing
- Use React.lazy() for code splitting when needed

## Deployment
- Deploy to Azure Static Web Apps
- Use Azure-provided domain initially
- Automatic deployments via GitHub Actions on push to main branch

## Communication & Development Guidelines

### Transparency & Clarity
- **Never assume or guess** - If something is unclear or unknown, explicitly state "I don't know" or "I need more information about [specific detail]"
- **Explain all changes in detail** - Before making any code changes, explain:
  - What will be changed
  - Why it needs to be changed
  - What the expected outcome is
  - Any potential side effects or dependencies
- **Ask before proceeding** - When requirements are ambiguous or multiple approaches exist, present options and ask for preference

### Code Changes
- **Be explicit about modifications** - When editing files, clearly state:
  - Which file(s) will be modified
  - What specific sections/lines are being changed
  - The exact changes being made (additions, deletions, modifications)
- **One change at a time** - For complex updates, break them into smaller, logical steps that can be reviewed individually
- **Explain technical decisions** - When choosing between implementation approaches, explain the reasoning

### Problem-Solving Approach
- **State what you know and don't know** - Be upfront about limitations or uncertainties
- **Verify before acting** - Read relevant files and context before making changes
- **Document assumptions** - If any assumption must be made, clearly label it as such and explain why

### Code Examples & Explanations
- **Provide context** - When showing code, explain what each part does
- **Highlight important details** - Point out critical aspects, gotchas, or non-obvious behavior
- **Reference documentation** - When applicable, mention relevant documentation or best practices being followed