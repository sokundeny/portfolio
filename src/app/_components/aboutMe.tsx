"use client"

import Image from "next/image";
import profile from "@/assets/profile.png"
import { Facebook, Instagram, Send ,Github} from "lucide-react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="flex items-start justify-center gap-14 flex-col w-full my-63">
      <div className="text-6xl font-medium text-text-secondary">
        About Me
      </div>

      <div className="w-full flex gap-24">
        <div className="w-100 shrink-0">
          <motion.div 
            className="h-120 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={profile}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="text-4xl text-white ">Hi! I am Sokun Deny</h1>

          <p className="text-xl text-text-secondary-muted leading-8 text-balance">
            I’m currently third year student at CADT in computer science specialize
            in software engineering. Throughout my academic journey, I have
            completed multiple practical projects, including course project and
            capstone projects, which have strengthened my skills in problem
            solving, programming, and software development.
          </p>

          <div className="text-xl text-text-secondary-muted leading-8 text-balance">
            <p className="mb-2"> TEL: +855 718 358 513</p>
            <p> Email: sokundeny18@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-text-secondary">
            <a href="https://www.facebook.com/deny.sokun" target="_blank">
              <Facebook size={42} className="hover:text-primary transition" />
            </a>

            <a href="https://www.instagram.com/sokun_deny/" target="_blank">
              <Instagram size={42} className="hover:text-primary transition" />
            </a>

            <a href="https://t.me/sokundeny" target="_blank">
              <Send size={42} className="hover:text-primary transition" />
            </a>
            <a href="https://github.com/sokundeny" target="_blank">
              <Github size={42} className="hover:text-primary transition" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;