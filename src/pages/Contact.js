import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      },
      () => alert("Failed to send message.")
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-slate-900 flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-slate-800 rounded-xl shadow-xl max-w-4xl w-full p-10 text-slate-200">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Contact Me</h1>
        <p className="text-center mb-8 text-slate-300">
          Reach out via social links or send a direct message below:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div className="space-y-6">
            <ContactLink
              label="LinkedIn"
              href="https://www.linkedin.com/in/kacper-agatowski-342607274/"
              color="bg-blue-600 hover:bg-blue-700"
              name="LinkedIn"
            />
            <ContactLink
              label="Discord"
              href="https://discordapp.com/users/kapper2967"
              color="bg-purple-600 hover:bg-purple-700"
              name="Discord"
            />
            <ContactLink
              label="GitHub"
              href="https://github.com/KacperA02"
              color="bg-gray-700 hover:bg-gray-800"
              name="GitHub"
            />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSend} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-slate-700 border border-slate-600 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full h-32 p-3 rounded-md bg-slate-700 border border-slate-600 placeholder-slate-400 text-slate-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

const ContactLink = ({ label, href, color, name }) => (
  <div className="flex flex-col items-start">
    <span className="font-semibold mb-2">{label}:</span>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-block px-5 py-2 rounded-md text-white font-medium transition-colors duration-200 ${color}`}
    >
      {name}
    </a>
  </div>
);

export default Contact;
