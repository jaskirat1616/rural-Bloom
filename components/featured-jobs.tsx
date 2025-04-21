import Link from "next/link"
import { MapPinIcon, CalendarIcon, ClockIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock data for featured jobs
const featuredJobs = [
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
]

export default function FeaturedJobs() {
  // Display only the first 6 jobs
  const displayJobs = featuredJobs.slice(0, 6)

  return (
    <>
      {displayJobs.map((job) => (
        <Card key={job.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold">{job.title}</h3>
                    <Badge variant={job.type === "Full-time" ? "default" : "outline"}>{job.type}</Badge>
                  </div>
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
            </div>
          </CardContent>
          <CardFooter className="border-t bg-gray-50 p-4">
            <Link href={`/jobs/${job.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

