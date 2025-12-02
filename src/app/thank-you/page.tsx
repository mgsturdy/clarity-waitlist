import Script from "next/script";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      {/* Google Ads Conversion Event */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-17773212351/QFxlCI6D78obEL_l9ppC'});`}
      </Script>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full py-6 px-6 lg:px-12 border-b border-black/5">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="font-serif font-semibold text-lg tracking-tight">
              Clarity Finance
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col justify-center items-center px-6 lg:px-12 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-body text-sm uppercase tracking-[0.2em] mb-8 opacity-60">
              You&apos;re on the list
            </p>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
              Thank you for joining.
            </h1>
            
            <div className="w-16 h-px bg-black mx-auto mb-8" />
            
            <p className="font-body text-xl sm:text-2xl leading-relaxed mb-8">
              We&apos;ll be in touch soon with priority access details and exclusive early-bird rates.
            </p>
            
            <p className="font-body text-lg opacity-70 mb-12">
              Keep an eye on your inbox for updates as we approach our Q1 2026 launch.
            </p>
            
            <Link
              href="/"
              className="inline-block font-body text-lg underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              ← Back to home
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 lg:px-12 border-t border-black/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-body text-sm opacity-60">
              © 2025 Clarity Finance. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

