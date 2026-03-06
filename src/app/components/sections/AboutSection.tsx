import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Target, Code, Shield, TrendingUp, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Tech CSE",
    description: "2025–2029",
    color: "blue",
  },
  {
    icon: Code,
    title: "365 Day LeetCode",
    description: "Challenge in Progress",
    color: "purple",
  },
  {
    icon: Target,
    title: "DSA + Projects",
    description: "Building Real-world Skills",
    color: "pink",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Ethical Hacking & Learning",
    color: "cyan",
  },
  {
    icon: TrendingUp,
    title: "50+ LPA Goal",
    description: "Mission-Driven Mindset",
    color: "green",
  },
  {
    icon: Briefcase,
    title: "Side Income",
    description: "Freelancing & Projects",
    color: "orange",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm an ambitious computer science student with a{" "}
            <span className="text-blue-400 font-semibold">mission-driven mindset</span>, focused
            on mastering DSA, building real-world projects, and exploring cybersecurity. My goal
            is to land a{" "}
            <span className="text-purple-400 font-semibold">50+ LPA placement</span> at a top
            product-based company through consistent growth and discipline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  boxShadow: isInView
                    ? `0 0 30px rgba(${
                        item.color === "blue"
                          ? "59, 130, 246"
                          : item.color === "purple"
                          ? "168, 85, 247"
                          : item.color === "pink"
                          ? "236, 72, 153"
                          : item.color === "cyan"
                          ? "34, 211, 238"
                          : item.color === "green"
                          ? "34, 197, 94"
                          : "249, 115, 22"
                      }, 0.1)`
                    : "none",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    item.color === "blue"
                      ? "from-blue-500 to-blue-600"
                      : item.color === "purple"
                      ? "from-purple-500 to-purple-600"
                      : item.color === "pink"
                      ? "from-pink-500 to-pink-600"
                      : item.color === "cyan"
                      ? "from-cyan-500 to-cyan-600"
                      : item.color === "green"
                      ? "from-green-500 to-green-600"
                      : "from-orange-500 to-orange-600"
                  } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl bg-gradient-to-br ${
                    item.color === "blue"
                      ? "from-blue-500/20 to-blue-600/20"
                      : item.color === "purple"
                      ? "from-purple-500/20 to-purple-600/20"
                      : item.color === "pink"
                      ? "from-pink-500/20 to-pink-600/20"
                      : item.color === "cyan"
                      ? "from-cyan-500/20 to-cyan-600/20"
                      : item.color === "green"
                      ? "from-green-500/20 to-green-600/20"
                      : "from-orange-500/20 to-orange-600/20"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
