import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Karan Gavhane
            </h3>
            <p className="text-gray-400 text-sm">
              Future Software Engineer | Mission: 50+ LPA
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/karangawane"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/karangawane"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="mailto:karan.gawane@example.com"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-gray-300" />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© 2026 Karan Gawane. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>and dedication.</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed for excellence | Coded with passion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
