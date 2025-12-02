import { ArrowRight, Banknote, Clock, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-serif font-bold text-2xl tracking-tight text-primary dark:text-white">Clarity Finance</div>
          <nav className="hidden sm:flex gap-6">
            <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors font-sans">
              Products
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors font-sans">
              How it Works
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-serif text-5xl sm:text-7xl font-medium tracking-tight text-primary dark:text-white leading-tight">
              Unlock the <span className="italic">$124 Trillion</span> Wealth Transfer
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/80 max-w-2xl mx-auto font-sans font-light">
              Empowering the next generation with seamless access to their inheritance—before and beyond probate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mt-12">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 rounded-none border border-primary/20 bg-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-foreground/40 font-sans"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium transition-colors flex items-center justify-center gap-2 font-sans rounded-none">
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-foreground/60 font-sans mt-4">
              Join the first online marketplace for inheritance advances.
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-primary/5 dark:bg-white/5 border-y border-black/5 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6 text-primary dark:text-white">Why Wait Years for What&apos;s Yours?</h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-sans leading-relaxed">
                Probate is a lengthy, costly process that leaves heirs in financial limbo. The time value of money matters—access your liquidity when you need it most.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Advance Product */}
              <div className="p-10 bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-primary">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-medium mb-4 text-primary dark:text-white">Clarity Advance</h3>
                <p className="text-foreground/80 mb-8 font-sans text-lg">
                  <strong>Probate Lending.</strong> A seamless marketplace connecting heirs with private lenders for immediate advances during the probate process. 
                </p>
                <ul className="space-y-4 text-foreground/70 font-sans">
                  <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary/60" /> Fast underwriting via court docs</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary/60" /> Competitive bidding from lenders</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary/60" /> Funds deposited directly to you</li>
                </ul>
              </div>

              {/* Secure Product */}
              <div className="p-10 bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/10 hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-primary">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-medium mb-4 text-primary dark:text-white">Clarity Secure</h3>
                <p className="text-foreground/80 mb-8 font-sans text-lg">
                  <strong>Pre-Probate Lending.</strong> Secure liquidity against future inheritance before probate even begins. Real-time asset monitoring meets flexible terms.
                </p>
                <ul className="space-y-4 text-foreground/70 font-sans">
                  <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary/60" /> Real-time integration with brokerage accounts</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary/60" /> Lenders bid on your loan request</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-primary/60" /> Defer interest until termination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="how-it-works" className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <Banknote className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-medium">Marketplace Model</h3>
                <p className="text-white/80 font-sans leading-relaxed">
                  We bring lenders to you. Get competitive rates through our bidding system instead of high-interest direct loans.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-medium">Real-time Underwriting</h3>
                <p className="text-white/80 font-sans leading-relaxed">
                  Our API integrations with brokerage and bank accounts allow for instant verification and faster funding.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-medium">Secure & Confidential</h3>
                <p className="text-white/80 font-sans leading-relaxed">
                  Your data is encrypted. We use tri-party contracts and pre-settlement mediation to ensure security.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/60 text-sm font-sans">
            © {new Date().getFullYear()} Clarity Finance. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors font-sans">Privacy Policy</Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors font-sans">Terms of Service</Link>
            <a href="mailto:mg@mattgoulet.ca" className="text-sm text-foreground/60 hover:text-primary transition-colors font-sans">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
