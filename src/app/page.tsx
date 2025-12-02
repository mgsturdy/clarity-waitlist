import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-gray-50 dark:to-gray-900">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl tracking-tighter">Clarity</div>
          <nav className="hidden sm:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Master Your Money with <span className="text-blue-600">Clarity</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The intelligent financial companion that brings all your accounts together. 
              Gain insights, track spending, and reach your goals faster.
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
              Join 2,000+ others waiting for early access.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Real-time Sync</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect all your bank accounts and credit cards for a unified view of your finances in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Bank-Grade Security</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your data is encrypted with the same level of security used by major banks. We never sell your data.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Smart Insights</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get personalized recommendations to save money and optimize your spending habits automatically.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-800 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Clarity Finance. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
