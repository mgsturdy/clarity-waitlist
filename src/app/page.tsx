"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inheritanceSize: "",
    userType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/4cbf4bb7-2b06-47aa-bfb3-d6e3693fa588",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            inheritance_size: formData.inheritanceSize,
            user_type: formData.userType,
            submitted_at: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", inheritanceSize: "", userType: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F5F1ED]/95 backdrop-blur-sm py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="font-serif font-semibold text-lg tracking-tight">
            Clarity Finance
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 pt-20 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] mb-8 opacity-60">
            Launching Q1 2026
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
            We&apos;re making inheritance easier, faster and accessible now.
          </h1>
          
          <div className="w-16 h-px bg-black mx-auto mb-8" />
          
          <p className="font-body text-xl sm:text-2xl leading-relaxed mb-8">
            The first fully online marketplace for inheritance advances.
          </p>
          
          <p className="font-body text-lg font-semibold">
            Join the waitlist below for priority access + exclusive lower rates.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <a href="#waitlist-form" className="mt-12 scroll-indicator block">
          <ChevronDown className="w-10 h-10 opacity-60 hover:opacity-100 transition-opacity" strokeWidth={1.5} />
        </a>
      </section>

      {/* Form Section */}
      <section id="waitlist-form" className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto w-full">
          
          {/* Form */}
          <div className="max-w-lg mx-auto">
            <p className="font-serif text-2xl sm:text-3xl font-medium text-center mb-10">
              Be first in line when we launch.
            </p>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <p className="font-serif text-2xl sm:text-3xl font-medium mb-4">
                  You&apos;re on the list!
                </p>
                <p className="font-body text-lg opacity-70">
                  We&apos;ll be in touch soon with priority access details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-black/20 focus:border-black focus:outline-none transition-colors font-body text-lg"
                    placeholder="Full name *"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-black/20 focus:border-black focus:outline-none transition-colors font-body text-lg"
                    placeholder="Email address *"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-black/20 focus:border-black focus:outline-none transition-colors font-body text-lg"
                    placeholder="Phone number"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <select
                    value={formData.inheritanceSize}
                    onChange={(e) => setFormData({ ...formData, inheritanceSize: e.target.value })}
                    className="w-full px-5 py-4 bg-white border border-black/20 focus:border-black focus:outline-none transition-colors font-body text-lg appearance-none cursor-pointer"
                    disabled={isSubmitting}
                  >
                    <option value="">Expected inheritance size</option>
                    <option value="under-500k">Under $500,000</option>
                    <option value="500k-2m">$500,000 – $2,000,000</option>
                    <option value="2m-10m">$2,000,000 – $10,000,000</option>
                    <option value="over-10m">$10,000,000+</option>
                  </select>
                </div>
                
                <div className="pt-2">
                  <div className="space-y-3">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <input
                        type="radio"
                        name="userType"
                        value="heir"
                        checked={formData.userType === "heir"}
                        onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                        className="w-5 h-5 border-2 border-black/30 checked:border-black checked:bg-black appearance-none rounded-full cursor-pointer flex-shrink-0"
                        disabled={isSubmitting}
                      />
                      <span className="font-body text-lg group-hover:opacity-70 transition-opacity">I&apos;m an heir waiting for an inheritance</span>
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <input
                        type="radio"
                        name="userType"
                        value="lender"
                        checked={formData.userType === "lender"}
                        onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                        className="w-5 h-5 border-2 border-black/30 checked:border-black checked:bg-black appearance-none rounded-full cursor-pointer flex-shrink-0"
                        disabled={isSubmitting}
                      />
                      <span className="font-body text-lg group-hover:opacity-70 transition-opacity">I&apos;m a private lender / family office / wealth advisor</span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-5 px-8 font-body text-lg font-medium hover:bg-black/80 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "→ Join Waitlist — Priority Access + Lowest Rates"}
                </button>
              </form>
            )}
            
            <div className="mt-10 pt-8 border-t border-black/10 text-center">
              <p className="font-body opacity-60 mb-3">Or book a quick 10-minute call to discuss your situation</p>
              <a
                href="https://calendly.com/mg-mattgoulet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-lg underline underline-offset-4 hover:opacity-60 transition-opacity"
              >
                Schedule a Call →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-body text-sm opacity-60">
            © 2025 Clarity Finance. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
