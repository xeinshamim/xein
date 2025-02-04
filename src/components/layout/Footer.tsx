import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 py-8 glass">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                to="/notes"
                className="block hover:text-primary transition-colors"
              >
                Notes
              </Link>
              <Link
                to="/articles"
                className="block hover:text-primary transition-colors"
              >
                Articles
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link
                to="/privacy"
                className="block hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/imprint"
                className="block hover:text-primary transition-colors"
              >
                Imprint
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="block hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;