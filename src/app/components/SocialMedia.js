"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Social() {
  const links = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={16} />,
      url: "https://www.linkedin.com/in/keerthivasan-kalarani-freelancer",
    },
    {
      name: "GitHub",
      icon: <Github size={16} />,
      url: "https://github.com/keerthivasankalarani903-gif",
    },
    {
      name: "Email",
      icon: <Mail size={16} />,
      url: "mailto:keerthivasan903@gmail.com",
    },
  ];

  return (
    <footer className="py-10 border-t border-[var(--gray-6)]/30">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Brand */}
        <p className="text-sm font-semibold text-[var(--accent-9)] tracking-wide">
          KV — Keerthivasan S
        </p>

        {/* Social Icons */}
        <div className="flex gap-3">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl bg-[var(--gray-2)]/60 border border-[var(--gray-6)]/40 flex items-center justify-center text-[var(--gray-11)] hover:bg-[var(--accent-9)] hover:text-[var(--accent-contrast)] hover:border-[var(--accent-9)] transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--gray-10)]">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
}
