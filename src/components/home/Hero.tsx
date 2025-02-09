import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook, Mail, BookOpen } from "lucide-react";

// 3D Particle Background
const Particles = () => {
  const ref = useRef<any>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0008; // Slow rotation effect
    }
  });

  return (
    <group ref={ref}>
      <Points>
        <sphereGeometry args={[5, 64, 64]} />
        <PointMaterial color="cyan" size={0.04} transparent opacity={0.6} />
      </Points>
    </group>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Particles />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-8">
          {/* Intro */}
          <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl">
            <span className="font-bold">Hey!</span>
            <span className="animate-wave">👋</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            I'm a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-navy-500">
              Programmer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl">
            I do all the setup{" "}
            <span className="text-primary font-semibold">for you</span>.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to my spot on the web for writing, projects, tutorials, art, and anything else I want to put out there.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 pt-4">
            <a href="https://linkedin.com/in/xeinshamim" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="https://facebook.com/XeinShamim" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="https://github.com/xeinshamim" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="https://medium.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a href="mailto:admin@muhammadshamim.pro" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
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
