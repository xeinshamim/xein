export interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Web Applications",
    content: `
# Building Scalable Web Applications

Creating scalable web applications requires careful planning and the right architectural decisions. Here's a comprehensive guide:

## Architecture Patterns

### Microservices
- Independent deployments
- Separate databases
- API gateway pattern

### State Management
- Consider Redux for complex state
- Use Context API for simpler cases
- Implement caching strategies

## Performance Optimization

1. Code splitting
2. Lazy loading
3. Caching strategies
4. CDN usage

## Monitoring and Analytics

- Implement error tracking
- Monitor performance metrics
- Use analytics for user behavior
`,
    excerpt: "Learn how to architect web applications that can scale with your user base.",
    date: "2024-02-19",
    category: "Architecture",
    readingTime: "8 min read",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    content: `
# The Future of Web Development

Web development is constantly evolving. Here's what to expect in the coming years:

## Emerging Technologies

### Web Assembly
- Near-native performance
- Language interoperability
- Browser support

### Edge Computing
- Reduced latency
- Better user experience
- Distributed computing

## New Frameworks and Tools

1. Next.js and server components
2. Deno and fresh frameworks
3. AI-powered development tools

## Future Trends

- AI integration
- No-code platforms
- WebGPU and 3D graphics
`,
    excerpt: "Exploring upcoming trends and technologies in web development.",
    date: "2024-02-17",
    category: "Technology",
    readingTime: "6 min read",
  },
  {
    id: 3,
    title: "Mastering CSS Grid Layout",
    content: `
# Mastering CSS Grid Layout

CSS Grid has revolutionized web layouts. Here's how to master it:

## Grid Basics

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## Advanced Techniques

- Grid areas
- Auto-fit and auto-fill
- Responsive layouts
- Grid alignment

## Best Practices

1. Use semantic HTML
2. Plan your grid structure
3. Consider accessibility
4. Test across browsers
`,
    excerpt: "A comprehensive guide to mastering CSS Grid Layout for modern web development.",
    date: "2024-02-15",
    category: "CSS",
    readingTime: "10 min read",
  },
  {
    id: 4,
    title: "Introduction to Web Security",
    content: `
# Introduction to Web Security

Security is crucial for web applications. Learn the fundamentals:

## Common Vulnerabilities

1. XSS (Cross-Site Scripting)
2. CSRF (Cross-Site Request Forgery)
3. SQL Injection
4. Authentication Bypass

## Security Best Practices

- Input validation
- Output encoding
- HTTPS everywhere
- Security headers
- Regular updates

## Tools and Resources

- OWASP Top 10
- Security scanners
- Penetration testing
`,
    excerpt: "Learn the fundamentals of web security and how to protect your applications.",
    date: "2024-02-13",
    category: "Security",
    readingTime: "12 min read",
  },
  {
    id: 5,
    title: "Optimizing React Performance",
    content: `
# Optimizing React Performance

Make your React applications faster with these optimization techniques:

## Code Splitting

\`\`\`jsx
const MyComponent = React.lazy(() => import('./MyComponent'));
\`\`\`

## Memoization

\`\`\`jsx
const MemoizedComponent = React.memo(MyComponent);
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
\`\`\`

## Virtual DOM Optimization

- Use keys properly
- Avoid inline functions
- Implement shouldComponentUpdate
`,
    excerpt: "Learn advanced techniques for optimizing React application performance.",
    date: "2024-02-11",
    category: "React",
    readingTime: "15 min read",
  }
];