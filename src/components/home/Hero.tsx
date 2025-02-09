
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-8 sm:py-16">
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700/90 via-background to-background animate-gradient" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-6">
          {/* Animated Intro */}
          <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
            <span className="font-medium text-foreground/90">Hey!</span>
            <span className="animate-wave inline-block">👋</span>
          </div>

          {/* Main Title with Enhanced Animation */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-slide-in opacity-0 -mt-1 sm:mt-0"
              style={{ animationDelay: "400ms" }}>
            I'm a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-navy-500 animate-pulse-slow">
              Programmer
            </span>
          </h1>

          {/* Subtitle with Staggered Animation */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 animate-slide-in opacity-0 -mt-1 sm:mt-0"
             style={{ animationDelay: "600ms" }}>
            I do all the setup{" "}
            <span className="text-primary font-medium">for you</span>.
          </p>

          {/* Description with Fade Animation */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0 leading-relaxed"
             style={{ animationDelay: "800ms" }}>
            Welcome to my spot on the web for writing, projects, tutorials, art, and anything else I want to put out there. On the site, you'll find my notes and all the technical articles I've written over the years.
          </p>

          {/* Social Links with Hover Effects */}
          <div className="flex justify-center gap-5 pt-4 animate-fade-in opacity-0"
               style={{ animationDelay: "1000ms" }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="Blog Posts"
            >
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          {/* Call to Action Buttons with Enhanced Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6 animate-fade-in opacity-0"
               style={{ animationDelay: "1200ms" }}>
            <Link to="/projects">
              <Button 
                size="lg" 
                className="w-full sm:w-auto group bg-primary/90 hover:bg-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-primary/20 hover:border-primary/40"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-navy-700/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
};

export default Hero;
