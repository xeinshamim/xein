
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "@/components/theme-provider";
import App from './App';
import './index.css';

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

createRoot(root).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
  </ThemeProvider>
);
