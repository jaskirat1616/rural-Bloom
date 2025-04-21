import Link from "next/link"
import { MapPinIcon, Calendar, User, ArrowRight, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Rise of Remote Work in Rural Communities",
    excerpt:
      "How technology is enabling rural residents to access global job opportunities without leaving their communities.",
    date: "January 15, 2025",
    author: "Emily Johnson",
    category: "Remote Work",
    readTime: "8 min read",
    tags: ["Remote Work", "Rural Development", "Technology"],
  },
  {
    id: 2,
    title: "Sustainable Farming: Career Opportunities in Modern Agriculture",
    excerpt: "Exploring the diverse and growing career paths in sustainable and regenerative agriculture.",
    date: "January 8, 2025",
    author: "Michael Rodriguez",
    category: "Agriculture",
    readTime: "10 min read",
    tags: ["Agriculture", "Sustainability", "Careers"],
  },
  {
    id: 3,
    title: "Rural Healthcare: Addressing the Staffing Challenge",
    excerpt:
      "How rural communities are developing innovative solutions to attract and retain healthcare professionals.",
    date: "December 28, 2024",
    author: "Sarah Williams",
    category: "Healthcare",
    readTime: "12 min read",
    tags: ["Healthcare", "Rural Communities", "Recruitment"],
  },
  {
    id: 4,
    title: "Starting a Business in a Small Town: Success Stories",
    excerpt:
      "Profiles of entrepreneurs who have built thriving businesses in rural areas and the lessons they've learned.",
    date: "December 15, 2024",
    author: "David Chen",
    category: "Entrepreneurship",
    readTime: "15 min read",
    tags: ["Entrepreneurship", "Small Business", "Rural Economy"],
  },
  {
    id: 5,
    title: "The Economic Impact of Rural Tourism",
    excerpt: "How tourism is creating jobs and boosting local economies in rural communities across the country.",
    date: "December 5, 2024",
    author: "Jessica Martinez",
    category: "Tourism",
    readTime: "9 min read",
    tags: ["Tourism", "Economic Development", "Hospitality"],
  },
  {
    id: 6,
    title: "Bridging the Rural Digital Divide",
    excerpt: "Initiatives and technologies helping to improve internet access and digital literacy in rural areas.",
    date: "November 28, 2024",
    author: "Robert Kim",
    category: "Technology",
    readTime: "11 min read",
    tags: ["Technology", "Digital Divide", "Infrastructure"],
  },
]

// Featured post
const featuredPost = {
  id: 7,
  title: "The Future of Rural Employment: Trends and Opportunities",
  excerpt:
    "An in-depth analysis of emerging job sectors in rural areas and how communities can position themselves for economic growth in the coming decade.",
  date: "January 20, 2025",
  author: "Dr. Amanda Foster",
  category: "Research",
  readTime: "18 min read",
  tags: ["Research", "Economic Trends", "Future of Work", "Rural Development"],
}

export default function BlogPage() {
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
              RuraBloom Blog
            </div>
            <h1 className="text-3xl font-bold mb-4">Insights on Rural Employment</h1>
            <p className="text-gray-600">
              Expert perspectives, success stories, and resources for rural job seekers and employers
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gray-100 min-h-[300px] flex items-center justify-center">
                  <div className="text-gray-300 text-xl">Featured Image</div>
                </div>
                <div className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Badge variant="outline" className="text-green-600 bg-green-50">
                        Featured
                      </Badge>
                      <span>{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Link href={`/blog/${featuredPost.id}`} className="w-full">
                      <Button className="w-full">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-4">
                      <div className="bg-gray-100 min-h-[180px] flex items-center justify-center">
                        <div className="text-gray-300">Post Image</div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                            <span>•</span>
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <Link href={`/blog/${post.id}`}>
                            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                              Read More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Input placeholder="Search articles..." />
                    <Button className="absolute right-0 top-0 h-full rounded-l-none">Search</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Agriculture",
                      "Remote Work",
                      "Healthcare",
                      "Entrepreneurship",
                      "Tourism",
                      "Technology",
                      "Education",
                      "Manufacturing",
                    ].map((category) => (
                      <Link
                        key={category}
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between hover:text-green-600"
                      >
                        <span>{category}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Remote Work",
                      "Agriculture",
                      "Rural Development",
                      "Sustainability",
                      "Small Business",
                      "Healthcare",
                      "Technology",
                      "Education",
                      "Infrastructure",
                      "Community",
                    ].map((tag) => (
                      <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>Get the latest rural employment insights delivered to your inbox</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Your email address" type="email" />
                    <Button className="w-full">Subscribe</Button>
                  </form>
                </CardContent>
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

