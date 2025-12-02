"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    inheritanceSize: "",
    userType: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon.");
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

      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
            Clarity Finance
          </h1>
          <div className="w-24 h-px bg-black mx-auto mb-8" />
          <p className="text-xl sm:text-2xl md:text-3xl font-body leading-relaxed max-w-3xl mx-auto">
            Unlocking the $124 Trillion Wealth Transfer
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator">
          <ChevronDown className="w-6 h-6" strokeWidth={1} />
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-6">
            Our Mission
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-12" />
          <p className="text-xl sm:text-2xl md:text-3xl font-body leading-relaxed">
            We&apos;re empowering the next generation with seamless access to their inheritance—before and beyond probate.
          </p>
        </div>
      </section>

      {/* Section 3: Market Size */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Size of Market
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-center">
            <div>
              <p className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-4">$124T</p>
              <p className="text-lg font-body uppercase tracking-widest mb-3">TAM</p>
              <p className="text-base font-body leading-relaxed opacity-80">
                The total wealth transfer from Boomers & Silent Generation
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-4">$45T</p>
              <p className="text-lg font-body uppercase tracking-widest mb-3">SAM</p>
              <p className="text-base font-body leading-relaxed opacity-80">
                The Silver Tsunami hitting in the next decade
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-4">$100B</p>
              <p className="text-lg font-body uppercase tracking-widest mb-3">SOM</p>
              <p className="text-base font-body leading-relaxed opacity-80">
                Our target niche with $200M in advances by Year 3
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Problem */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              The Problem
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium mb-4">Probate</h3>
              <p className="font-body leading-relaxed opacity-80">
                A lengthy, costly process that ties up inheritances for months or years, leaving heirs in financial limbo during critical times.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium mb-4">Time Value of $</h3>
              <p className="font-body leading-relaxed opacity-80">
                $10 million in a decade may be worth far less than $3 million today. Heirs miss life-changing investments while waiting.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium mb-4">Changing of Wills</h3>
              <p className="font-body leading-relaxed opacity-80">
                Wills can be altered or contested at any moment, creating uncertainty and family rifts that delay or diminish inheritances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Current State */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.2] italic">
            &ldquo;These loans already exist—and they&apos;re not happening online.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 6: Competitive Analysis */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Competitive Analysis
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium mb-4">InheritanceFunding.com</h3>
              <p className="font-body text-sm leading-relaxed opacity-80">
                Traditional probate advances with 30%+ effective interest rates. No online marketplace, no competitive bidding.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium mb-4">Meet Alix</h3>
              <p className="font-body text-sm leading-relaxed opacity-80">
                Expert-led estate settlement services. Helpful for paperwork, but no liquidity solutions for heirs.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium mb-4">Eton Solutions</h3>
              <p className="font-body text-sm leading-relaxed opacity-80">
                Software suite for family offices. Backend technology only—no direct inheritance advances or lender matching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Our Solution */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Our Solution
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 text-center">
            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">Seamless Marketplace</h3>
              <p className="font-body leading-relaxed opacity-80">
                Our &lsquo;Advance&rsquo; and &lsquo;Secure&rsquo; products connect heirs with competitive lenders.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">Realtime Underwriting</h3>
              <p className="font-body leading-relaxed opacity-80">
                API integration for instant asset monitoring and verification.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">Tax Optimization</h3>
              <p className="font-body leading-relaxed opacity-80">
                Gift exemptions & estate reductions to maximize value transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Advance Product */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Advance: Probate Lending
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="font-serif text-4xl font-medium mb-3">1</div>
              <h3 className="font-body font-semibold mb-2">Application</h3>
              <p className="font-body text-sm opacity-80">Post loan requests, begin underwriting via court documents</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-medium mb-3">2</div>
              <h3 className="font-body font-semibold mb-2">Terms</h3>
              <p className="font-body text-sm opacity-80">Private lenders bid after reviewing Clarity&apos;s lending score</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-medium mb-3">3</div>
              <h3 className="font-body font-semibold mb-2">Sign Off</h3>
              <p className="font-body text-sm opacity-80">Both parties agree, court documents updated</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-medium mb-3">4</div>
              <h3 className="font-body font-semibold mb-2">Funding</h3>
              <p className="font-body text-sm opacity-80">Lenders deposit on Clarity, sent directly to user</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="font-serif text-4xl font-medium mb-3">5</div>
              <h3 className="font-body font-semibold mb-2">Termination</h3>
              <p className="font-body text-sm opacity-80">Interest paid upon probate closing</p>
            </div>
          </div>
          
          <p className="text-center mt-12 font-body opacity-60">
            $200,000,000 in probate loans exist via bail bonds style lenders every year.
          </p>
        </div>
      </section>

      {/* Section 9: Secure Product */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Secure: Pre-Probate Lending
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="font-serif text-4xl font-medium mb-3">1</div>
              <h3 className="font-body font-semibold mb-2">Application</h3>
              <p className="font-body text-sm opacity-80">Underwriting via video conference with interested parties</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-medium mb-3">2</div>
              <h3 className="font-body font-semibold mb-2">Terms</h3>
              <p className="font-body text-sm opacity-80">Private lenders bid on loans</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-medium mb-3">3</div>
              <h3 className="font-body font-semibold mb-2">Integration</h3>
              <p className="font-body text-sm opacity-80">Real-time monitoring of brokerage, bank, and title accounts</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-medium mb-3">4</div>
              <h3 className="font-body font-semibold mb-2">Funding</h3>
              <p className="font-body text-sm opacity-80">Direct deposit to user account</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="font-serif text-4xl font-medium mb-3">5</div>
              <h3 className="font-body font-semibold mb-2">Termination</h3>
              <p className="font-body text-sm opacity-80">Interest paid per terms, most defer</p>
            </div>
          </div>
          
          <p className="text-center mt-12 font-body opacity-60">
            Many heirs are 60+ still waiting for a windfall while their parents don&apos;t want to sacrifice lifestyles well into their 80s.
          </p>
        </div>
      </section>

      {/* Section 10: Business Model */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Business Model
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium mb-6">Transaction Take Rate</h3>
              <ul className="font-body space-y-4 text-left">
                <li><strong>Fee Per Deal:</strong> 2% on each inheritance advance</li>
                <li><strong>Freemium Upsell:</strong> Basic listings free; premium features generate recurring revenue</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium mb-6">Proprietary Funding Facility</h3>
              <ul className="font-body space-y-4 text-left">
                <li><strong>In-House Lending Arm:</strong> Our capital pool offers direct advances</li>
                <li><strong>Full Margins:</strong> Competing with external lenders, capturing full interest</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Sales Channels */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Sales Channels
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-serif text-xl font-medium mb-4">Heirs</h3>
              <p className="font-body text-sm opacity-80">
                Organic growth from heirs seeking fast liquidity. The product sells itself.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-4">Wealth Managers</h3>
              <p className="font-body text-sm opacity-80">
                RIA partnerships with 1% revenue-sharing per deal.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-4">Existing Lenders</h3>
              <p className="font-body text-sm opacity-80">
                API-driven lead delivery cuts their acquisition costs.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-4">Digital</h3>
              <p className="font-body text-sm opacity-80">
                Google ads targeting &ldquo;inheritance advance&rdquo; for high-intent capture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Go to Market */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Go to Market
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <h3 className="font-serif text-xl font-medium mb-3">Lead Gen</h3>
              <p className="font-body text-sm opacity-80">Work with existing lenders, onboard to marketplace</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-3">Finance</h3>
              <p className="font-body text-sm opacity-80">Tailor products for $5M–$100M net worth individuals</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-3">Launch</h3>
              <p className="font-body text-sm opacity-80">Large digital and physical marketing campaign</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-3">Monitor</h3>
              <p className="font-body text-sm opacity-80">Partner with family office & legal software</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-serif text-xl font-medium mb-3">Iterate</h3>
              <p className="font-body text-sm opacity-80">Expand beyond probate to facilitate the silver tsunami</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Risks & Mitigation */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Risks & Mitigation
            </h2>
            <div className="w-16 h-px bg-black mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-xl font-medium mb-3">Underwriting</h3>
              <p className="font-body text-sm opacity-80 mb-6">
                AI-driven underwriting with real-time data via Addepar and Plaid APIs. Tri-party consent confirms asset stability.
              </p>
              
              <h3 className="font-serif text-xl font-medium mb-3">Medical Debt</h3>
              <p className="font-body text-sm opacity-80">
                Contingency buffers in advance terms. Optional insurance products cover shortfall risks.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium mb-3">Estate Challenges</h3>
              <p className="font-body text-sm opacity-80 mb-6">
                Legally binding tri-party contracts and pre-settlement mediation tools minimize contestation risks.
              </p>
              
              <h3 className="font-serif text-xl font-medium mb-3">Bankruptcy</h3>
              <p className="font-body text-sm opacity-80">
                Non-recourse terms shift risk to lenders. Escrow-based disbursements with bankruptcy checks in underwriting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Financial Projections */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Financial Projections
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-12" />
          
          <p className="font-body text-xl leading-relaxed mb-8">
            Starting with <strong>$5M</strong> in facilitated advances in Year 1, scaling to <strong>$200M</strong> by Year 3 through network effects and marketing.
          </p>
          
          <p className="font-body text-lg opacity-80">
            Average take rate of 2% on transactions, with 30% YoY user growth and CAC of $50, supported by our freemium model and proprietary funding facility.
          </p>
        </div>
      </section>

      {/* Section 15: The Ask */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-lg uppercase tracking-widest mb-8 opacity-60">The Ask</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
            $15,000,000 in equity financing
          </h2>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl opacity-80 mb-4">
            + $25,000,000 credit facility
          </p>
          <div className="w-16 h-px bg-black mx-auto my-12" />
          <p className="font-body text-xl">
            To unlock the largest untapped financial market in the world.
          </p>
        </div>
      </section>

      {/* Section 16: Final CTA */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
            Get your inheritance years earlier—at half the cost
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-8" />
          <p className="font-body text-xl mb-12 opacity-80">
            Join the waitlist for priority access and exclusive early-bird rates when we launch Q1 2026.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-lg mx-auto">
            <div>
              <label htmlFor="email" className="block font-body text-sm mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-4 bg-white border border-black/20 focus:border-black focus:outline-none transition-colors font-body text-lg"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block font-body text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-4 bg-white border border-black/20 focus:border-black focus:outline-none transition-colors font-body text-lg"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            
            <div>
              <label htmlFor="inheritanceSize" className="block font-body text-sm mb-2">Expected Inheritance Size</label>
              <select
                id="inheritanceSize"
                value={formData.inheritanceSize}
                onChange={(e) => setFormData({ ...formData, inheritanceSize: e.target.value })}
                className="w-full px-4 py-4 bg-white border border-black/20 focus:border-black focus:outline-none transition-colors font-body text-lg appearance-none cursor-pointer"
              >
                <option value="">Select a range</option>
                <option value="under-500k">Under $500,000</option>
                <option value="500k-1m">$500,000 – $1,000,000</option>
                <option value="1m-5m">$1,000,000 – $5,000,000</option>
                <option value="5m-10m">$5,000,000 – $10,000,000</option>
                <option value="10m-50m">$10,000,000 – $50,000,000</option>
                <option value="50m-100m">$50,000,000 – $100,000,000</option>
                <option value="over-100m">Over $100,000,000</option>
              </select>
            </div>
            
            <div>
              <p className="font-body text-sm mb-3">I am a...</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="userType"
                    value="heir"
                    checked={formData.userType === "heir"}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="w-5 h-5 border-2 border-black/30 checked:border-black checked:bg-black appearance-none rounded-full cursor-pointer"
                  />
                  <span className="font-body text-lg group-hover:opacity-70 transition-opacity">I&apos;m an heir</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="userType"
                    value="lender"
                    checked={formData.userType === "lender"}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                    className="w-5 h-5 border-2 border-black/30 checked:border-black checked:bg-black appearance-none rounded-full cursor-pointer"
                  />
                  <span className="font-body text-lg group-hover:opacity-70 transition-opacity">I&apos;m a lender / family office</span>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-5 px-8 font-body text-lg font-medium hover:bg-black/80 transition-colors mt-8"
            >
              Join Waitlist → Priority Access
            </button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-black/10">
            <p className="font-body opacity-60 mb-4">Or book a 10-min call to discuss your situation</p>
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
