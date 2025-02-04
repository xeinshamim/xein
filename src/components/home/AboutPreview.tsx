import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-muted-foreground mb-8">
          I'm a passionate developer with expertise in modern web technologies.
          I love building fast, responsive, and user-friendly applications that
          solve real-world problems.
        </p>
        <Link to="/about">
          <Button size="lg">Learn More About Me</Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;