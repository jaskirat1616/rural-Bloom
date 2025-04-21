import Link from "next/link"
import { MapPinIcon, BookOpen, FileText, Download, Video, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
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
              Knowledge Center
            </div>
            <h1 className="text-3xl font-bold mb-4">Rural Career Resources</h1>
            <p className="text-gray-600">
              Explore our collection of guides, templates, and tools to help you succeed in rural employment
            </p>

            <div className="mt-6 relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search resources..." className="pl-10" />
            </div>
          </div>

          <Tabs defaultValue="guides" className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="guides" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Rural Job Search Strategies",
                    description: "Learn effective techniques for finding employment in rural communities",
                    category: "Job Seekers",
                    readTime: "8 min read",
                  },
                  {
                    title: "Agricultural Career Paths",
                    description: "Explore various career opportunities in the agricultural sector",
                    category: "Career Planning",
                    readTime: "12 min read",
                  },
                  {
                    title: "Remote Work in Rural Areas",
                    description: "Tips for finding and succeeding in remote positions while living rurally",
                    category: "Remote Work",
                    readTime: "10 min read",
                  },
                  {
                    title: "Rural Small Business Guide",
                    description: "Starting and growing a business in a rural community",
                    category: "Entrepreneurship",
                    readTime: "15 min read",
                  },
                  {
                    title: "Seasonal Employment Guide",
                    description: "Making the most of seasonal job opportunities in rural areas",
                    category: "Seasonal Work",
                    readTime: "7 min read",
                  },
                  {
                    title: "Rural Housing Solutions",
                    description: "Finding affordable housing options near rural employment",
                    category: "Relocation",
                    readTime: "9 min read",
                  },
                ].map((guide, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-0">
                      <div className="text-xs text-gray-500 mb-2">
                        {guide.category} • {guide.readTime}
                      </div>
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                        <BookOpen className="h-10 w-10 text-gray-300" />
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 p-4">
                      <Link href={`/resources/guides/${index + 1}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          Read Guide
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="templates" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Rural-Focused Resume",
                    description: "Resume template highlighting rural skills and experience",
                    format: "DOCX, PDF",
                  },
                  {
                    title: "Farm Manager Cover Letter",
                    description: "Template for applying to agricultural management positions",
                    format: "DOCX, PDF",
                  },
                  {
                    title: "Rural Business Plan",
                    description: "Template for creating a business plan for rural enterprises",
                    format: "XLSX, PDF",
                  },
                  {
                    title: "Seasonal Work Contract",
                    description: "Legal template for seasonal employment agreements",
                    format: "DOCX, PDF",
                  },
                  {
                    title: "Farm Inventory Tracker",
                    description: "Spreadsheet template for tracking farm inventory and supplies",
                    format: "XLSX",
                  },
                  {
                    title: "Rural Job Application Tracker",
                    description: "Template to organize and track your rural job applications",
                    format: "XLSX, PDF",
                  },
                ].map((template, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Available formats: {template.format}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Rural Job Interview Tips",
                    description: "Expert advice on acing interviews for rural positions",
                    duration: "12:45",
                  },
                  {
                    title: "Day in the Life: Farm Manager",
                    description: "Follow a farm manager through their daily responsibilities",
                    duration: "18:32",
                  },
                  {
                    title: "Rural Entrepreneurship Success Stories",
                    description: "Interviews with successful rural business owners",
                    duration: "24:10",
                  },
                  {
                    title: "Sustainable Farming Practices",
                    description: "Learn about modern sustainable agricultural techniques",
                    duration: "15:20",
                  },
                  {
                    title: "Remote Work Setup Guide",
                    description: "Creating an effective home office in a rural setting",
                    duration: "09:45",
                  },
                  {
                    title: "Rural Community Development",
                    description: "How rural employment contributes to community growth",
                    duration: "21:18",
                  },
                ].map((video, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative">
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        <Video className="h-12 w-12 text-gray-300" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">Watch Video</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Rural Salary Calculator",
                    description: "Compare salaries across different rural regions",
                    category: "Financial",
                  },
                  {
                    title: "Relocation Cost Estimator",
                    description: "Calculate the costs of moving to a rural area for work",
                    category: "Financial",
                  },
                  {
                    title: "Skill Matcher",
                    description: "Find rural jobs that match your existing skillset",
                    category: "Career",
                  },
                  {
                    title: "Rural Internet Speed Checker",
                    description: "Test and compare internet speeds for remote work viability",
                    category: "Technology",
                  },
                  {
                    title: "Seasonal Work Calendar",
                    description: "Interactive calendar of seasonal job opportunities by region",
                    category: "Planning",
                  },
                  {
                    title: "Rural Grant Finder",
                    description: "Discover grants and funding for rural businesses and workers",
                    category: "Financial",
                  },
                ].map((tool, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="text-xs text-gray-500 mb-2">{tool.category}</div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Launch Tool
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-white rounded-lg border p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
                <p className="text-gray-600 mb-6">
                  Our rural career experts are available to provide one-on-one assistance with your job search, career
                  transition, or rural business development.
                </p>
                <Link href="/contact">
                  <Button size="lg">Schedule a Consultation</Button>
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium mb-4">Popular Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/resources/guides/1" className="flex items-center text-green-600 hover:underline">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Complete Guide to Rural Job Searching</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/templates/1" className="flex items-center text-green-600 hover:underline">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Rural-Specific Resume Templates</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/videos/1" className="flex items-center text-green-600 hover:underline">
                      <Video className="mr-2 h-4 w-4" />
                      <span>Webinar: Transitioning to Rural Employment</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/tools/1" className="flex items-center text-green-600 hover:underline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Rural Broadband Availability Map</span>
                    </Link>
                  </li>
                </ul>
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

