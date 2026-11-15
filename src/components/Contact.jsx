
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  MapPinned,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-white/15 bg-[#292B2E]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#C8CDD5]/70 focus:ring-2 focus:ring-[#C8CDD5]/15";

  const labelClass = "text-sm font-semibold text-white/90";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[linear-gradient(125deg,#292B2E_0%,#383B40_48%,#292B2E_100%)] px-5 py-24 md:px-10 lg:px-20"
    >
      {/* Metallic background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,225,232,0.12),transparent_55%)]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C8CDD5]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:55px_55px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-5 py-2 text-sm font-semibold text-[#DCE1E8] shadow-[0_0_25px_rgba(220,225,232,0.08)] backdrop-blur-xl">
            <Sparkles size={16} />
            GET IN TOUCH
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Let's Start a
            <span className="block bg-gradient-to-r from-[#F5F6F8] via-[#C8CDD5] to-[#929BA8] bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/65">
            Have a question about admissions or our school?
            Send us an enquiry using the form below.
          </p>
        </motion.div>

        {/* Contact information cards */}
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MapPin,
              title: "Our Address",
              detail: "Address information coming soon",
            },
            {
              icon: Phone,
              title: "Call Us",
              detail: "Phone number coming soon",
            },
            {
              icon: Mail,
              title: "Email Us",
              detail: "Email information coming soon",
            },
            {
              icon: Clock,
              title: "Office Hours",
              detail: "Timings will be updated soon",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.11] to-white/[0.035] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-[#DCE1E8]/50 hover:shadow-[0_15px_45px_rgba(220,225,232,0.12)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-[#DCE1E8]/20 to-white/5 text-[#DCE1E8] shadow-[0_0_22px_rgba(220,225,232,0.10)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(220,225,232,0.2)]">
                  <Icon size={22} />
                </div>

                <h3 className="font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Main content */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.045] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-10"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DCE1E8]/70 to-transparent" />

            <div className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-[#DCE1E8]/20 to-white/5 text-[#DCE1E8] shadow-[0_0_30px_rgba(220,225,232,0.12)]">
                <MessageCircle size={26} />
              </div>

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Send an Enquiry
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/55">
                Fill in your details and write your question.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className={labelClass}>
                  Your Name *
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10-digit number"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email (optional)"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Enquiry Subject *
                </label>
                <select
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a subject</option>
                  <option value="Admission Enquiry">
                    Admission Enquiry
                  </option>
                  <option value="General Information">
                    General Information
                  </option>
                  <option value="Academic Enquiry">
                    Academic Enquiry
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className={labelClass}>
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your enquiry here..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-[#555B64] via-[#737B87] to-[#454A52] px-7 py-4 font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(220,225,232,0.2)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Submit Enquiry</span>

                <Send
                  size={18}
                  className="relative transition-transform group-hover:translate-x-1"
                />
              </button>

              {submitted && (
                <div
                  role="status"
                  className="flex gap-3 rounded-xl border border-[#C8CDD5]/30 bg-white/[0.07] p-4 text-sm leading-6 text-white/90"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#DCE1E8]"
                  />
                  <p>
                    Basic validation successful. This is a demo
                    form; your enquiry has not been sent or saved.
                    Backend integration is required.
                  </p>
                </div>
              )}

            </form>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[500px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.11] to-white/[0.035] shadow-[0_25px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          >
            <div className="relative flex flex-1 items-center justify-center overflow-hidden p-8">

              {/* Decorative metallic map grid */}
              <div
                className="absolute inset-0 opacity-[0.16]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(220,225,232,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(220,225,232,0.8) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              <div className="absolute -left-20 top-20 h-64 w-64 rounded-full border border-[#DCE1E8]/15 shadow-[0_0_40px_rgba(220,225,232,0.05)]" />

              <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full border border-[#DCE1E8]/15 shadow-[0_0_40px_rgba(220,225,232,0.05)]" />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="relative z-10 max-w-sm text-center">

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#DCE1E8]/30 bg-gradient-to-br from-[#DCE1E8]/20 to-white/5 text-[#DCE1E8] shadow-[0_0_55px_rgba(220,225,232,0.15)] backdrop-blur-xl"
                >
                  <MapPinned size={45} />
                </motion.div>

                <h3 className="text-3xl font-bold text-white">
                  Find Our School
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  The verified school location will appear here
                  once the official map details are available.
                </p>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-5 py-3 text-sm font-medium text-[#DCE1E8] shadow-[0_0_25px_rgba(220,225,232,0.08)]">
                  <MapPin size={17} />
                  Location Coming Soon
                </div>

              </div>
            </div>

            <div className="border-t border-white/15 bg-[#292B2E]/80 p-7 backdrop-blur-xl">
              <h4 className="text-lg font-bold text-white">
                Sardar Patel Rashtriya Inter College
              </h4>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Official contact and location information
                will be updated here.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
