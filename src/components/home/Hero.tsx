import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook, Mail, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Background with vertical lines */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,255,255,0.1)_0%,_rgba(0,255,255,0)_100%)] opacity-40" />
        <div className="absolute inset-0 bg-no-repeat bg-center bg-fixed bg-[url('/grid-pattern.svg')] opacity-20" />
      </div>
      
      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-8 animate-fade-in">
          {/* Intro with Hand Wave */}
          <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl">
            <span className="font-bold">Hey!</span>
            <span className="animate-wave">👋</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-in -mt-2 sm:mt-0">
            I'm a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-navy-500 animate-pulse-slow">
              Programmer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl animate-slide-in -mt-2 sm:mt-0">
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
              href="https://linkedin.com/in/xeinshamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://facebook.com/XeinShamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://github.com/xeinshamim"
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
              href="mailto:admin@muhammadshamim.pro"
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
    </section>
  );
};

export default Hero;
