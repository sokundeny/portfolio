"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactMe = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{message:string}|null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null)
    try {
      const res = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col w-full my-32">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-medium text-text-secondary mb-12">
        Get In Touch
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-7xl">
        {/* First row: Name & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-4 rounded-md bg-[#1f1f1f] text-white placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary flex-1"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-4 rounded-md bg-[#1f1f1f] text-white placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary flex-1"
          />
        </div>

        {/* Second row: Full-width Message */}
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={6}
          className="p-4 rounded-md bg-[#1f1f1f] text-white placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary resize-none w-full"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-black font-semibold px-6 py-3 rounded-md hover:brightness-110 transition w-full md:w-auto"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        <div className="text-red-400">{error&&"*Something Went Wrong"}</div>
      </form>
    </div>
  );
};

export default ContactMe;