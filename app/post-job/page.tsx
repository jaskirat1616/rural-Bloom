"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPinIcon, CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PostJobPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [jobPosted, setJobPosted] = useState(false)

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form logic would go here
      setJobPosted(true)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (jobPosted) {
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
        <main className="flex-1 flex items-center justify-center bg-gray-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckIcon className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">Job Posted Successfully!</CardTitle>
              <CardDescription>
                Your job listing has been submitted and will be visible to candidates shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border bg-gray-50 p-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">What happens next?</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li className="flex items-start">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                      <span>Your job will be reviewed by our team</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                      <span>Once approved, it will appear on the job board</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                      <span>You'll receive notifications when candidates apply</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Link href="/dashboard" className="w-full">
                <Button className="w-full">Go to Dashboard</Button>
              </Link>
              <Link href="/post-job" className="w-full">
                <Button variant="outline" className="w-full">
                  Post Another Job
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
        <footer className="border-t bg-white">
          <div className="container py-6 px-4 md:px-6 text-center text-sm text-gray-500">
            <p>© 2025 RuraBloom. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }

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
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Post a Job</h1>
              <p className="mt-2 text-gray-500">Connect with qualified candidates in rural communities</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    currentStep >= 1
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-300 bg-white text-gray-500"
                  }`}
                >
                  {currentStep > 1 ? <CheckIcon className="h-5 w-5" /> : "1"}
                </div>
                <div className={`mx-2 h-1 w-10 ${currentStep > 1 ? "bg-green-600" : "bg-gray-300"}`} />
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    currentStep >= 2
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-300 bg-white text-gray-500"
                  }`}
                >
                  {currentStep > 2 ? <CheckIcon className="h-5 w-5" /> : "2"}
                </div>
                <div className={`mx-2 h-1 w-10 ${currentStep > 2 ? "bg-green-600" : "bg-gray-300"}`} />
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    currentStep >= 3
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-300 bg-white text-gray-500"
                  }`}
                >
                  3
                </div>
              </div>
              <div className="text-sm text-gray-500">Step {currentStep} of 3</div>
            </div>

            <Card>
              {currentStep === 1 && (
                <>
                  <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                    <CardDescription>Provide the basic information about the job position</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Job Title</Label>
                      <Input id="job-title" placeholder="e.g. Farm Manager, Harvest Helper" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="job-type">Job Type</Label>
                        <Select defaultValue="full-time">
                          <SelectTrigger id="job-type">
                            <SelectValue placeholder="Select job type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="seasonal">Seasonal</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select defaultValue="agriculture">
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="agriculture">Agriculture</SelectItem>
                            <SelectItem value="ranching">Ranching</SelectItem>
                            <SelectItem value="food-production">Food Production</SelectItem>
                            <SelectItem value="forestry">Forestry</SelectItem>
                            <SelectItem value="logistics">Logistics</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" placeholder="Your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="City, State or Remote" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="salary-min">Salary Range (Min)</Label>
                        <Input id="salary-min" placeholder="e.g. $30,000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="salary-max">Salary Range (Max)</Label>
                        <Input id="salary-max" placeholder="e.g. $50,000" />
                      </div>
                    </div>
                  </CardContent>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                    <CardDescription>Provide details about the job responsibilities and requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="description">Job Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the job role, responsibilities, and day-to-day activities"
                        className="min-h-[150px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requirements">Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="List the skills, qualifications, and experience required"
                        className="min-h-[150px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="benefits">Benefits (Optional)</Label>
                      <Textarea
                        id="benefits"
                        placeholder="Describe any benefits, perks, or additional compensation"
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <CardHeader>
                    <CardTitle>Posting Options</CardTitle>
                    <CardDescription>Choose your job posting plan and application settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Tabs defaultValue="standard">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="basic">Basic</TabsTrigger>
                        <TabsTrigger value="standard">Standard</TabsTrigger>
                        <TabsTrigger value="premium">Premium</TabsTrigger>
                      </TabsList>
                      <TabsContent value="basic" className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Basic Plan</h3>
                            <p className="font-medium">$49</p>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">30 days listing</p>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Standard listing visibility</span>
                            </li>
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Email applications</span>
                            </li>
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Free for all job seekers</span>
                            </li>
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="standard" className="space-y-4">
                        <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Standard Plan</h3>
                            <p className="font-medium">$99</p>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">45 days listing</p>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Featured listing for 7 days</span>
                            </li>
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Email applications</span>
                            </li>
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Application tracking</span>
                            </li>
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="premium" className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Premium Plan</h3>
                            <p className="font-medium">$199</p>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">60 days listing</p>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Featured listing for 30 days</span>
                            </li>
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Email applications</span>
                            </li>
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Application tracking</span>
                            </li>
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Featured in newsletter</span>
                            </li>
                            <li className="flex items-center">
                              <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                              <span>Social media promotion</span>
                            </li>
                          </ul>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-lg">
                      <p className="text-sm text-green-800 flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-green-600" />
                        <span>
                          <strong>Note:</strong> RuraBloom is completely free for job seekers. Only employers pay to
                          post jobs.
                        </span>
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="application-method">Application Method</Label>
                      <Select defaultValue="email">
                        <SelectTrigger id="application-method">
                          <SelectValue placeholder="Select application method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email Applications</SelectItem>
                          <SelectItem value="url">External URL</SelectItem>
                          <SelectItem value="form">Custom Application Form</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="application-email">Application Email</Label>
                      <Input id="application-email" type="email" placeholder="Where to receive applications" />
                    </div>
                  </CardContent>
                </>
              )}

              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 1}>
                  Back
                </Button>
                <Button onClick={handleNextStep}>{currentStep < 3 ? "Continue" : "Post Job"}</Button>
              </CardFooter>
            </Card>
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

