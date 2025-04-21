"use client"

import type React from "react"

import { useState } from "react"
import { MapPinIcon, Locate } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Mock recent locations
const recentLocations = ["Hudson Valley, NY", "Finger Lakes, NY", "Catskills, NY", "Adirondacks, NY", "Riverdale, NY"]

export default function LocationSearch() {
  const [location, setLocation] = useState("")

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const selectLocation = (loc: string) => {
    setLocation(loc)
  }

  const detectLocation = () => {
    // In a real app, this would use the browser's geolocation API
    setLocation("Current Location")
  }

  return (
    <div className="relative w-full max-w-xs">
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter location"
              className="pl-9 pr-4 h-9"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-2" align="start">
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm" onClick={detectLocation}>
              <Locate className="mr-2 h-4 w-4 text-gray-500" />
              Detect my location
            </Button>

            {recentLocations.length > 0 && (
              <>
                <div className="px-2 py-1.5 text-xs font-medium text-gray-500">Recent locations</div>
                {recentLocations.map((loc, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-sm"
                    onClick={() => selectLocation(loc)}
                  >
                    <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                    {loc}
                  </Button>
                ))}
              </>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

