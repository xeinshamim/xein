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
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
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
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
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
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    featured: true,
  }
];
