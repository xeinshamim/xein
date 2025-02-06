export interface Note {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export const notes: Note[] = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    content: `
# Getting Started with React Hooks

React Hooks are a powerful feature that allows you to use state and other React features in functional components. Here's a quick guide to get started:

## useState Hook

The useState hook is used for managing state in functional components:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect Hook

useEffect is used for handling side effects:

\`\`\`jsx
useEffect(() => {
  document.title = 'New Title';
}, []);
\`\`\`

## Best Practices

1. Always name your custom hooks with 'use' prefix
2. Don't call hooks inside loops or conditions
3. Only call hooks from React function components
`,
    excerpt: "Learn the fundamentals of React Hooks and how to implement them in your projects.",
    date: "2024-02-20",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    content: `
# TypeScript Best Practices

TypeScript adds static typing to JavaScript, making your code more robust and maintainable. Here are some best practices:

## Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
const numbers = [1, 2, 3]; // Type is inferred as number[]
\`\`\`

## Interface vs Type

Use interfaces for object types and types for unions/intersections:

\`\`\`typescript
interface User {
  name: string;
  age: number;
}

type Status = 'active' | 'inactive';
\`\`\`
`,
    excerpt: "Essential TypeScript patterns and practices for writing better code.",
    date: "2024-02-18",
    tags: ["TypeScript", "JavaScript", "Programming"],
  },
  {
    id: 3,
    title: "Modern CSS Layout Techniques",
    content: `
# Modern CSS Layout Techniques

Learn about modern CSS layout techniques that will help you build better websites.

## CSS Grid

CSS Grid is perfect for two-dimensional layouts:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## Flexbox

Flexbox is great for one-dimensional layouts:

\`\`\`css
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`
`,
    excerpt: "Explore modern CSS layout techniques including Grid and Flexbox.",
    date: "2024-02-15",
    tags: ["CSS", "Web Design", "Layout"],
  },
  {
    id: 4,
    title: "State Management with Redux Toolkit",
    content: `
# State Management with Redux Toolkit

Redux Toolkit is the official, opinionated toolset for Redux development.

## Setting up the Store

\`\`\`typescript
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // your reducers here
  },
});
\`\`\`

## Creating a Slice

\`\`\`typescript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
\`\`\`
`,
    excerpt: "Learn how to manage application state effectively with Redux Toolkit.",
    date: "2024-02-12",
    tags: ["Redux", "State Management", "React"],
  },
  {
    id: 5,
    title: "Testing React Components",
    content: `
# Testing React Components

Learn how to test your React components effectively using Jest and React Testing Library.

## Setting Up

\`\`\`typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
\`\`\`

## Best Practices

1. Test behavior, not implementation
2. Use semantic queries
3. Write accessible tests
`,
    excerpt: "A comprehensive guide to testing React components with Jest and React Testing Library.",
    date: "2024-02-10",
    tags: ["Testing", "React", "Jest"],
  },
  {
    id: 6,
    title: "Understanding Micro-Frontends",
    content: `
# Understanding Micro-Frontends

Micro-frontends architecture is gaining popularity. Here's what you need to know:

## Key Concepts

- Independent deployments
- Team autonomy
- Technology agnostic
- Isolated codebases

## Implementation Approaches

1. Build-time integration
2. Run-time integration
3. Server-side composition

## Best Practices

- Clear domain boundaries
- Shared design system
- Consistent user experience
- Performance optimization
`,
    excerpt: "Learn about micro-frontends architecture and implementation strategies.",
    date: "2024-02-08",
    tags: ["Architecture", "Frontend", "Micro-Frontends"],
  },
  {
    id: 7,
    title: "Web Performance Optimization",
    content: `
# Web Performance Optimization

Essential techniques for optimizing web application performance:

## Core Web Vitals

- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

## Optimization Techniques

1. Image optimization
2. Code splitting
3. Lazy loading
4. Caching strategies
`,
    excerpt: "Discover key techniques for optimizing web application performance.",
    date: "2024-02-06",
    tags: ["Performance", "Optimization", "Web Development"],
  }
];
