
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  User,
  BookOpen,
  Send,
  CheckCircle2,
  Sparkles,
  HeartPulse,
  MapPin,
  Users,
  Ruler,
  Weight,
  ShieldCheck,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const initialFormData = {
  studentCategory: "New Student",
  studentName: "",
  dob: "",
  aadhaar: "",
  className: "",
  medium: "",
  gender: "",
  bloodGroup: "",
  height: "",
  weight: "",
  stream: "",
  scienceSubject: "",
  previousSchool: "",
  fatherName: "",
  fatherOccupation: "",
  fatherPhone: "",
  motherName: "",
  motherOccupation: "",
  motherPhone: "",
  annualIncome: "",
  siblingsInSchool: "",
  phone: "",
  alternatePhone: "",
  email: "",
  villageCity: "",
  district: "",
  state: "",
  pinCode: "",
  address: "",
};

const streams = {
  Science: ["Biology", "Mathematics"],
  Commerce: [
    "Accountancy",
    "Business Studies",
    "Economics",
    "English",
  ],
  Arts: [
    "History",
    "Political Science",
    "Geography",
    "English",
  ],
};

const occupations = [
  "Government Employee",
  "Private Employee",
  "Business",
  "Farmer",
  "Self Employed",
  "Daily Wage Worker",
  "Teacher",
  "Doctor",
  "Engineer",
  "Other",
];

const inputClass =
  "mt-2 w-full rounded-xl border border-gray-200 bg-[#FAF9F7] px-4 py-3.5 text-sm text-[#292929] outline-none transition placeholder:text-gray-400 focus:border-[#B94A4A] focus:ring-2 focus:ring-[#B94A4A]/20";

const labelClass = "text-sm font-semibold text-[#292929]";

