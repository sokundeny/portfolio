"use client";

import { Github, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-text-secondary-muted mt-32 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 ">

        {/* Left */}
        <p className="text-sm text-text-secondary">
          © 2026 Deny Sokun. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-text-secondary">

          <a
            href="https://github.com/sokundeny"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Github size={24} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sokundeny18@gmail.com"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            target="_blank"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://t.me/sokundeny"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Send size={24} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;