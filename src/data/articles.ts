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
];