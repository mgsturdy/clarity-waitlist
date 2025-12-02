import { ArrowRight, Banknote, Clock, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-gray-50 dark:to-gray-900">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter">Clarity Finance</div>
          <nav className="hidden sm:flex gap-6">
            <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How it Works
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
              Unlock the <span className="text-blue-600">$124 Trillion</span> Wealth Transfer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Empowering the next generation with seamless access to their inheritance—before and beyond probate. Don&apos;t let the probate process tie up your future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mt-8">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:bg-gray-800"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Join the first online marketplace for inheritance advances.
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Wait Years for What&apos;s Yours?</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Probate is a lengthy, costly process that leaves heirs in financial limbo. The time value of money matters—access your liquidity when you need it most.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Advance Product */}
              <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Clarity Advance</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  <strong>Probate Lending.</strong> A seamless marketplace connecting heirs with private lenders for immediate advances during the probate process. 
                </p>
                <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Fast underwriting via court docs</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Competitive bidding from lenders</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Funds deposited directly to you</li>
                </ul>
              </div>

              {/* Secure Product */}
              <div className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Clarity Secure</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  <strong>Pre-Probate Lending.</strong> Secure liquidity against future inheritance before probate even begins. Real-time asset monitoring meets flexible terms.
                </p>
                <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Real-time integration with brokerage accounts</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Lenders bid on your loan request</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-500" /> Defer interest until termination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  <Banknote className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Marketplace Model</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We bring lenders to you. Get competitive rates through our bidding system instead of high-interest direct loans.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Real-time Underwriting</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our API integrations with brokerage and bank accounts allow for instant verification and faster funding.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">Secure & Confidential</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your data is encrypted. We use tri-party contracts and pre-settlement mediation to ensure security for all parties.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Clarity Finance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">Terms of Service</Link>
            <a href="mailto:mg@mattgoulet.ca" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
