import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicy() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-sans">Cookie Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed">Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">1. What Are Cookies</h2>
              <p className="text-gray-400 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit our
                website. They are widely used to make websites work more efficiently and provide information to website
                owners. Newtype Industries uses cookies to enhance your browsing experience and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">2. Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Essential Cookies</h3>
                  <p className="text-gray-400 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like
                    page navigation and access to secure areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Performance Cookies</h3>
                  <p className="text-gray-400 leading-relaxed">
                    These cookies collect information about how visitors use our website, such as which pages are
                    visited most often and if users get error messages. This helps us improve website performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Analytics Cookies</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We use analytics cookies to understand how our website is being used and to improve the user
                    experience. These cookies help us analyze website traffic and usage patterns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">3. Managing Cookies</h2>
              <p className="text-gray-400 leading-relaxed mb-4">You can control and manage cookies in several ways:</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Delete cookies: Clear existing cookies from your browser at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white font-sans">4. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
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
