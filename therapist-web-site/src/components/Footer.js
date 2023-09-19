import React from "react";

export const Footer = () => {
  return (
    <div className="h-10 bg-brown-50 mb-0 pl-5">
      <p className="text-brown-100">
        Copyright © {new Date().getFullYear()} Davy d'HUISSIER
      </p>
    </div>
  );
};
