import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application",
      tech: ["Next.js", "TypeScript", "Prisma"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link to="/projects">
            <Button variant="ghost" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-card hover:bg-accent/5 border border-border/50 p-6 rounded-lg transition-all duration-200 hover:-translate-y-1 animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-3 hover:text-[#0EA5E9] transition-colors duration-300">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link 
                to={`/projects/${project.id}`}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
              >
                View Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;