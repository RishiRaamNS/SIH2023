"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
export default function RootLayout({ children }) {
   useEffect(() => {
     require("bootstrap/dist/js/bootstrap.bundle.min.js");
   }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
