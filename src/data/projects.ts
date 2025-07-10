export interface Project {
  id: number;
  title: string;
  description: string;
  content: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    content: `
# E-commerce Platform

A full-featured e-commerce platform built with modern technologies.

## Features

- User authentication and authorization
- Product catalog with search and filters
- Shopping cart with real-time updates
- Payment integration with Stripe
- Order management system
- Admin dashboard with analytics
- Inventory management
- Customer reviews and ratings
- Wishlist functionality
- Email notifications

## Technical Details

- React frontend with TypeScript
- Node.js backend with Express
- MongoDB database
- Redux for state management
- Stripe payment integration
- AWS S3 for media storage
- Docker containerization
- CI/CD pipeline with GitHub Actions
`,
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "Docker", "AWS"],
    imageUrl: "/placeholder.svg",
    demoUrl: "/demos/ecommerce",
    githubUrl: "https://github.com/example/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application",
    content: `
# Task Management App

A real-time collaborative task management application.

## Features

- Real-time updates with WebSocket
- Team collaboration tools
- Task assignments and tracking
- Due date management
- Progress monitoring
- File attachments
- Comment system
- Activity timeline
- Custom dashboards
- Time tracking

## Technical Stack

- Next.js frontend
- Prisma ORM
- PostgreSQL database
- WebSocket integration
- AWS S3 for storage
- Authentication with NextAuth.js
- Real-time notifications
- Mobile responsive design
`,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket", "AWS"],
    imageUrl: "/placeholder.svg",
    demoUrl: "/demos/task-manager",
    githubUrl: "https://github.com/example/task-management",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Analytics dashboard with AI-driven insights",
    content: `
# AI-Powered Analytics Dashboard

An advanced analytics dashboard that leverages AI to provide actionable insights.

## Features

- Real-time data visualization
- AI-driven predictions
- Custom report generation
- Automated insights
- Data export capabilities
- Role-based access control
- Integration with popular data sources
- Mobile-first design

## Technical Details

- React with TypeScript
- TensorFlow.js for AI models
- D3.js for visualizations
- GraphQL API
- Redis caching
- Kubernetes deployment
`,
    technologies: ["React", "TensorFlow.js", "D3.js", "GraphQL", "Redis", "Kubernetes"],
    imageUrl: "/placeholder.svg",
    demoUrl: "/demos/analytics",
    githubUrl: "https://github.com/example/ai-analytics",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management platform",
    content: `
# Social Media Dashboard

A powerful social media management platform for brands and agencies.

## Features

- Multi-platform posting (Twitter, Facebook, Instagram, LinkedIn)
- Content scheduling and calendar
- Analytics and engagement tracking
- Team collaboration tools
- Content library management
- Hashtag research and recommendations
- Competitor analysis
- Automated reporting

## Technical Stack

- React with TypeScript
- Node.js backend
- MongoDB database
- Social media APIs integration
- Chart.js for analytics
- Cloudinary for media storage
`,
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Chart.js", "API Integration"],
    imageUrl: "/placeholder.svg",
    demoUrl: "/demos/social-dashboard",
    githubUrl: "https://github.com/example/social-dashboard",
    featured: false,
  },
  {
    id: 5,
    title: "Weather App",
    description: "A beautiful weather application with detailed forecasts",
    content: `
# Weather App

A modern weather application providing detailed weather information and forecasts.

## Features

- Current weather conditions
- 7-day weather forecast
- Hourly predictions
- Weather maps and radar
- Location-based weather
- Weather alerts and notifications
- Historical weather data
- Beautiful animated weather icons

## Technical Details

- React with hooks
- OpenWeatherMap API
- Geolocation services
- Responsive design
- Progressive Web App (PWA)
- Chart.js for data visualization
`,
    technologies: ["React", "JavaScript", "Weather API", "PWA", "Chart.js", "Geolocation"],
    imageUrl: "/placeholder.svg",
    demoUrl: "/demos/weather",
    githubUrl: "https://github.com/example/weather-app",
    featured: false,
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "A personal finance management application",
    content: `
# Expense Tracker

A comprehensive personal finance management application to track expenses and manage budgets.

## Features

- Expense categorization
- Budget planning and tracking
- Monthly/yearly reports
- Expense analytics with charts
- Receipt photo upload
- Multi-currency support
- Export data to CSV/PDF
- Goal setting and tracking

## Technical Stack

- React with TypeScript
- Local storage for data persistence
- Chart.js for visualizations
- Camera API for receipt capture
- Export libraries for reports
- Material-UI components
`,
    technologies: ["React", "TypeScript", "Chart.js", "Local Storage", "Material-UI"],
    imageUrl: "/placeholder.svg",
    demoUrl: "/demos/expense-tracker",
    githubUrl: "https://github.com/example/expense-tracker",
    featured: false,
  }
];
