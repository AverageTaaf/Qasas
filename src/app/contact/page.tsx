"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(5);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple CAPTCHA verification
    if (parseInt(captchaAnswer) !== num1 + num2) {
      alert("Incorrect math answer. Please try again.");
      return;
    }

    setFormStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-up">
      <header className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-heading mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-foreground/60">
          Have a question or suggestion? We&apos;d love to hear from you.
        </p>
      </header>

      {formStatus === "success" ? (
        <div className="bg-brand-accent/5 p-12 rounded-3xl border border-brand-accent/20 text-center flex flex-col items-center gap-4">
          <CheckCircle2 size={64} className="text-brand-accent" />
          <h2 className="font-serif text-3xl font-bold text-heading">Message Sent!</h2>
          <p className="text-lg text-foreground/80">
            Thank you for reaching out. We aim to reply within 3 business days.
          </p>
          <button 
            onClick={() => setFormStatus("idle")}
            className="mt-6 px-6 py-3 bg-brand-btn hover:bg-brand-btn-hover text-white rounded-full font-medium transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-heading">Full Name</label>
            <input 
              type="text" 
              id="name" 
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none text-foreground"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium text-heading">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none text-foreground"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium text-heading">Message</label>
            <textarea 
              id="message" 
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none resize-y text-foreground"
              placeholder="How can we help?"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <label htmlFor="captcha" className="font-medium text-heading">
              Security Check: What is {num1} + {num2}?
            </label>
            <input 
              type="number" 
              id="captcha" 
              required
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none text-foreground"
              placeholder="Your answer"
            />
          </div>

          <button 
            type="submit" 
            disabled={formStatus === "submitting"}
            className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-brand-btn hover:bg-brand-btn-hover disabled:bg-foreground/40 text-white rounded-xl font-bold text-lg transition-colors shadow-md"
          >
            {formStatus === "submitting" ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>

          <p className="text-center text-sm text-foreground/50 mt-2">
            We aim to reply within 3 business days.
          </p>
        </form>
      )}
    </div>
  );
}
