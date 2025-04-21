import Link from "next/link"
import { MapPinIcon, Search, Filter, List, MapIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SalaryRangeSlider from "@/components/salary-range-slider"
import LocationSearch from "@/components/location-search"
import MapboxGL from 'mapbox-gl'; // Import Mapbox GL
import { useEffect } from "react"

// Replace the JobMap component with a Mapbox map
const JobMap = () => {
  useEffect(() => {
    MapboxGL.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Set your Mapbox access token
    const map = new MapboxGL.Map({
      container: 'map', // ID of the element to render the map
      style: 'mapbox://styles/mapbox/streets-v11', // Map style
      center: [-74.5, 40], // Starting position [lng, lat]
      zoom: 9 // Starting zoom level
    });

    return () => map.remove(); // Cleanup on unmount
  }, []);

  return <div id="map" className="h-full" />; // Map container
};

export default function MapPage() {
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

      <main className="flex-1 flex flex-col">
        <div className="container px-4 py-4 md:px-6 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Job Map</h1>
            <Tabs defaultValue="map" className="w-full md:w-auto">
              <TabsList className="grid w-full md:w-auto grid-cols-2">
                <TabsTrigger value="map" className="flex items-center">
                  <MapIcon className="mr-2 h-4 w-4" />
                  Map View
                </TabsTrigger>
                <TabsTrigger value="list" className="flex items-center">
                  <List className="mr-2 h-4 w-4" />
                  List View
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-6 md:grid-cols-[300px_1fr]">
            <div className="space-y-6 order-2 md:order-1">
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h2 className="font-medium mb-4">Search Filters</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Location</label>
                    <LocationSearch />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Radius</label>
                    <select className="w-full p-2 text-sm border rounded-md">
                      <option>5 miles</option>
                      <option>10 miles</option>
                      <option selected>25 miles</option>
                      <option>50 miles</option>
                      <option>100 miles</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Salary Range</label>
                    <SalaryRangeSlider />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Type</label>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Full-time</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Part-time</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Contract</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Seasonal</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Categories</label>
                    <select className="w-full p-2 text-sm border rounded-md">
                      <option>All Categories</option>
                      <option>Agriculture</option>
                      <option>Ranching</option>
                      <option>Food Production</option>
                      <option>Forestry</option>
                      <option>Logistics</option>
                    </select>
                  </div>

                  <Button className="w-full">
                    <Filter className="mr-2 h-4 w-4" />
                    Apply Filters
                  </Button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <h2 className="font-medium mb-4">Job Alerts</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Get notified when new jobs matching your criteria are posted.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="text-sm" />
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <TabsContent value="map" className="mt-0">
                <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                  <div className="h-[calc(100vh-200px)] min-h-[500px]">
                    <JobMap />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="list" className="mt-0">
                <div className="bg-white rounded-lg border shadow-sm p-4">
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="Search jobs..." className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((job) => (
                      <div key={job} className="p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">Farm Manager</h3>
                            <p className="text-sm text-gray-500">Green Acres • Riverdale, NY</p>
                          </div>
                          <div className="text-sm text-gray-500">2 days ago</div>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="mr-4">Full-time</span>
                          <span>$45,000 - $55,000</span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex gap-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Agriculture</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Management</span>
                          </div>
                          <Link href={`/jobs/${job}`}>
                            <Button size="sm">View Details</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button variant="outline">Load More</Button>
                  </div>
                </div>
              </TabsContent>
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

