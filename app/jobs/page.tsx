import Link from "next/link"
import { MapPinIcon, CalendarIcon, ClockIcon, FilterIcon, SearchIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import JobMap from "@/components/job-map"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

// Mock data for jobs
const jobs = [
  {
    id: 1,
    title: "Farm Manager",
    company: "Green Acres",
    location: "Riverdale, NY",
    type: "Full-time",
    posted: "2 days ago",
    salary: "$45,000 - $55,000",
    tags: ["Agriculture", "Management"],
  },
  {
    id: 2,
    title: "Harvest Helper",
    company: "Sunrise Farms",
    location: "Hudson Valley, NY",
    type: "Seasonal",
    posted: "1 week ago",
    salary: "$18/hour",
    tags: ["Seasonal", "Outdoor"],
  },
  {
    id: 3,
    title: "Agricultural Technician",
    company: "Tech Farm",
    location: "Ithaca, NY",
    type: "Full-time",
    posted: "3 days ago",
    salary: "$40,000 - $50,000",
    tags: ["Technology", "Agriculture"],
  },
  {
    id: 4,
    title: "Livestock Caretaker",
    company: "Happy Ranch",
    location: "Catskills, NY",
    type: "Part-time",
    posted: "Just now",
    salary: "$16/hour",
    tags: ["Animals", "Ranching"],
  },
  {
    id: 5,
    title: "Organic Farm Assistant",
    company: "Nature's Bounty",
    location: "Finger Lakes, NY",
    type: "Full-time",
    posted: "5 days ago",
    salary: "$35,000 - $42,000",
    tags: ["Organic", "Farming"],
  },
  {
    id: 6,
    title: "Rural Delivery Driver",
    company: "Country Goods",
    location: "Adirondacks, NY",
    type: "Part-time",
    posted: "1 day ago",
    salary: "$20/hour",
    tags: ["Driving", "Logistics"],
  },
  {
    id: 7,
    title: "Farmers Market Coordinator",
    company: "Local Harvest",
    location: "Albany, NY",
    type: "Seasonal",
    posted: "4 days ago",
    salary: "$22/hour",
    tags: ["Marketing", "Community"],
  },
  {
    id: 8,
    title: "Vineyard Worker",
    company: "Hillside Winery",
    location: "Finger Lakes, NY",
    type: "Seasonal",
    posted: "2 weeks ago",
    salary: "$17/hour",
    tags: ["Vineyard", "Outdoor"],
  },
]

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Browse Jobs</h1>
                <div className="flex items-center">
                  <Badge className="bg-green-500 hover:bg-green-600 text-white">100% Free</Badge>
                  <span className="ml-2 text-sm text-gray-500">No fees for job seekers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <FilterIcon className="mr-2 h-3.5 w-3.5" />
                    Filters
                  </Button>
                  <Select defaultValue="newest">
                    <SelectTrigger className="h-8 w-[150px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest first</SelectItem>
                      <SelectItem value="oldest">Oldest first</SelectItem>
                      <SelectItem value="salary-high">Highest salary</SelectItem>
                      <SelectItem value="salary-low">Lowest salary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="search" placeholder="Search jobs..." className="pl-8 bg-white" />
                </div>
                <Button>
                  <SearchIcon className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
              <div className="grid gap-4">
                {jobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-6">
                      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                        <div className="space-y-3">
                          <div className="space-y-1">
                            <h3 className="font-semibold text-lg">{job.title}</h3>
                            <p className="text-sm font-medium">{job.company}</p>
                          </div>
                          <div className="space-y-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <MapPinIcon className="mr-1 h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <CalendarIcon className="mr-1 h-4 w-4" />
                              Posted {job.posted}
                            </div>
                            <div className="flex items-center">
                              <ClockIcon className="mr-1 h-4 w-4" />
                              {job.salary}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {job.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-4">
                          <Badge variant={job.type === "Full-time" ? "default" : "outline"}>{job.type}</Badge>
                          <Link href={`/jobs/${job.id}`}>
                            <Button>View Details</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-semibold">Job Locations</h2>
                </div>
                <div className="aspect-square">
                  <JobMap />
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Filter Jobs</h3>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Job Type</label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer">
                          Full-time
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Part-time
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Seasonal
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Contract
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Distance</label>
                      <Select defaultValue="25">
                        <SelectTrigger>
                          <SelectValue placeholder="Select distance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">Within 10 miles</SelectItem>
                          <SelectItem value="25">Within 25 miles</SelectItem>
                          <SelectItem value="50">Within 50 miles</SelectItem>
                          <SelectItem value="100">Within 100 miles</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="ranching">Ranching</SelectItem>
                          <SelectItem value="food-production">Food Production</SelectItem>
                          <SelectItem value="forestry">Forestry</SelectItem>
                          <SelectItem value="logistics">Logistics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Salary Range</label>
                      <Select defaultValue="any">
                        <SelectTrigger>
                          <SelectValue placeholder="Select salary range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Salary</SelectItem>
                          <SelectItem value="30k">$30,000+</SelectItem>
                          <SelectItem value="40k">$40,000+</SelectItem>
                          <SelectItem value="50k">$50,000+</SelectItem>
                          <SelectItem value="60k">$60,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

