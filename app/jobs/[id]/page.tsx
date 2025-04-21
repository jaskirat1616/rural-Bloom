import Link from "next/link"
import {
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  BriefcaseIcon,
  BuildingIcon,
  Share2Icon,
  BookmarkIcon,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import JobMap from "@/components/job-map"

// Mock job data - in a real app, this would come from a database
const job = {
  id: 1,
  title: "Farm Manager",
  company: "Green Acres",
  location: "Riverdale, NY",
  type: "Full-time",
  posted: "2 days ago",
  salary: "$45,000 - $55,000",
  tags: ["Agriculture", "Management"],
  description: `
    <p>Green Acres is seeking an experienced Farm Manager to oversee our 150-acre organic vegetable farm. The ideal candidate will have a strong background in sustainable farming practices and team management.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
      <li>Develop and implement crop production plans</li>
      <li>Manage a team of 5-10 seasonal farm workers</li>
      <li>Oversee irrigation, pest management, and soil health</li>
      <li>Maintain farm equipment and infrastructure</li>
      <li>Ensure compliance with organic certification standards</li>
      <li>Coordinate harvest schedules and post-harvest handling</li>
      <li>Manage farm budget and purchasing</li>
    </ul>
    
    <h3>Requirements:</h3>
    <ul>
      <li>3+ years experience in farm management</li>
      <li>Knowledge of organic farming practices</li>
      <li>Experience with farm equipment operation and maintenance</li>
      <li>Strong leadership and communication skills</li>
      <li>Ability to work in various weather conditions</li>
      <li>Valid driver's license</li>
    </ul>
    
    <h3>Benefits:</h3>
    <ul>
      <li>Competitive salary based on experience</li>
      <li>Health insurance</li>
      <li>Paid time off</li>
      <li>Farm produce</li>
      <li>Professional development opportunities</li>
    </ul>
  `,
  companyDescription:
    "Green Acres is a family-owned organic farm established in 1985. We specialize in sustainable vegetable production and serve local markets, restaurants, and CSA members throughout the region.",
}

// Similar job suggestions
const similarJobs = [
  {
    id: 3,
    title: "Agricultural Technician",
    company: "Tech Farm",
    location: "Ithaca, NY",
    type: "Full-time",
    posted: "3 days ago",
  },
  {
    id: 5,
    title: "Organic Farm Assistant",
    company: "Nature's Bounty",
    location: "Finger Lakes, NY",
    type: "Full-time",
    posted: "5 days ago",
  },
  {
    id: 7,
    title: "Farmers Market Coordinator",
    company: "Local Harvest",
    location: "Albany, NY",
    type: "Seasonal",
    posted: "4 days ago",
  },
]

export default function JobDetailPage() {
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
          <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12">
            <div className="space-y-6">
              <div>
                <Link href="/jobs" className="text-sm text-gray-500 hover:underline">
                  ← Back to jobs
                </Link>
              </div>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                      <CardDescription className="text-base">
                        {job.company} • {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant={job.type === "Full-time" ? "default" : "outline"}>{job.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center text-gray-500">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      Posted {job.posted}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <ClockIcon className="mr-1 h-4 w-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPinIcon className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">Apply Now</Button>
                    <Button variant="outline" size="icon">
                      <BookmarkIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2Icon className="h-4 w-4" />
                    </Button>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Job Description</h3>
                    <div
                      className="prose prose-gray max-w-none"
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                  <Button variant="outline">
                    <BookmarkIcon className="mr-2 h-4 w-4" />
                    Save Job
                  </Button>
                  <Button>Apply Now</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About {job.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                      <BuildingIcon className="h-6 w-6 text-gray-500" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">{job.company}</h3>
                      <p className="text-sm text-gray-500">{job.location}</p>
                      <p className="text-sm">{job.companyDescription}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/companies/${job.company.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" size="sm">
                      View Company Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Job Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-square">
                    <JobMap />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Similar Jobs</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {similarJobs.map((job) => (
                      <div key={job.id} className="p-4 hover:bg-gray-50">
                        <Link href={`/jobs/${job.id}`}>
                          <div className="space-y-1">
                            <div className="flex items-start justify-between">
                              <h3 className="font-medium">{job.title}</h3>
                              <Badge variant={job.type === "Full-time" ? "default" : "outline"} className="text-xs">
                                {job.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-500">
                              {job.company} • {job.location}
                            </p>
                            <p className="text-xs text-gray-500">Posted {job.posted}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/jobs" className="w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Jobs
                      <BriefcaseIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-500">
                    If you have any questions about this job or need assistance with your application, our team is here
                    to help.
                  </p>
                  <div className="rounded-lg border bg-gray-50 p-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Contact Support</p>
                      <p className="text-sm text-gray-500">Email: support@rurabloom.com</p>
                      <p className="text-sm text-gray-500">Phone: (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
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

