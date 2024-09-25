"use client"
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="grid grid-cols-7 grid-rows-1 gap-4">
        {/* Logo */}
        <div className="col-span-2 flex items-center">
          <a href="/" className="text-white text-xl font-bold">
            <img src="/path-to-your-logo.png" alt="Logo" className="w-24" />
          </a>
        </div>

        {/* Links de navegación */}
        <ul className="col-span-3 col-start-3 hidden lg:flex justify-center items-center space-x-8 text-white">
          <li><a href="/home" className="hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/services" className="hover:text-gray-400">Services</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Acciones */}
        <div className="col-span-2 col-start-6 flex justify-end items-center space-x-4 text-white">
          <a href="/login" className="hover:text-gray-400">Login</a>
          <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</a>

          {/* Menú móvil */}
          <div className="lg:hidden">
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              {/* Icono del menú con transformación */}
              <div className={`transform transition-transform duration-300 ease-in-out ${menuOpen ? "rotate-45" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${menuOpen ? "hidden" : "block"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${menuOpen ? "block" : "hidden"} transition-all duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para móvil con animación suave */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-white mt-4">
          <li><a href="/home" className="hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/services" className="hover:text-gray-400">Services</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
