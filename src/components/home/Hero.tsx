
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook, Mail, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-background to-background" />
      
      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Intro with Hand Wave */}
          <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl">
            <span className="font-bold">Hey!</span>
            <span className="animate-wave">👋</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-in">
            I'm a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-navy-500 animate-pulse-slow">
              Programmer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl animate-slide-in">
            I do all the setup{" "}
            <span className="text-primary font-semibold">for you</span>.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Welcome to my spot on the web for writing, projects, tutorials, art, and anything else I want to put out there. On the site, you'll find my notes and all the technical articles I've written over the years. Check out the projects page to see a highlight of my open-source work.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 pt-4 animate-fade-in">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in">
            <Link to="/projects">
              <Button size="lg" className="w-full sm:w-auto group hover-lift">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto hover-lift">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-navy-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-navy-700/10 rounded-full blur-3xl animate-float" />
      </div>
    </section>
  );
};

export default Hero;
