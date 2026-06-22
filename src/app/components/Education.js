"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "SASTRA Deemed University",
      year: "2023 – 2025",
      score: "CGPA: 8.58",
      points: [
        "Developed full-stack SaaS applications using MERN stack with API integrations.",
        "Worked on CRM automation, database optimization, and scalable backend architecture.",
      ],
    },
    {
      degree: "B.Sc Mathematics with Computer Applications",
      college: "SASTRA Deemed University",
      year: "2020 – 2023",
      score: "CGPA: 7.33",
      points: [
        "Built strong foundation in data structures, algorithms, and mathematical problem solving.",
        "Gained practical experience in programming, database management, and web technologies.",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 relative scroll-mt-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[500px] h-[400px] bg-[var(--accent-4)] opacity-15 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
            <span className="bg-gradient-to-r from-[var(--accent-9)] to-[var(--accent-6)] bg-clip-text text-transparent">
              Education
            </span>
            <span className="absolute left-0 -bottom-2 w-full h-2 bg-[var(--accent-5)] blur-xl opacity-60 rounded-full" />
          </h2>
          <p className="text-[var(--gray-11)] mt-6 max-w-lg mx-auto text-sm leading-relaxed">
            Academic foundation that shaped my technical expertise and problem-solving mindset.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">

          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--gray-6)]/40 hidden md:block" />

          {educationList.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full bg-[var(--accent-9)] border-4 border-[var(--gray-1)] hidden md:flex items-center justify-center -translate-x-1/2">
              </div>

              <div className="bg-[var(--gray-2)]/60 backdrop-blur-xl border border-[var(--gray-6)]/40 rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:border-[var(--accent-7)] transition-all duration-300">

                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent-3)] flex items-center justify-center text-[var(--accent-9)] shrink-0 mt-0.5">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--gray-12)] leading-snug">
                        {item.degree}
                      </h3>
                      <p className="text-sm text-[var(--gray-11)] mt-0.5">
                        {item.college}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--gray-10)]">
                      <Calendar size={13} />
                      {item.year}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-9)]">
                      <Award size={13} />
                      {item.score}
                    </div>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[var(--gray-11)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-9)] mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
