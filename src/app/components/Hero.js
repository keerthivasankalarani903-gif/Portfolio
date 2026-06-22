"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin, Code, Database, Cloud, Zap } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────
   PROFESSIONAL LOADING ANIMATION COMPONENT
   ───────────────────────────────────────────────────────────────────── */

function TechLoadingAnimation({ metrics }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    }, 100);

    const metricInterval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % metrics.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(metricInterval);
    };
  }, [metrics.length]);

  const techIcons = [
    { icon: Code, color: "#61dafb", label: "Frontend" },
    { icon: Database, color: "#47a248", label: "Backend" },
    { icon: Cloud, color: "#3b82f6", label: "Cloud" },
    { icon: Zap, color: "#f59e0b", label: "APIs" }
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main Loading Circle */}
      <div className="relative w-64 h-64 mx-auto">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[var(--gray-6)] opacity-20"></div>
        
        {/* Progress Ring */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="var(--accent-9)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${loadingProgress * 2.83} 283`}
            className="transition-all duration-300 ease-out drop-shadow-lg"
            style={{
              filter: `drop-shadow(0 0 8px var(--accent-9))`
            }}
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--accent-9)] mb-2">
              {Math.round(loadingProgress)}%
            </div>
            <div className="text-sm text-[var(--gray-11)] font-medium">
              Loading Skills
            </div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        {techIcons.map((tech, index) => {
          const angle = (index / techIcons.length) * 2 * Math.PI;
          const radius = 100;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={tech.label}
              className="absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
                backgroundColor: `${tech.color}20`,
                border: `2px solid ${tech.color}40`
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, delay: index * 0.5 }
              }}
            >
              <tech.icon 
                size={20} 
                style={{ color: tech.color }}
                className="drop-shadow-sm"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Current Metric Display */}
      <motion.div
        key={currentMetric}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--gray-3)] border border-[var(--gray-6)] shadow-lg">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-9)] animate-pulse"></div>
          <span className="text-[var(--gray-11)] font-medium">
            {metrics[currentMetric]}
          </span>
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--accent-9)] rounded-full opacity-60"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Main Hero Component ────────────────────────────────────────────── */
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
        "Security Hardened",
        "Microservices Active",
        "Cache Performance: 95%",
        "CI/CD Pipeline Live",
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
        "Webhook Reliability: 100%",
        "Workflow Optimization",
        "Rate Limiting: Optimized",
        "Multi-Tenant Ready",
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
        "Decision Engine: Active",
        "Efficiency Gain: 60%",
        "API Orchestration",
        "Real-time Processing",
        "Neural Networks: Stable",
      ],
    },
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 6000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-8 pt-24 relative overflow-hidden">
      
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gray-1)] via-[var(--gray-2)] to-[var(--gray-3)] opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-4)] opacity-10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent-6)] opacity-8 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE - Content */}
        <motion.div 
          className="text-left space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[var(--accent-3)] border border-[var(--accent-6)] text-[var(--accent-9)] text-sm font-medium shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-2 h-2 rounded-full bg-[var(--accent-9)] animate-pulse shadow-sm" />
            Available for Enterprise Projects
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              className="text-6xl lg:text-7xl font-black leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Keerthivasan{" "}
              <span className="text-[var(--accent-9)] relative">
                S
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--accent-9)] opacity-30 blur-sm" />
              </span>
            </motion.h1>
            <motion.div 
              className="text-lg text-[var(--gray-11)] font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Senior Full-Stack Developer & Integration Specialist
            </motion.div>
          </div>

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
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-[var(--gray-10)] font-medium">
              Specialized in React, Node.js, MongoDB, Enterprise APIs, Cloud Architecture, and AI Integration
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-[var(--accent-9)] text-[var(--accent-contrast)] font-semibold hover:bg-[var(--accent-10)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/keerthivasan-kalarani-freelancer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-[var(--gray-6)] hover:border-[var(--accent-7)] hover:bg-[var(--gray-3)] transition-all duration-300 flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:keerthivasankalarani903@gmail.com"
                className="px-8 py-4 rounded-xl border-2 border-[var(--gray-6)] hover:border-[var(--accent-7)] hover:bg-[var(--gray-3)] transition-all duration-300 flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Email
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Professional Loading Animation */}
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRole}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <TechLoadingAnimation metrics={roles[currentRole].metrics} />
            </motion.div>
          </AnimatePresence>

          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-4)] to-[var(--accent-6)] opacity-5 blur-3xl rounded-full animate-pulse" />
        </motion.div>

      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--accent-9)] rounded-full opacity-20"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0.2, 0.05, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}