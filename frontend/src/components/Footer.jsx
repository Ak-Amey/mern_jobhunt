import React from 'react'
import { Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-sm py-4 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Text */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} JOBHUNT. All rights reserved.
        </p>

        {/* Right: Links + Icons */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="/jobs" className="hover:text-white">Jobs</a>
          <a href="/companies" className="hover:text-white">Companies</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="#" className="hover:text-white" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href="#" className="hover:text-white" aria-label="Twitter">
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
