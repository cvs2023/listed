import React from "react";

export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Error 404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page not found</p>
        <p className="text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
