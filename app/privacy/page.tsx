import Link from "next/link"
import { MapPinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <MapPinIcon className="w-6 h-6 text-green-600" />
            <span className="text-xl font-semibold">RuraBloom</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/jobs" className="text-sm font-medium hover:underline underline-offset-4">
              Find Jobs
            </Link>
            <Link href="/post-job" className="text-sm font-medium hover:underline underline-offset-4">
              Post a Job
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                <p className="text-gray-600">
                  At RuraBloom, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our website or use our services. Please read
                  this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do
                  not access the site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-gray-600 mb-3">We collect information that you provide directly to us when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Register on our website</li>
                  <li>Create a job seeker or employer profile</li>
                  <li>Post job listings</li>
                  <li>Apply for jobs</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact our customer support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                <p className="text-gray-600 mb-3">
                  We may use the information we collect from you for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information, such as updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Personalize your experience and deliver content relevant to your interests</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Sharing Your Information</h2>
                <p className="text-gray-600 mb-3">We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With employers when you apply for jobs through our platform</li>
                  <li>With job seekers when you post job listings as an employer</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with applicable laws and regulations</li>
                  <li>In connection with a business transaction such as a merger or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Data Security</h2>
                <p className="text-gray-600">
                  We have implemented appropriate technical and organizational security measures designed to protect the
                  security of any personal information we process. However, please also remember that we cannot
                  guarantee that the internet itself is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Your Privacy Rights</h2>
                <p className="text-gray-600">
                  Depending on your location, you may have certain rights regarding your personal information, such as
                  the right to access, correct, or delete your personal information. To make such a request, please
                  contact us using the contact information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy
                  Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at privacy@rurabloom.com.
                </p>
              </section>

              <div className="pt-4 border-t text-sm text-gray-500">Last Updated: January 1, 2025</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="container py-6 px-4 md:px-6 text-center text-sm text-gray-500">
          <p>© 2025 RuraBloom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

