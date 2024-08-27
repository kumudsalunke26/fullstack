import { AlertTriangle } from "lucide-react";
import React from "react";

function ErrorAlert({ name, customMsg }) {
  return (
    <div className="flex flex-col items-center justify-center mt-10 w-[90%] md:w-[80%] mx-auto text-center bg-gray-950 p-4 max-w-[1064px] ">
      <AlertTriangle className="text-red-500 mb-3" size={40} />
      <h1 className="text-xl font-semibold text-gray-500">
        {customMsg ? customMsg : `Oops! ${name} not found. Please try again.`}
      </h1>
    </div>
  );
}

export default ErrorAlert;