function Field({ label, children, className = "" }) {
  return (
    <div className={className}>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-[#292929]">
      <Icon size={23} className="text-[#B94A4A]" />
      {children}
    </h3>
  );
}

export default function Admission() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [showAll, setShowAll] = useState(false);

  const isSeniorClass = ["XI", "XII"].includes(formData.className);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => {
      const updated = {
        ...previous,
        [name]: value,
      };

      if (
        name === "className" &&
        !["XI", "XII"].includes(value)
      ) {
        updated.stream = "";
        updated.scienceSubject = "";
      }

      if (name === "stream") {
        updated.scienceSubject = "";
      }

      return updated;
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isNewStudent =
    formData.studentCategory === "New Student";

  return (
    <section
      id="admission"
      className="relative overflow-hidden bg-[#F0EFED] px-5 py-24 text-[#292929] md:px-10 lg:px-20"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B94A4A]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#E8E3DC]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B94A4A]/20 bg-[#B94A4A]/5 px-5 py-2 text-sm font-semibold text-[#B94A4A]">
            <Sparkles size={16} />
            ADMISSIONS
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#292929] md:text-6xl">
            Begin Your
            <span className="block text-[#B94A4A]">
              Learning Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            Complete the student and family information form
            to begin your admission enquiry.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.5fr]">
          {/* LEFT INFORMATION PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-[#E8E3DC] bg-white p-8 shadow-[0_15px_45px_rgba(41,41,41,0.07)] md:p-10"
          >
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#B94A4A]/10" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#B94A4A]/10" />

            <div className="relative">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#B94A4A]/15 bg-[#B94A4A]/5 text-[#B94A4A]">
                <GraduationCap size={34} />
              </div>

              <h3 className="text-3xl font-bold leading-snug">
                Admission
                <span className="block text-[#B94A4A]">
                  Enquiry
                </span>
              </h3>

              <p className="mt-5 leading-7 text-gray-600">
                Take the first step towards your educational
                journey at Sardar Patel Rashtriya Inter College.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Classes",
                    value: "VI – XII",
                  },
                  {
                    icon: GraduationCap,
                    title: "Medium",
                    value: "Hindi & English",
                  },
                  {
                    icon: Users,
                    title: "Student Category",
                    value: "New & Existing",
                  },
                  {
                    icon: HeartPulse,
                    title: "Student Details",
                    value: "Personal Information",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center gap-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-[#FAF9F7] text-[#B94A4A]">
                        <Icon size={21} />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">
                          {item.title}
                        </p>
                        <p className="font-semibold">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 rounded-2xl border border-[#B94A4A]/15 bg-[#FBF5F3] p-5">
                <p className="text-sm leading-7 text-gray-600">
                  Please provide accurate information. All details
                  will need to be verified by the school before
                  admission is confirmed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-[#E8E3DC] bg-white p-6 shadow-[0_15px_45px_rgba(41,41,41,0.07)] md:p-10"
          >
            {/* COLLAPSIBLE FORM */}
            <div
              className={`relative transition-[max-height] duration-700 ease-in-out ${
                showAll
                  ? "max-h-[10000px]"
                  : "max-h-[720px] overflow-hidden"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-9">

                {/* STUDENT CATEGORY */}
                <div>
                  <SectionHeading icon={Users}>
                    Student Category
                  </SectionHeading>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {["New Student", "Existing Student"].map(
                      (category) => {
                        const active =
                          formData.studentCategory === category;

                        return (
                          <button
                            type="button"
                            key={category}
                            onClick={() => {
                              setFormData((previous) => ({
                                ...previous,
                                studentCategory: category,
                                previousSchool:
                                  category === "Existing Student"
                                    ? ""
                                    : previous.previousSchool,
                              }));
                              setSubmitted(false);
                            }}
                            aria-pressed={active}
                            className={`rounded-xl border p-5 text-left transition-all duration-300 ${
                              active
                                ? "border-[#B94A4A] bg-[#FBF5F3] shadow-[0_5px_20px_rgba(185,74,74,0.08)]"
                                : "border-gray-200 bg-[#FAF9F7] hover:border-[#B94A4A]/40"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold">
                                {category}
                              </span>

                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                  active
                                    ? "border-[#B94A4A] bg-[#B94A4A]"
                                    : "border-gray-300"
                                }`}
                              >
                                {active && (
                                  <span className="h-2 w-2 rounded-full bg-white" />
                                )}
                              </span>
                            </div>

                            <p className="mt-2 text-xs leading-5 text-gray-500">
                              {category === "New Student"
                                ? "Applying to this school for the first time."
                                : "Already studying at this school."}
                            </p>
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>

                {/* STUDENT INFORMATION */}
                <div className="border-t border-gray-200 pt-8">
                  <SectionHeading icon={User}>
                    Student Information
                  </SectionHeading>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Student Full Name *">
                      <input
                        required
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter student name"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Date of Birth *">
                      <input
                        required
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Aadhaar Number (Optional)">
                      <input
                        type="text"
                        inputMode="numeric"
                        name="aadhaar"
                        value={formData.aadhaar}
                        onChange={handleChange}
                        pattern="[0-9]{12}"
                        maxLength={12}
                        placeholder="Enter 12-digit Aadhaar number"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Gender *">
                      <select
                        required
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </Field>

                    <Field label="Blood Group">
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select blood group</option>
                        {[
                          "A+",
                          "A-",
                          "B+",
                          "B-",
                          "AB+",
                          "AB-",
                          "O+",
                          "O-",
                          "Unknown",
                        ].map((group) => (
                          <option key={group} value={group}>
                            {group}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Height (cm)">
                      <input
                        type="number"
                        min="1"
                        max="250"
                        step="0.1"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        placeholder="e.g. 150"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Weight (kg)">
                      <input
                        type="number"
                        min="1"
                        max="250"
                        step="0.1"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        placeholder="e.g. 45"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Applying for Class *">
                      <select
                        required
                        name="className"
                        value={formData.className}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select class</option>
                        {["VI", "VII", "VIII", "IX", "X", "XI", "XII"].map(
                          (item) => (
                            <option key={item} value={item}>
                              Class {item}
                            </option>
                          )
                        )}
                      </select>
                    </Field>

                    <Field label="Preferred Medium *">
                      <select
                        required
                        name="medium"
                        value={formData.medium}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select medium</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                      </select>
                    </Field>

                    <AnimatePresence>
                      {isNewStudent && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden md:col-span-2"
                        >
                          <Field label="Previous School">
                            <input
                              name="previousSchool"
                              value={formData.previousSchool}
                              onChange={handleChange}
                              placeholder="Enter previous school name"
                              className={inputClass}
                            />
                          </Field>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-gray-400">
                    <ShieldCheck size={16} className="mt-0.5 shrink-0" />
                    Aadhaar is optional. Avoid collecting or sharing
                    Aadhaar details unless the school genuinely needs
                    them and can protect them securely.
                  </p>
                </div>

                {/* STREAM SELECTION */}
                <AnimatePresence>
                  {isSeniorClass && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="border-t border-gray-200 pt-8"
                    >
                      <SectionHeading icon={BookOpen}>
                        Stream & Subject Selection
                      </SectionHeading>

                      <Field label="Select Stream *">
                        <select
                          required
                          name="stream"
                          value={formData.stream}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select stream</option>
                          <option value="Science">Science</option>
                          <option value="Commerce">Commerce</option>
                          <option value="Arts">Arts / Humanities</option>
                        </select>
                      </Field>

                      {formData.stream && (
                        <div className="mt-6">
                          <Field
                            label={
                              formData.stream === "Science"
                                ? "Choose Biology or Mathematics *"
                                : "Indicative Subjects"
                            }
                          >
                            {formData.stream === "Science" ? (
                              <select
                                required
                                name="scienceSubject"
                                value={formData.scienceSubject}
                                onChange={handleChange}
                                className={inputClass}
                              >
                                <option value="">
                                  Select subject option
                                </option>
                                <option value="Biology">Biology</option>
                                <option value="Mathematics">
                                  Mathematics
                                </option>
                              </select>
                            ) : (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {streams[formData.stream].map((subject) => (
                                  <span
                                    key={subject}
                                    className="rounded-lg border border-[#B94A4A]/20 bg-[#FBF5F3] px-3 py-2 text-xs font-medium text-[#8D3838]"
                                  >
                                    {subject}
                                  </span>
                                ))}
                              </div>
                            )}
                          </Field>

                          <p className="mt-3 text-xs leading-5 text-gray-500">
                            {formData.stream === "Science"
                              ? "Biology and Mathematics are shown as subject options. Confirm the final combination with the school."
                              : "These subjects are indicative and must be confirmed with the school."}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* FATHER DETAILS */}
                <div className="border-t border-gray-200 pt-8">
                  <SectionHeading icon={User}>
                    Father's Details
                  </SectionHeading>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Father's Full Name *">
                      <input
                        required
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        placeholder="Enter father's name"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Father's Occupation *">
                      <select
                        required
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select occupation</option>
                        {occupations.map((occupation) => (
                          <option key={occupation} value={occupation}>
                            {occupation}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Father's Mobile Number">
                      <input
                        type="tel"
                        name="fatherPhone"
                        value={formData.fatherPhone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>

                {/* MOTHER DETAILS */}
                <div className="border-t border-gray-200 pt-8">
                  <SectionHeading icon={User}>
                    Mother's Details
                  </SectionHeading>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Mother's Full Name *">
                      <input
                        required
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        placeholder="Enter mother's name"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Mother's Occupation *">
                      <select
                        required
                        name="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select occupation</option>
                        <option value="Housewife / Homemaker">
                          Housewife / Homemaker
                        </option>
                        {occupations.map((occupation) => (
                          <option key={occupation} value={occupation}>
                            {occupation}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Mother's Mobile Number">
                      <input
                        type="tel"
                        name="motherPhone"
                        value={formData.motherPhone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>

                {/* FAMILY INFORMATION */}
                <div className="border-t border-gray-200 pt-8">
                  <SectionHeading icon={BriefcaseBusiness}>
                    Family Information
                  </SectionHeading>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Annual Family Income">
                      <select
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select annual income</option>
                        <option value="Below ₹1 Lakh">
                          Below ₹1 Lakh
                        </option>
                        <option value="₹1–2 Lakh">₹1–2 Lakh</option>
                        <option value="₹2–3 Lakh">₹2–3 Lakh</option>
                        <option value="₹3–5 Lakh">₹3–5 Lakh</option>
                        <option value="₹5–8 Lakh">₹5–8 Lakh</option>
                        <option value="₹8–10 Lakh">₹8–10 Lakh</option>
                        <option value="Above ₹10 Lakh">
                          Above ₹10 Lakh
                        </option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </select>
                    </Field>

                    <Field label="Siblings Studying in This School">
                      <select
                        name="siblingsInSchool"
                        value={formData.siblingsInSchool}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select number</option>
                        {Array.from({ length: 11 }, (_, i) => i).map(
                          (number) => (
                            <option key={number} value={number}>
                              {number === 0 ? "None" : number}
                            </option>
                          )
                        )}
                      </select>
                    </Field>
                  </div>
                </div>

                {/* CONTACT DETAILS */}
                <div className="border-t border-gray-200 pt-8">
                  <SectionHeading icon={Users}>
                    Contact Details
                  </SectionHeading>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Primary Mobile Number *">
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Alternate Mobile Number">
                      <input
                        type="tel"
                        name="alternatePhone"
                        value={formData.alternatePhone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="Alternate mobile number"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Email Address">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address (optional)"
                        className={inputClass}
                      />
                    </Field>
                  </div>
                </div>

                {/* ADDRESS DETAILS */}
                <div className="border-t border-gray-200 pt-8">
                  <SectionHeading icon={MapPin}>
                    Address Details
                  </SectionHeading>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Village / City *">
                      <input
                        required
                        name="villageCity"
                        value={formData.villageCity}
                        onChange={handleChange}
                        placeholder="Enter village or city"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="District *">
                      <input
                        required
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="Enter district"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="State *">
                      <input
                        required
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        className={inputClass}
                      />
                    </Field>

                    <Field label="PIN Code *">
                      <input
                        required
                        type="text"
                        inputMode="numeric"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        pattern="[0-9]{6}"
                        maxLength={6}
                        placeholder="6-digit PIN code"
                        className={inputClass}
                      />
                    </Field>

                    <Field
                      label="Complete Address *"
                      className="md:col-span-2"
                    >
                      <textarea
                        required
                        rows={3}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="House number, street, locality and other details"
                        className={`${inputClass} resize-none`}
                      />
                    </Field>
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="border-t border-gray-200 pt-7">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#B94A4A] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#A33D3D] hover:shadow-xl"
                  >
                    Review Application
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  {submitted && (
                    <div
                      role="status"
                      className="mt-5 flex gap-3 rounded-xl border border-[#B94A4A]/20 bg-[#FBF5F3] p-4 text-sm leading-6 text-[#292929]"
                    >
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-[#B94A4A]"
                        size={20}
                      />

                      <p>
                        Your form passed the basic validation.
                        This is currently a demo form. Your details
                        have not been sent or saved. Online submission
                        will be enabled after backend integration.
                      </p>
                    </div>
                  )}
                </div>
              </form>

              {/* Bottom Fade */}
              {!showAll && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-white/90 to-white" />
              )}
            </div>

            {/* SHOW ALL / SHOW LESS BUTTON */}
            <button
              type="button"
              onClick={() => setShowAll((previous) => !previous)}
              aria-expanded={showAll}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#B94A4A]/25 bg-[#FBF5F3] px-5 py-4 text-sm font-bold text-[#B94A4A] transition duration-300 hover:border-[#B94A4A] hover:bg-[#B94A4A] hover:text-white"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp size={19} />
                </>
              ) : (
                <>
                  Show All
                  <ChevronDown size={19} />
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
