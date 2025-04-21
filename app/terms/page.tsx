import Link from "next/link"
import { MapPinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">Agreement to Terms</h2>
                <p className="text-gray-600">
                  These Terms of Service constitute a legally binding agreement made between you and RuraBloom
                  concerning your access to and use of the RuraBloom website and services. By accessing or using
                  RuraBloom, you agree to be bound by these Terms. If you disagree with any part of the terms, you may
                  not access the service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">User Accounts</h2>
                <p className="text-gray-600 mb-3">
                  When you create an account with us, you must provide information that is accurate, complete, and
                  current at all times. Failure to do so constitutes a breach of the Terms, which may result in
                  immediate termination of your account on our service.
                </p>
                <p className="text-gray-600">
                  You are responsible for safeguarding the password that you use to access the service and for any
                  activities or actions under your password. You agree not to disclose your password to any third party.
                  You must notify us immediately upon becoming aware of any breach of security or unauthorized use of
                  your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">User Content</h2>
                <p className="text-gray-600 mb-3">
                  Our service allows you to post, link, store, share and otherwise make available certain information,
                  text, graphics, videos, or other material. You are responsible for the content that you post on or
                  through the service, including its legality, reliability, and appropriateness.
                </p>
                <p className="text-gray-600">
                  By posting content on or through the service, you represent and warrant that: (i) the content is yours
                  and/or you have the right to use it and the right to grant us the rights and license as provided in
                  these Terms, and (ii) that the posting of your content on or through the service does not violate the
                  privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Job Listings and Applications</h2>
                <p className="text-gray-600 mb-3">
                  Employers are responsible for the content of their job listings and for ensuring that their job
                  postings comply with all applicable laws and regulations. RuraBloom does not guarantee the validity of
                  job listings or the qualifications of applicants.
                </p>
                <p className="text-gray-600">
                  Job seekers are responsible for the accuracy of their applications and for ensuring that they have the
                  legal right to work in the positions for which they apply. RuraBloom does not guarantee employment or
                  the availability of jobs.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
                <p className="text-gray-600">
                  The service and its original content (excluding content provided by users), features, and
                  functionality are and will remain the exclusive property of RuraBloom and its licensors. The service
                  is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                  Our trademarks and trade dress may not be used in connection with any product or service without the
                  prior written consent of RuraBloom.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Termination</h2>
                <p className="text-gray-600">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any
                  reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right
                  to use the service will immediately cease. If you wish to terminate your account, you may simply
                  discontinue using the service or contact us to request account deletion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
                <p className="text-gray-600">
                  In no event shall RuraBloom, nor its directors, employees, partners, agents, suppliers, or affiliates,
                  be liable for any indirect, incidental, special, consequential or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your
                  access to or use of or inability to access or use the service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be governed and construed in accordance with the laws of the United States, without
                  regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
                  will not be considered a waiver of those rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                  effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms, please contact us at terms@rurabloom.com.
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

