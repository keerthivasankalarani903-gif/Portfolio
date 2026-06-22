"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:keerthivasankalarani903@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "keerthivasankalarani903@gmail.com",
      href: "mailto:keerthivasankalarani903@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91 8056455767",
      href: "tel:+918056455767",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Thanjavur, Tamil Nadu",
      href: null,
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "keerthivasan-kalarani-freelancer",
      href: "https://www.linkedin.com/in/keerthivasan-kalarani-freelancer",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative scroll-mt-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[600px] h-[400px] bg-[var(--accent-4)] opacity-20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto">

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
              Let&apos;s Work Together
            </span>
            <span className="absolute left-0 -bottom-2 w-full h-2 bg-[var(--accent-5)] blur-xl opacity-60 rounded-full" />
          </h2>
          <p className="text-[var(--gray-11)] mt-6 max-w-lg mx-auto text-sm leading-relaxed">
            Open to freelance projects, collaborations, and full-time opportunities.
            Let&apos;s build something impactful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-6 text-[var(--gray-12)]">
              Contact Information
            </h3>

            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--gray-2)]/60 backdrop-blur-xl border border-[var(--gray-6)]/40 hover:border-[var(--accent-7)] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-3)] flex items-center justify-center text-[var(--accent-9)] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-[var(--gray-10)] mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--gray-12)] hover:text-[var(--accent-9)] transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--gray-12)]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[var(--gray-2)]/60 backdrop-blur-xl border border-[var(--gray-6)]/40 rounded-2xl p-8 shadow-xl space-y-5"
          >
            <h3 className="text-lg font-semibold text-[var(--gray-12)] mb-2">
              Send a Message
            </h3>

            <div>
              <label className="text-xs text-[var(--gray-10)] mb-1.5 block">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--gray-3)]/60 border border-[var(--gray-6)]/40 text-[var(--gray-12)] placeholder:text-[var(--gray-9)] text-sm focus:outline-none focus:border-[var(--accent-7)] transition"
              />
            </div>

            <div>
              <label className="text-xs text-[var(--gray-10)] mb-1.5 block">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--gray-3)]/60 border border-[var(--gray-6)]/40 text-[var(--gray-12)] placeholder:text-[var(--gray-9)] text-sm focus:outline-none focus:border-[var(--accent-7)] transition"
              />
            </div>

            <div>
              <label className="text-xs text-[var(--gray-10)] mb-1.5 block">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[var(--gray-3)]/60 border border-[var(--gray-6)]/40 text-[var(--gray-12)] placeholder:text-[var(--gray-9)] text-sm focus:outline-none focus:border-[var(--accent-7)] transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent-9)] text-[var(--accent-contrast)] font-semibold text-sm hover:bg-[var(--accent-10)] transition"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
