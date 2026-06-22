"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin as LinkedinIcon, Code2, Database, Cloud } from "lucide-react";

export default function Hero() {
  const roles = [
    {
      title: "FullStack Developer",
      description: (
        <>
          I architect and develop enterprise-grade web applications using the{" "}
          <span className="text-[var(--accent-9)] font-semibold">MERN stack</span>. From
          scalable microservices to responsive interfaces, I deliver{" "}
          <span className="text-[var(--accent-9)] font-semibold">production-ready solutions</span>{" "}
          that drive real business growth and user engagement.
        </>
      ),
      metrics: [
        "API Response: 118ms",
        "System Uptime: 99.99%",
        "Active Users: 1.4k+",
        "Database Optimized",
      ],
    },
    {
      title: "Integration Specialist",
      description: (
        <>
          I design seamless{" "}
          <span className="text-[var(--accent-9)] font-semibold">API integrations</span>{" "}
          between WooCommerce, Shopify, and enterprise CRM systems. My solutions
          automate complex workflows, ensure data consistency, and{" "}
          <span className="text-[var(--accent-9)] font-semibold">reduce operational overhead</span>{" "}
          by up to 60%.
        </>
      ),
      metrics: [
        "WooCommerce: Connected",
        "Shopify: Synchronized",
        "HubSpot: Automated",
        "Data Accuracy: 99.2%",
      ],
    },
    {
      title: "AI Solutions Architect",
      description: (
        <>
          I develop{" "}
          <span className="text-[var(--accent-9)] font-semibold">
            intelligent automation systems
          </span>{" "}
          that transform manual processes into smart, self-learning workflows.
          My AI implementations reduce human effort while improving accuracy and
          decision-making across business operations.
        </>
      ),
      metrics: [
        "ML Models: Deployed",
        "Automation: 96% Accuracy",
        "Process Intelligence",
        "Efficiency Gain: 60%",
      ],
    },
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-8 pt-24 relative overflow-hidden">
      
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gray-1)] via-[var(--gray-2)] to-[var(--gray-3)] opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-4)] opacity-10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent-6)] opacity-8 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE - Content */}
        <div className="text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--accent-3)] border border-[var(--accent-6)] text-[var(--accent-9)] text-sm font-medium shadow-lg"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--accent-9)] animate-pulse shadow-sm" />
            Available for Enterprise Projects
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Keerthivasan{" "}
              <span className="text-[var(--accent-9)] relative">
                S
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--accent-9)] opacity-30 blur-sm" />
              </span>
            </h1>
            <div className="text-lg text-[var(--gray-11)] font-medium">
              Senior Full-Stack Developer & Integration Specialist
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="min-h-[180px] space-y-6"
            >
              <h2 className="text-3xl font-bold text-[var(--accent-10)] leading-tight">
                {roles[currentRole].title}
              </h2>
              <p className="text-[var(--gray-11)] leading-relaxed text-lg max-w-2xl">
                {roles[currentRole].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-[var(--gray-10)] font-medium">
              Specialized in React, Node.js, MongoDB, Enterprise APIs, Cloud Architecture, and AI Integration
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-[var(--accent-9)] text-[var(--accent-contrast)] font-semibold hover:bg-[var(--accent-10)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start a Project
              </a>
              <a
                href="https://www.linkedin.com/in/keerthivasan-kalarani-freelancer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-[var(--gray-6)] hover:border-[var(--accent-7)] hover:bg-[var(--gray-3)] transition-all duration-300 flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <LinkedinIcon size={20} />
                LinkedIn
              </a>
              <a
                href="mailto:keerthivasankalarani903@gmail.com"
                className="px-8 py-4 rounded-xl border-2 border-[var(--gray-6)] hover:border-[var(--accent-7)] hover:bg-[var(--gray-3)] transition-all duration-300 flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Mail size={20} />
                Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Visual Elements */}
        <div className="relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-md"
            >
              {/* Animated Card Stack */}
              <div className="relative space-y-4">
                {/* Main Card */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="relative bg-gradient-to-br from-[var(--gray-3)] to-[var(--gray-2)] rounded-2xl p-8 shadow-2xl border border-[var(--gray-6)] overflow-hidden"
                >
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-9)] to-[var(--accent-7)] opacity-20 blur-xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[var(--accent-3)] rounded-lg">
                        <Code2 className="text-[var(--accent-9)]" size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--gray-12)]">Development</h3>
                        <p className="text-sm text-[var(--gray-10)]">Full-Stack Solutions</p>
                      </div>
                    </div>

                    {/* Metrics Display */}
                    <div className="space-y-3">
                      {roles[currentRole].metrics.map((metric, index) => (
                        <motion.div
                          key={metric}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-3 bg-[var(--gray-4)] rounded-lg border border-[var(--gray-6)]"
                        >
                          <span className="text-sm text-[var(--gray-11)]">{metric}</span>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                            className="w-2 h-2 bg-green-500 rounded-full"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-3 pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-[var(--gray-10)]">
                          <span>Performance</span>
                          <span>98%</span>
                        </div>
                        <div className="h-2 bg-[var(--gray-5)] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "98%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[var(--accent-9)] to-[var(--accent-7)]"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-[var(--gray-10)]">
                          <span>Reliability</span>
                          <span>99.9%</span>
                        </div>
                        <div className="h-2 bg-[var(--gray-5)] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "99.9%" }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4">
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="p-4 bg-[var(--gray-2)] rounded-xl shadow-xl border border-[var(--gray-6)]"
                  >
                    <Database className="text-[var(--accent-9)]" size={24} />
                  </motion.div>
                </div>

                <div className="absolute -bottom-4 -left-4">
                  <motion.div
                    animate={{ 
                      y: [0, 15, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                    className="p-4 bg-[var(--gray-2)] rounded-xl shadow-xl border border-[var(--gray-6)]"
                  >
                    <Cloud className="text-[var(--accent-9)]" size={24} />
                  </motion.div>
                </div>

                {/* Orbiting Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[var(--accent-9)] rounded-full"
                    animate={{
                      x: [0, 100, 0, -100, 0],
                      y: [0, -100, 0, 100, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: i * 2.6,
                      ease: "linear"
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      filter: "blur(1px)"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
