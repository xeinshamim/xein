import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 alignment-center">About Me</h1>
        <p className="text-xl font-bold mb-12 alignment-center">Hi, I’m Shamim! I’m a cybersecurity enthusiast, software engineering student, and web developer passionate about crafting secure and innovative digital solutions. I've been exploring the tech world since my teens and hold certifications like CEH and Security+ and am currently pursuing a bachelor degree in software engineering to further enhance my skills. When I'm not working on code or exploring vulnerabilities, I enjoy writing as a creative outlet and uncovering fascinating patterns in random data. Fun fact: I have a unique fascination with aviation-style number patterns—it keeps my curiosity alive and sparks new ideas! 

Welcome to my spot on the web for writing, projects, tutorials, art, and anything else I want to put out there. On the site, you'll find my notes and all the technical articles I've written over the years. Check out the projects page to see a highlight of my open-source work.

My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My motivation for the site is to have a space for self-expression and to share what I've learned with the world. I hope I will inspire others to make their own creative corner on the web in the uphill battle against the enshittification of the internet.

Sign up for the newsletter for updates!
Before you decide, I'd really appreciate it if you could take a look at my portfolio before you make your choice. 
</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
