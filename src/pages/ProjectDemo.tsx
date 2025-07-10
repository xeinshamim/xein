import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EcommerceDemo from "@/components/demos/EcommerceDemo";
import TaskManagerDemo from "@/components/demos/TaskManagerDemo";
import WeatherDemo from "@/components/demos/WeatherDemo";
import AnalyticsDemo from "@/components/demos/AnalyticsDemo";
import SocialDashboardDemo from "@/components/demos/SocialDashboardDemo";
import ExpenseTrackerDemo from "@/components/demos/ExpenseTrackerDemo";

const ProjectDemo = () => {
  const { demoType } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderDemo = () => {
    switch (demoType) {
      case "ecommerce":
        return <EcommerceDemo />;
      case "task-manager":
        return <TaskManagerDemo />;
      case "weather":
        return <WeatherDemo />;
      case "analytics":
        return <AnalyticsDemo />;
      case "social-dashboard":
        return <SocialDashboardDemo />;
      case "expense-tracker":
        return <ExpenseTrackerDemo />;
      default:
        return <Navigate to="/projects" replace />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {renderDemo()}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDemo;