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
];