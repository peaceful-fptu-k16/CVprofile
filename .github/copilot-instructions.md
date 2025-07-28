<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# CV Portfolio Project Instructions

This is a modern CV portfolio website built with React, TailwindCSS, and Framer Motion.

## Project Context
- **Tech Stack**: React.js + TailwindCSS + Framer Motion + Vite
- **Purpose**: Personal CV/portfolio website with modern design
- **Target**: Responsive design for all devices
- **Language**: Vietnamese content with English technical terms

## Code Guidelines

### React Components
- Use functional components with hooks
- Implement proper component composition
- Use descriptive component names
- Keep components focused on single responsibility

### Styling
- Use TailwindCSS utility classes
- Follow responsive-first approach
- Maintain consistent spacing and typography
- Use custom CSS classes for complex animations

### Animations
- Use Framer Motion for smooth transitions
- Implement entrance animations for sections
- Add hover effects for interactive elements
- Keep animations subtle and performant

### File Structure
```
src/
├── components/     # All React components
├── App.jsx        # Main app component
├── main.jsx       # Entry point
└── index.css      # Global styles
```

### Best Practices
- Write semantic HTML
- Ensure accessibility with proper ARIA labels
- Optimize for SEO with meta tags
- Use proper error boundaries
- Implement lazy loading where appropriate

### Content Customization
- All personal information should be easily customizable
- Skills, experience, and projects should be data-driven
- Contact information should be configurable
- Support both Vietnamese and English content

### Performance
- Optimize images and assets
- Minimize bundle size
- Use proper lazy loading
- Implement proper caching strategies

### Dark Mode
- Support both light and dark themes
- Use CSS custom properties for theming
- Ensure proper contrast ratios
- Test all components in both modes
