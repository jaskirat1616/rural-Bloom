import Link from "next/link"
import { MapPinIcon, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Plus, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
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
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-50">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-xl font-bold">John Doe</h2>
                      <p className="text-sm text-gray-500">Farm Manager</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>Riverdale, NY</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <span className="text-sm">john.doe@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-gray-500" />
                      <span className="text-sm">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <span className="text-sm">Riverdale, NY 10471</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Skills</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Farm Management</Badge>
                    <Badge variant="secondary">Crop Planning</Badge>
                    <Badge variant="secondary">Irrigation</Badge>
                    <Badge variant="secondary">Organic Farming</Badge>
                    <Badge variant="secondary">Team Leadership</Badge>
                    <Badge variant="secondary">Equipment Maintenance</Badge>
                    <Badge variant="secondary">Pest Management</Badge>
                    <Badge variant="secondary">Soil Health</Badge>
                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                      <Plus className="mr-1 h-3 w-3" />
                      Add Skill
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Tabs defaultValue="profile">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="applications">Applications</TabsTrigger>
                  <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="space-y-6 pt-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">About Me</CardTitle>
                        <CardDescription>Tell employers about yourself</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        Experienced farm manager with over 8 years of experience in organic vegetable production, team
                        leadership, and sustainable farming practices. Passionate about regenerative agriculture and
                        building resilient local food systems. Skilled in crop planning, irrigation management, and farm
                        equipment maintenance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Work Experience</CardTitle>
                        <CardDescription>Your professional history</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Farm Manager</h3>
                              <p className="text-sm">Green Valley Farms</p>
                              <p className="text-xs text-gray-500">Jan 2020 - Present • 3 years, 4 months</p>
                              <p className="text-xs text-gray-500">Hudson Valley, NY</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                              <Briefcase className="h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                          <div className="mt-4 text-sm text-gray-500">
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Managed 120-acre organic vegetable farm</li>
                              <li>Supervised team of 8 full-time and 15 seasonal employees</li>
                              <li>Implemented water-saving irrigation techniques</li>
                              <li>Increased crop yields by 25% through improved soil management</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Assistant Farm Manager</h3>
                              <p className="text-sm">Sunrise Organic Farm</p>
                              <p className="text-xs text-gray-500">Mar 2017 - Dec 2019 • 2 years, 10 months</p>
                              <p className="text-xs text-gray-500">Catskills, NY</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                              <Briefcase className="h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                          <div className="mt-4 text-sm text-gray-500">
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Assisted in managing 75-acre diversified vegetable farm</li>
                              <li>Coordinated harvest schedules and post-harvest handling</li>
                              <li>Maintained farm equipment and irrigation systems</li>
                              <li>Helped implement organic certification standards</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Education</CardTitle>
                        <CardDescription>Your academic background</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Bachelor of Science in Agriculture</h3>
                              <p className="text-sm">Cornell University</p>
                              <p className="text-xs text-gray-500">2013 - 2017</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                              <GraduationCap className="h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Certifications</CardTitle>
                        <CardDescription>Professional certifications and licenses</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Certified Organic Farm Manager</h3>
                              <p className="text-sm">Northeast Organic Farming Association</p>
                              <p className="text-xs text-gray-500">Issued Jan 2019 • No Expiration</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                              <Award className="h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Pesticide Applicator License</h3>
                              <p className="text-sm">New York State Department of Environmental Conservation</p>
                              <p className="text-xs text-gray-500">Issued Mar 2018 • Expires Mar 2026</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                              <Award className="h-5 w-5 text-gray-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="applications" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Job Applications</CardTitle>
                      <CardDescription>Track your job application status</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Farm Manager</h3>
                              <p className="text-sm">Green Acres</p>
                              <p className="text-xs text-gray-500">Applied on Apr 1, 2025</p>
                            </div>
                            <Badge>In Review</Badge>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Agricultural Technician</h3>
                              <p className="text-sm">Tech Farm</p>
                              <p className="text-xs text-gray-500">Applied on Mar 25, 2025</p>
                            </div>
                            <Badge variant="outline">Pending</Badge>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Organic Farm Assistant</h3>
                              <p className="text-sm">Nature's Bounty</p>
                              <p className="text-xs text-gray-500">Applied on Mar 15, 2025</p>
                            </div>
                            <Badge variant="secondary">Interview Scheduled</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-6">
                      <Button variant="outline" className="w-full">
                        View All Applications
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="saved" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Saved Jobs</CardTitle>
                      <CardDescription>Jobs you've bookmarked for later</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Livestock Caretaker</h3>
                              <p className="text-sm">Happy Ranch</p>
                              <p className="text-xs text-gray-500">Saved on Apr 2, 2025</p>
                            </div>
                            <Button size="sm">Apply</Button>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Farmers Market Coordinator</h3>
                              <p className="text-sm">Local Harvest</p>
                              <p className="text-xs text-gray-500">Saved on Mar 28, 2025</p>
                            </div>
                            <Button size="sm">Apply</Button>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-medium">Vineyard Worker</h3>
                              <p className="text-sm">Hillside Winery</p>
                              <p className="text-xs text-gray-500">Saved on Mar 20, 2025</p>
                            </div>
                            <Button size="sm">Apply</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-6">
                      <Button variant="outline" className="w-full">
                        View All Saved Jobs
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Account Settings</CardTitle>
                      <CardDescription>Manage your account preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Email Notifications</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">Job recommendations</p>
                          <div className="h-6 w-11 rounded-full bg-green-600 p-1">
                            <div className="h-4 w-4 rounded-full bg-white translate-x-5"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">Application updates</p>
                          <div className="h-6 w-11 rounded-full bg-green-600 p-1">
                            <div className="h-4 w-4 rounded-full bg-white translate-x-5"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">Marketing emails</p>
                          <div className="h-6 w-11 rounded-full bg-gray-200 p-1">
                            <div className="h-4 w-4 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Privacy Settings</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">Profile visibility</p>
                          <div className="h-6 w-11 rounded-full bg-green-600 p-1">
                            <div className="h-4 w-4 rounded-full bg-white translate-x-5"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">Share application history</p>
                          <div className="h-6 w-11 rounded-full bg-gray-200 p-1">
                            <div className="h-4 w-4 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-6">
                      <Button className="w-full">Save Changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
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

