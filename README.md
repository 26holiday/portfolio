# Portfolio Website

A minimalistic and beautiful Next.js portfolio website designed for easy content management without diving into code. This portfolio is perfect for computer science students, developers, and professionals who want to showcase their projects, skills, and experience.

## ✨ Features

- **Data-driven content**: All portfolio content is stored in JSON files for easy updates
- **Minimalistic design**: Clean, modern UI using Tailwind CSS
- **TypeScript**: Full TypeScript support for better development experience
- **Component-based**: Reusable React components for consistency
- **Responsive design**: Optimized for all devices and screen sizes
- **SEO-friendly**: Proper metadata and structured markup
- **Fast performance**: Next.js optimization with server-side rendering
- **Smooth animations**: Framer Motion for elegant interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📝 Content Management

All content is managed through JSON files in the `data/` directory. No coding required!

### Personal Information (`data/personal.json`)

Update your basic information, contact details, and social links:

```json
{
  "name": "Your Name",
  "title": "Your Professional Title",
  "subtitle": "Brief description about yourself",
  "bio": "Longer bio paragraph...",
  "location": "Your Location",
  "email": "your.email@example.com",
  "phone": "+1234567890",
  "resume": "path/to/your/resume.pdf",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername"
  }
}
```

### Projects (`data/projects.json`)

Add your portfolio projects:

```json
[
  {
    "id": "project-1",
    "title": "Project Title",
    "description": "Project description...",
    "category": "Web Development",
    "type": "Personal Project", // or "Client Work"
    "technologies": ["React", "Node.js", "MongoDB"],
    "features": ["Feature 1", "Feature 2"],
    "demoUrl": "https://demo-link.com",
    "githubUrl": "https://github.com/user/repo",
    "imageUrl": "/images/project1.jpg",
    "completedAt": "2024-01-15"
  }
]
```

### Skills (`data/skills.json`)

Organize your technical and soft skills:

```json
{
  "technicalSkills": [
    {
      "category": "Frontend",
      "skills": [
        { "name": "React", "level": "Advanced" },
        { "name": "TypeScript", "level": "Intermediate" }
      ]
    }
  ],
  "softSkills": [
    "Problem Solving",
    "Team Collaboration",
    "Communication"
  ]
}
```

### Experience (`data/experience.json`)

Add your work experience, education, and achievements:

```json
{
  "work": [
    {
      "id": "job-1",
      "position": "Job Title",
      "company": "Company Name",
      "location": "Location",
      "startDate": "2023-01-01",
      "endDate": "2024-01-01", // or null for current
      "type": "Full-time", // "Part-time", "Freelance", "Internship"
      "description": "Job description...",
      "responsibilities": ["Task 1", "Task 2"],
      "technologies": ["Tech 1", "Tech 2"]
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University Name",
      "location": "Location",
      "startDate": "2020-09-01",
      "endDate": "2024-05-01",
      "gpa": "3.8/4.0",
      "achievements": ["Dean's List", "Scholarship Recipient"]
    }
  ],
  "achievements": [
    {
      "id": "ach-1",
      "title": "Achievement Title",
      "description": "Achievement description...",
      "date": "2024-01-01",
      "type": "Award" // "Certification", "Competition", etc.
    }
  ]
}
```

## 🎨 Customization

### Colors and Styling

The website uses Tailwind CSS for styling. Main colors can be customized in the components:

- Primary: `blue-600` to `purple-600` (gradient)
- Background: `gray-50` to `white`
- Text: `gray-900`, `gray-600`, `gray-500`

### Adding Images

1. Place images in the `public/images/` directory
2. Reference them in your JSON files as `/images/filename.jpg`
3. Recommended sizes:
   - Project images: 800x600px
   - Profile image: 400x400px

### Contact Form

The contact form is currently a static form. To make it functional:

1. Add a form handler service (Formspree, Netlify Forms, etc.)
2. Update the form action in `src/components/Contact.tsx`

## 🛠️ Development

### Project Structure

```
portfolio/
├── data/                 # JSON content files
│   ├── personal.json
│   ├── projects.json
│   ├── skills.json
│   └── experience.json
├── public/              # Static assets
│   └── images/         # Image files
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── lib/           # Utility functions
│   └── types/         # TypeScript interfaces
└── ...config files
```

### Key Components

- **Hero**: Landing section with name and CTA buttons
- **About**: Personal information and bio
- **Projects**: Filterable project showcase
- **Skills**: Technical and soft skills display
- **Experience**: Work history, education, achievements
- **Contact**: Contact form and social links

### VS Code Tasks

Two VS Code tasks are configured:

- **Build Portfolio**: Builds the project for production
- **Start Development Server**: Starts the dev server with hot reload

Access them via `Ctrl+Shift+P` → "Tasks: Run Task"

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: `sm` (640px+)
- Tablet: `md` (768px+)
- Desktop: `lg` (1024px+)
- Large: `xl` (1280px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms

The project works with any static hosting service that supports Node.js.

## 🔧 Troubleshooting

### Common Issues

1. **Build errors**: Check that all JSON files have valid syntax
2. **Images not loading**: Ensure images are in `public/images/` and paths are correct
3. **Styling issues**: Clear browser cache and rebuild the project

### Getting Help

1. Check the browser console for errors
2. Validate JSON files using a JSON validator
3. Ensure all required fields in JSON files are present

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this portfolio template.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
