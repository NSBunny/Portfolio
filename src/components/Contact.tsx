"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "28694fa9-b078-4fcd-9589-2b7cd23fa428",
          name: name,
          email: email,
          message: message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="mb-24 scroll-mt-24 lg:mb-48"
      aria-label="Contact me"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side: Form */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4 group/title">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              Available for new opportunities
            </span>
            <h2 className="text-6xl font-serif font-black text-white transition-all duration-700 group-hover/title:tracking-[0.1em] cursor-default">
              Let's talk
            </h2>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-sm">
              I'm always looking for conversations with people building at the
              frontier — whether it's AI, Data Science, or product ship.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 relative">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white text-slate-900 border border-white/10 focus:ring-2 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white text-slate-900 border border-white/10 focus:ring-2 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-400"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white text-slate-900 border border-white/10 focus:ring-2 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-400 resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group shadow-lg shadow-cyan-900/20"
              >
                Send Message
                <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center p-8 rounded-xl border border-cyan-500/50 z-20"
                >
                  <div className="text-center space-y-4">
                    <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-white">
                        Message Sent!
                      </h4>
                      <p className="text-slate-300 italic font-light">
                        "Thank you for reaching out! I appreciate your message
                        and will get back to you as soon as possible. Looking
                        forward to connecting!"
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-cyan-400 text-sm font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Right Side: Contact Grid */}
        <div className="grid grid-cols-1 gap-4 h-fit">
          {[
            {
              label: "EMAIL",
              value: "nsbanidhar@gmail.com",
              href: "mailto:nsbanidhar@gmail.com",
              icon: Mail,
            },
            {
              label: "LINKEDIN",
              value: "linkedin.com/in/g-banidhar-0a5046247/",
              href: "https://linkedin.com/in/g-banidhar-0a5046247/",
              icon: Linkedin,
            },
            {
              label: "GITHUB",
              value: "github.com/NSBunny",
              href: "https://github.com/NSBunny",
              icon: Github,
            },
            {
              label: "LOCATION",
              value: "Hyderabad, Telangana, India",
              href: "#",
              icon: MapPin,
            },
          ].map((item, _i) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href !== "#" ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">
                  {item.label}
                </span>
                <item.icon className="h-4 w-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div className="text-lg font-medium text-slate-100 truncate">
                {item.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
