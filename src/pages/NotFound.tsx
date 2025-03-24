
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Transition from "../components/Transition";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Transition>
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-cream-50">
        <div className="text-center px-6">
          <div className="inline-block mb-8">
            <div className="text-9xl font-bold text-honey-400">404</div>
          </div>
          <h1 className="text-4xl font-bold text-honey-900 mb-4">Page Not Found</h1>
          <p className="text-honey-700/80 max-w-md mx-auto mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-honey-500 hover:bg-honey-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
          >
            <Home className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    </Transition>
  );
};

export default NotFound;
