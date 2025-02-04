import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Notes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Notes</h1>
        <p className="text-muted-foreground">Coming soon...</p>
      </main>
      <Footer />
    </div>
  );
};

export default Notes;