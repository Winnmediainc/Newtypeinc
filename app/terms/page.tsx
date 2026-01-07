import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-white/10 font-mono">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-sans">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing or using Newtype Industries' website and services, you agree to be bound by these Terms of
                Service and all applicable laws and regulations. If you do not agree with any of these terms, you are
                prohibited from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">2. Use of Services</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                As a user of Newtype Industries services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Provide accurate information when contacting us</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to access unauthorized areas of our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">3. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is the property of Newtype
                Industries and is protected by intellectual property laws. You may not reproduce, distribute, or create
                derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">4. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                Newtype Industries shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">5. Contact Information</h2>
              <p className="text-gray-400 leading-relaxed">
                For questions about these Terms of Service, contact us at:
                <br />
                Email: joe.cho@newtypeinds.com
                <br />
                Address: 서울특별시 강남구 선릉로 428, 11층 116호(대치동)
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
