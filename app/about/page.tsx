import Link from "next/link"
import { MapPinIcon, Users, Building, Globe, Heart, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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

      <main className="flex-1">
        <section className="py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Our Mission</div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Connecting Rural Communities with Opportunities
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
                RuraBloom is dedicated to bridging the gap between rural employers and job seekers, creating sustainable
                economic growth in rural areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">For Job Seekers</h3>
                <p className="text-gray-500 text-sm">
                  Discover meaningful career opportunities in rural communities without fees or barriers.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <Building className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">For Employers</h3>
                <p className="text-gray-500 text-sm">
                  Connect with qualified candidates who are specifically interested in rural opportunities.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">For Communities</h3>
                <p className="text-gray-500 text-sm">
                  Support economic development and sustainability in rural areas through local employment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter">Founded with a Purpose</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  RuraBloom was founded in 2023 by a team of rural advocates who recognized the disconnect between job
                  opportunities and rural communities. Having grown up in small towns, our founders experienced
                  firsthand the challenges of finding meaningful employment without relocating to urban areas.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What began as a small job board for a single county has grown into a comprehensive platform serving
                  rural communities across the country, connecting thousands of job seekers with employers who value
                  their skills and commitment.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="RuraBloom team"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter">What Drives Us</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
                Our platform is built on core values that guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Community First</h3>
                <p className="text-gray-500 text-sm">
                  We prioritize the needs of rural communities in every decision we make.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Quality Opportunities</h3>
                <p className="text-gray-500 text-sm">
                  We focus on meaningful jobs that contribute to sustainable rural economies.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Accessibility</h3>
                <p className="text-gray-500 text-sm">
                  We ensure our platform is free and accessible to all job seekers.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500 text-sm">
                  We continuously improve our platform to better serve rural communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Join Us</div>
              <h2 className="text-3xl font-bold tracking-tighter">Be Part of the Rural Renaissance</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
                Whether you're looking for a job or hiring talent, RuraBloom is your partner in rural opportunity.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/jobs">
                <Button size="lg" className="w-full md:w-auto">
                  Find Jobs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/post-job">
                <Button size="lg" variant="outline" className="w-full md:w-auto">
                  Post a Job
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full md:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="container py-6 px-4 md:px-6 text-center text-sm text-gray-500">
          <p>© 2025 RuraBloom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

