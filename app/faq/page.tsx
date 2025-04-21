import Link from "next/link"
import { MapPinIcon, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
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
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mb-4">
              Help Center
            </div>
            <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600 mb-8">Find answers to common questions about using RuraBloom</p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search for answers..." className="pl-10" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-4 border-b">
                <h2 className="font-semibold">For Job Seekers</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-4">Is RuraBloom free for job seekers?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes, RuraBloom is completely free for job seekers. You can search for jobs, create a profile, and
                    apply to positions without any fees or charges.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-4">
                    Do I need to create an account to apply for jobs?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    While you can browse jobs without an account, creating a free account allows you to save job
                    searches, receive personalized job recommendations, and apply with a single click using your saved
                    profile information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-4">How do I set up job alerts?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    After creating an account, you can set up job alerts by saving your search criteria and selecting
                    your preferred notification frequency (daily, weekly, or instant). You'll receive emails when new
                    jobs matching your criteria are posted.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-4">Can I apply for jobs on mobile devices?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes, RuraBloom is fully responsive and optimized for mobile devices. You can search and apply for
                    jobs from your smartphone or tablet with the same functionality as on desktop.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-4">
                    How can I make my profile stand out to employers?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Complete all sections of your profile, including your work experience, education, skills, and
                    certifications. Upload a professional photo and consider adding a brief personal statement
                    highlighting your interest in rural opportunities. Regularly update your profile with new skills and
                    experiences.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-4 border-b">
                <h2 className="font-semibold">For Employers</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6">
                  <AccordionTrigger className="px-4">How much does it cost to post a job?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    RuraBloom offers several pricing tiers for job postings. Our Basic plan starts at $49 for a 30-day
                    listing, while our Standard ($99) and Premium ($199) plans offer additional features like featured
                    placement and social media promotion. Visit our Pricing page for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="px-4">How long will my job posting remain active?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Job postings remain active for 30 days on our Basic plan, 45 days on our Standard plan, and 60 days
                    on our Premium plan. You can extend or renew your listing at any time from your employer dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="px-4">Can I edit my job posting after it's published?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes, you can edit your job posting at any time through your employer dashboard. Changes will be
                    reflected immediately on the live listing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger className="px-4">How do I receive applications?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    You can choose to receive applications via email, through an external application URL, or using our
                    built-in applicant tracking system. All applications are also accessible through your employer
                    dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger className="px-4">
                    Do you offer discounts for multiple job postings?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes, we offer volume discounts for employers posting multiple jobs. We also have subscription plans
                    for regular recruiters. Contact our sales team at sales@rurabloom.com for more information about our
                    enterprise solutions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-4 border-b">
                <h2 className="font-semibold">Account & Technical</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-11">
                  <AccordionTrigger className="px-4">How do I reset my password?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Click on the "Forgot Password" link on the login page. Enter your email address, and we'll send you
                    instructions to reset your password. If you don't receive the email, check your spam folder or
                    contact support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger className="px-4">How can I delete my account?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    You can delete your account from your account settings page. Alternatively, contact our support team
                    at support@rurabloom.com, and we'll assist you with account deletion. Please note that account
                    deletion is permanent and cannot be undone.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger className="px-4">Is my personal information secure?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes, we take data security seriously. We use industry-standard encryption and security measures to
                    protect your personal information. For more details, please review our Privacy Policy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger className="px-4">What browsers are supported?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    RuraBloom supports the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping
                    your browser updated for the best experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-15">
                  <AccordionTrigger className="px-4">How do I report a technical issue?</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    If you encounter any technical issues, please contact our support team at support@rurabloom.com with
                    details about the problem, including screenshots if possible. Our team will respond within 24 hours.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h2 className="text-lg font-semibold mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-6">
                Our support team is here to help with any questions not covered in our FAQ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Contact Support</Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" size="lg">
                    Browse Resources
                  </Button>
                </Link>
              </div>
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

