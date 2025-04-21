"use client"

import { useEffect, useState } from "react"
import { MapPinIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MapboxGL from 'mapbox-gl'; // Import Mapbox GL

// Mock data for job locations
const jobLocations = [
  { id: 1, lat: 40.7128, lng: -74.006, title: "Farm Manager", company: "Green Acres", type: "Full-time" },
  { id: 2, lat: 40.7328, lng: -74.026, title: "Harvest Helper", company: "Sunrise Farms", type: "Seasonal" },
  { id: 3, lat: 40.7228, lng: -73.986, title: "Agricultural Technician", company: "Tech Farm", type: "Full-time" },
  { id: 4, lat: 40.7028, lng: -74.016, title: "Livestock Caretaker", company: "Happy Ranch", type: "Part-time" },
  { id: 5, lat: 40.7528, lng: -73.996, title: "Organic Farm Assistant", company: "Nature's Bounty", type: "Full-time" },
  { id: 6, lat: 40.7428, lng: -74.036, title: "Rural Delivery Driver", company: "Country Goods", type: "Part-time" },
]

export default function SimpleMap() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  
  useEffect(() => {
    // Set Mapbox access token
    MapboxGL.accessToken = 'NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox access token

    // Initialize the map
    const map = new MapboxGL.Map({
      container: 'map', // ID of the element to render the map
      style: 'mapbox://styles/mapbox/streets-v11', // Map style
      center: [-74.006, 40.7128], // Starting position [lng, lat]
      zoom: 9 // Starting zoom level
    });

    // Add markers for job locations
    jobLocations.forEach(job => {
      const marker = new MapboxGL.Marker()
        .setLngLat([job.lng, job.lat])
        .setPopup(new MapboxGL.Popup().setHTML(`<h3>${job.title}</h3><p>${job.company}</p>`)) // Add popups
        .addTo(map);

      marker.getElement().addEventListener('click', () => {
        setSelectedJob(job.id === selectedJob ? null : job.id);
      });
    });

    return () => map.remove(); // Cleanup on unmount
  }, [selectedJob]);

  return (
    <div className="relative h-full w-full bg-gray-100">
      <div id="map" className="h-[500px] w-full rounded-lg" /> {/* Map container */}

      {/* Job info card */}
      {selectedJob && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-72 z-20">
          <Card>
            <CardContent className="p-4">
              {jobLocations
                .filter((job) => job.id === selectedJob)
                .map((job) => (
                  <div key={job.id} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{job.title}</h3>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-500">{job.company}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPinIcon className="mr-1 h-3 w-3" />
                      <span>
                        {job.lat.toFixed(2)}, {job.lng.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

