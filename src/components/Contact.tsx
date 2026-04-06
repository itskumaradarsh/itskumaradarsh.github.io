'use client';

import { useState, type FormEvent } from 'react';
import { Mail, Linkedin, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PERSONAL } from '@/lib/constants';
import SectionHeading from './SectionHeading';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      // ── Using Web3Forms (free, no signup needed for testing) ──
      // To receive emails: go to https://web3forms.com, enter your email,
      // and replace the access_key below with the one they send you.
      const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

      if (WEB3FORMS_KEY === 'YOUR_ACCESS_KEY_HERE') {
        // Fallback: open the user's email client with pre-filled data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );
        window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`;
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
        return;
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          subject: `New message from ${formData.name}`,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/20">
      <div className="section-container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900/60 border text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all ${
                    errors.name ? 'border-red-400 dark:border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900/60 border text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all ${
                    errors.email ? 'border-red-400 dark:border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900/60 border text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none ${
                    errors.message ? 'border-red-400 dark:border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                  }`}
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={18} />
                    Failed — Try Again
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-6">
                Contact Details
              </h3>
            </div>

            <a
              href={`mailto:${PERSONAL.email}`}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Email
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {PERSONAL.email}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  Phone
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {PERSONAL.phone}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {PERSONAL.phoneAlt}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  Location
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {PERSONAL.location}
                </p>
              </div>
            </div>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Linkedin size={18} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  Connect with me
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
