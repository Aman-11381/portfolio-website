# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, 3D visualizations, and a mobile-first design.

![Portfolio Preview](https://img.shields.io/badge/Status-In%20Development-yellow)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)

## 🚀 Features

- **Responsive Design**: Fully responsive layout with mobile hamburger menu
- **Modern UI**: Clean, professional design with smooth animations using Framer Motion
- **3D Visualizations**: Interactive code visualization with floating elements
- **Dark Navigation**: Dynamic navigation bar that changes style on scroll
- **Contact Form**: Integrated contact form using Formspree
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Type Safety**: Full TypeScript support for better code quality

## 🛠️ Technology Stack

### Core
- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Build tool and dev server
- **React Router v7** - Client-side routing

### Styling & Animation
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio_website.git
   cd portfolio_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   - Update the Formspree form ID in `src/pages/Contact.tsx` if you want to use your own contact form

## 🚀 Usage

### Development Server
Start the development server with hot module replacement:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```
The built files will be in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check for code issues:
```bash
npm run lint
```

## 📁 Project Structure

```
portfolio_website/
├── public/               # Static assets
│   └── fonts/           # Font files
├── src/
│   ├── assets/          # Images, icons, media files
│   ├── components/      # Reusable UI components
│   │   ├── CodeVisualization.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── data/            # JSON/Markdown content files
│   ├── pages/           # Page components
│   │   ├── Contact.tsx
│   │   └── Home.tsx
│   ├── sections/        # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── HeroSection.tsx
│   │   └── WorkSection.tsx
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global CSS
├── .github/
│   └── instructions/    # Project guidelines
├── eslint.config.js     # ESLint configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Project dependencies
```

## 🎨 Customization

### Update Personal Information
1. **Hero Section**: Edit `src/sections/HeroSection.tsx`
2. **About Section**: Edit `src/sections/AboutSection.tsx`
3. **Work Experience**: Edit `src/sections/WorkSection.tsx`
4. **Footer Links**: Edit `src/components/Footer.tsx`

### Styling
- Tailwind configuration: `tailwind.config.js`
- Global styles: `src/index.css`
- Theme colors can be modified in the Tailwind config

### Contact Form
Replace the Formspree form ID in `src/pages/Contact.tsx`:
```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## 🚢 Deployment

### Azure Static Web Apps (Recommended)
1. Push your code to GitHub
2. Create an Azure Static Web App
3. Connect your GitHub repository
4. Azure will automatically build and deploy on every push to main

### Other Platforms
- **Vercel**: `vercel --prod`
- **Netlify**: Connect your repository or use `netlify deploy --prod`
- **GitHub Pages**: Use `gh-pages` package

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aman**
- GitHub: [@Aman-11381](https://github.com/Aman-11381)
- LinkedIn: [Aman](https://www.linkedin.com/in/aman11381/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Framer Motion for smooth animations
- React Three Fiber community for 3D implementation examples

---

⭐ Star this repository if you found it helpful!
