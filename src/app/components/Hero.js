"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Linkedin as LinkedinIcon, Code2, Database, Cloud, Workflow, Bot, Server, Layers } from "lucide-react";

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
      icon: Code2,
      cardTitle: "Development",
      cardSubtitle: "Full-Stack Solutions",
      floatingIcons: [
        { Icon: Database, position: "top-right" },
        { Icon: Server, position: "bottom-left" },
      ],
      accentColor: "var(--accent-9)",
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
      icon: Workflow,
      cardTitle: "Integration",
      cardSubtitle: "API Solutions",
      floatingIcons: [
        { Icon: Layers, position: "top-right" },
        { Icon: Cloud, position: "bottom-left" },
      ],
      accentColor: "#10b981",
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
      icon: Bot,
      cardTitle: "AI Solutions",
      cardSubtitle: "Intelligent Automation",
      floatingIcons: [
        { Icon: Bot, position: "top-right" },
        { Icon: Database, position: "bottom-left" },
      ],
      accentColor: "#ec4899",
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-square"
            >
              {/* World Map Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Rotating Globe Background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Globe Circle */}
                  <div 
                    className="w-80 h-80 rounded-full border-2 opacity-20"
                    style={{ 
                      borderColor: roles[currentRole].accentColor,
                      background: `radial-gradient(circle at 30% 30%, ${roles[currentRole].accentColor}15, transparent 70%)`
                    }}
                  >
                    {/* Latitude lines */}
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={`lat-${i}`}
                        className="absolute left-0 right-0 border-t opacity-10"
                        style={{
                          borderColor: roles[currentRole].accentColor,
                          top: `${20 + i * 15}%`,
                        }}
                      />
                    ))}
                    
                    {/* Longitude lines */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={`lon-${i}`}
                        className="absolute top-0 bottom-0 border-l opacity-10"
                        style={{
                          borderColor: roles[currentRole].accentColor,
                          left: `${10 + i * 15}%`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Connection Points on Map */}
                {[
                  { x: 45, y: 35, label: "North America" },
                  { x: 55, y: 45, label: "Europe" },
                  { x: 70, y: 50, label: "Asia" },
                  { x: 48, y: 65, label: "South America" },
                  { x: 65, y: 60, label: "Africa" },
                  { x: 80, y: 70, label: "Australia" },
                ].map((point, index) => (
                  <motion.div
                    key={point.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.15, type: "spring" }}
                    className="absolute"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                    }}
                  >
                    {/* Connection Point */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="relative"
                    >
                      {/* Outer ring */}
                      <div
                        className="absolute w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2"
                        style={{
                          border: `2px solid ${roles[currentRole].accentColor}`,
                          opacity: 0.3,
                        }}
                      />
                      {/* Inner dot */}
                      <div
                        className="w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                        style={{ backgroundColor: roles[currentRole].accentColor }}
                      />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Connecting Lines Between Points */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {[
                    { from: { x: 45, y: 35 }, to: { x: 55, y: 45 } },
                    { from: { x: 55, y: 45 }, to: { x: 70, y: 50 } },
                    { from: { x: 45, y: 35 }, to: { x: 48, y: 65 } },
                    { from: { x: 55, y: 45 }, to: { x: 65, y: 60 } },
                    { from: { x: 70, y: 50 }, to: { x: 80, y: 70 } },
                  ].map((line, index) => (
                    <motion.line
                      key={index}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      x1={`${line.from.x}%`}
                      y1={`${line.from.y}%`}
                      x2={`${line.to.x}%`}
                      y2={`${line.to.y}%`}
                      stroke={roles[currentRole].accentColor}
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  ))}
                </svg>

                {/* Central Info Card */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="relative z-10 bg-gradient-to-br from-[var(--gray-2)] to-[var(--gray-3)] rounded-2xl p-6 shadow-2xl border backdrop-blur-sm max-w-xs"
                  style={{ borderColor: roles[currentRole].accentColor }}
                >
                  {/* Glowing effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                    style={{ backgroundColor: roles[currentRole].accentColor }}
                  />

                  <div className="relative space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${roles[currentRole].accentColor}20` }}
                      >
                        {React.createElement(roles[currentRole].icon, {
                          size: 24,
                          style: { color: roles[currentRole].accentColor },
                        })}
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--gray-12)]">
                          {roles[currentRole].cardTitle}
                        </h3>
                        <p className="text-xs text-[var(--gray-10)]">
                          {roles[currentRole].cardSubtitle}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-2">
                      {roles[currentRole].metrics.slice(0, 3).map((metric, index) => (
                        <motion.div
                          key={metric}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="text-[var(--gray-11)]">{metric}</span>
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: roles[currentRole].accentColor }}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="pt-3 space-y-2 border-t border-[var(--gray-6)]">
                      <div className="flex justify-between text-xs">
                        <span className="text-[var(--gray-10)]">Global Reach</span>
                        <span className="font-semibold text-[var(--gray-12)]">6+ Regions</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[var(--gray-10)]">Active Projects</span>
                        <span className="font-semibold text-[var(--gray-12)]">24/7</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Orbiting Particles */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const radius = 180;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: roles[currentRole].accentColor }}
                      animate={{
                        x: [
                          Math.cos(angle) * radius,
                          Math.cos(angle + Math.PI) * radius,
                          Math.cos(angle) * radius,
                        ],
                        y: [
                          Math.sin(angle) * radius,
                          Math.sin(angle + Math.PI) * radius,
                          Math.sin(angle) * radius,
                        ],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear",
                      }}
                      style={{
                        left: "50%",
                        top: "50%",
                        filter: "blur(1px)",
                      }}
                    />
                  );
                })}

                {/* Floating Role Icons */}
                {roles[currentRole].floatingIcons.map((iconData, index) => {
                  const { Icon, position } = iconData;
                  const positionClasses =
                    position === "top-right"
                      ? "absolute -top-8 -right-8"
                      : "absolute -bottom-8 -left-8";

                  return (
                    <div key={index} className={positionClasses}>
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{
                          scale: 1,
                          rotate: 0,
                          y: position === "top-right" ? [0, -10, 0] : [0, 10, 0],
                        }}
                        transition={{
                          scale: { duration: 0.5 },
                          rotate: { duration: 0.5 },
                          y: {
                            duration: position === "top-right" ? 3 : 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="p-3 bg-[var(--gray-2)] rounded-xl shadow-xl border border-[var(--gray-6)]"
                      >
                        <Icon size={20} style={{ color: roles[currentRole].accentColor }} />
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
