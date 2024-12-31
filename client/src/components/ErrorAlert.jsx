import { Loader2 } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import React from "react";

function ErrorAlert({ name, customMsg }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 w-[90%] md:w-[80%] mx-auto text-center bg-gray-950 p-4 max-w-[1064px] ">
      <Loader2 className="text-primary mb-3 animate-spin" size={40} />
    </div>
  );
}

export default ErrorAlert;
