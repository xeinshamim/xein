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

- User authentication
- Product catalog
- Shopping cart
- Payment integration
- Order management
- Admin dashboard

## Technical Details

- React frontend with TypeScript
- Node.js backend with Express
- MongoDB database
- Redux for state management
- Stripe payment integration
`,
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
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

- Real-time updates
- Team collaboration
- Task assignments
- Due date tracking
- Progress monitoring
- File attachments

## Technical Stack

- Next.js frontend
- Prisma ORM
- PostgreSQL database
- WebSocket integration
- AWS S3 for storage
`,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "WebSocket"],
    imageUrl: "/placeholder.svg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    featured: true,
  },
];