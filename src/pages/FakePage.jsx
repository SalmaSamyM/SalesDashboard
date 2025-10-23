import React from "react";

export default function FakePage({ title }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center text-center lg:items-start lg:text-left">
      {/* Page title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
        This is a placeholder page for <strong>{title}</strong>. You can add your
        real content here.
      </p>

      {/* Placeholder box */}
      <div className="mt-6 w-full max-w-3xl border rounded-xl p-4 sm:p-6 bg-gray-50 text-gray-500 text-sm sm:text-base shadow-sm">
        Placeholder content for {title}.
      </div>
    </div>
  );
}
