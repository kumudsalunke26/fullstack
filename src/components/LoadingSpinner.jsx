// LoadingSpinner.jsx
import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="animate-spin text-blue-500" size={48} />
    </div>
  );
};

export default LoadingSpinner;
