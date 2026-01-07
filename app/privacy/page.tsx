import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-sans">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">1. Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Newtype Industries collects information to provide better services to our users. We collect information
                in the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Information you give us directly (contact forms, inquiries)</li>
                <li>Usage data and analytics from our website</li>
                <li>Device information and technical specifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">2. How We Use Information</h2>
              <p className="text-gray-400 leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries and communications</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">3. Data Sharing and Disclosure</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>To comply with legal obligations or court orders</li>
                <li>To protect the rights, property, or safety of Newtype Industries or others</li>
                <li>With service providers under strict confidentiality agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">4. Your Rights</h2>
              <p className="text-gray-400 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Withdraw consent for data processing at any time</li>
                <li>File complaints with relevant data protection authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">5. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
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
