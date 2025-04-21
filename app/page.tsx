import Link from "next/link"

import React from 'react';

import {
  BriefcaseIcon,
  SearchIcon,
  FilterIcon,
  TrendingUpIcon,
  ChevronRightIcon,
  StarIcon,
  BarChartIcon,
  UsersIcon,
  ArrowRightIcon,
  MailIcon,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import JobMap from "@/components/job-map"
import FeaturedJobs from "@/components/featured-jobs"
import JobCategories from "@/components/job-categories"
import SalaryRangeSlider from "@/components/salary-range-slider"
import LocationSearch from "@/components/location-search"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mb-4">
                Rural Job Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Rural Jobs Near You</h1>
              <p className="text-gray-600 text-lg mb-8">
                Select a location on the map, and we'll show you job opportunities in rural areas. Get insights on
                available positions, salary ranges, and application details.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="flex-1 max-w-xs">
                  Find Jobs
                  <SearchIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="flex-1 max-w-xs">
                  For Employers
                  <BriefcaseIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                  <span>No Registration Required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
                  <span>Direct Applications</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="border-b border-gray-100 p-4 flex flex-col md:flex-row gap-4 items-center">
                <LocationSearch />

                <div className="w-px h-8 bg-gray-200 hidden md:block"></div>

                <div className="flex-1 min-w-0">
                  <SalaryRangeSlider />
                </div>

                <div className="w-px h-8 bg-gray-200 hidden md:block"></div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="h-9">
                    <FilterIcon className="mr-2 h-3.5 w-3.5" />
                    Filters
                  </Button>
                  <Button size="sm" className="h-9">
                    Search
                  </Button>
                </div>
              </div>

              <div className="h-[500px]">
                <JobMap />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Browse by Category</h2>
              <Link href="/categories" className="text-green-600 text-sm font-medium flex items-center">
                View all categories
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <JobCategories />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Trending Jobs</h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-full">
                  <TrendingUpIcon className="mr-1 h-3 w-3" />
                  Updated today
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="featured" className="mb-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>

              <TabsContent value="featured" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeaturedJobs />
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeaturedJobs />
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeaturedJobs />
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center">
              <Link href="/jobs">
                <Button variant="outline" size="lg">
                  View All Jobs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mb-4">
                How It Works
              </div>
              <h2 className="text-3xl font-bold mb-4">Simple Steps to Find Your Rural Job</h2>
              <p className="text-gray-600">RuraBloom makes it easy to discover opportunities in rural communities</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SearchIcon className="h-8 w-8 text-green-600" />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mb-4">
                    Step 1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Find a Job</h3>
                  <p className="text-gray-600 text-sm">
                    Choose your preferred rural area or allow us to detect your location
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FilterIcon className="h-8 w-8 text-green-600" />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mb-4">
                    Step 2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Filter Results</h3>
                  <p className="text-gray-600 text-sm">Narrow down jobs by category, salary range, and job type</p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-green-600" />
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mb-4">
                    Step 3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Apply Directly</h3>
                  <p className="text-gray-600 text-sm">Submit your application directly to employers with no fees</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mb-4">
                  Platform Statistics
                </div>
                <h2 className="text-3xl font-bold mb-6">Connecting Rural Communities</h2>
                <p className="text-gray-600 mb-8">
                  RuraBloom is dedicated to bridging the gap between rural employers and job seekers, creating
                  opportunities and strengthening local economies.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <BriefcaseIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">5,200+</div>
                        <div className="text-sm text-gray-500">Active Jobs</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <SearchIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">850+</div>
                        <div className="text-sm text-gray-500">Rural Areas</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <UsersIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">12,000+</div>
                        <div className="text-sm text-gray-500">Job Seekers</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <BarChartIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">92%</div>
                        <div className="text-sm text-gray-500">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 rounded-full p-2">
                      <StarIcon className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-gray-600 italic mb-2">
                        "RuraBloom helped me find a perfect job at a local farm that I never would have discovered
                        otherwise. The map feature made it easy to find opportunities near me."
                      </p>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Farm Assistant, Green Valley Farms</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 rounded-full p-2">
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <p className="text-gray-600 italic mb-2">
                          "As a small rural business owner, I struggled to find qualified local talent until I
                          discovered RuraBloom. I've hired three full-time employees through the platform."
                      </p>
                      <div className="font-medium">Michael Rodriguez</div>
                      <div className="text-sm text-gray-500">Owner, Sunrise Organic Dairy</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 rounded-full p-2">
                        <StarIcon className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <p className="text-gray-600 italic mb-2">
                          "The salary filter helped me find jobs that matched my experience and expectations. I
                          appreciated being able to see everything on the map."
                        </p>
                        <div className="font-medium">Emily Chen</div>
                        <div className="text-sm text-gray-500">Agricultural Technician, TechFarm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mb-4">
                  Stay Updated
                </div>
                <h2 className="text-3xl font-bold mb-4">Never Miss a Rural Opportunity</h2>
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter to receive personalized job alerts, rural community insights, and tips for
                  finding or posting jobs in rural areas.
                </p>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <Button size="lg">
                    Subscribe
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from RuraBloom.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-4">Job Alert Preferences</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Customize your job alerts to receive notifications for positions that match your criteria:
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Job Categories</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer bg-green-50 border-green-200 text-green-700">
                        Agriculture
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer">
                        Ranching
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer">
                        Food Production
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer">
                        Forestry
                      </Badge>
                      <Badge variant="outline" className="cursor-pointer">
                        Logistics
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Job Type</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer bg-green-50 border-green-200 text-green-700">
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

                  <div>
                    <label className="text-sm font-medium mb-1 block">Salary Range</label>
                    <div className="h-2 bg-gray-100 rounded-full relative mb-2">
                      <div className="absolute h-full w-1/2 bg-green-500 rounded-full"></div>
                      <div className="absolute h-4 w-4 bg-white border border-green-500 rounded-full top-1/2 left-1/2 transform -translate-y-1/2"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$30,000</span>
                      <span>$75,000+</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Alert Frequency</label>
                    <select className="w-full p-2 border border-gray-200 rounded-lg text-sm">
                      <option>Daily Digest</option>
                      <option>Instant Alerts</option>
                      <option>Weekly Summary</option>
                    </select>
                  </div>

                  <Button className="w-full">Save Preferences</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mb-4">
                For Employers
              </div>
              <h2 className="text-3xl font-bold mb-4">Post a Job</h2>
              <p className="text-gray-600">
                Connect with qualified candidates specifically interested in rural opportunities
              </p>
              <div className="mt-8">
                <Link href="/post-job">
                  <Button size="lg">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

