"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"

export default function SalaryRangeSlider() {
  const [range, setRange] = useState([30000, 100000])

  const handleRangeChange = (value: number[]) => {
    setRange(value)
  }

  const formatSalary = (value: number) => {
    return `$${value.toLocaleString()}`
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">Salary Range</label>
        <span className="text-sm text-gray-500">
          {formatSalary(range[0])} - {formatSalary(range[1])}
        </span>
      </div>
      <Slider
        defaultValue={range}
        min={0}
        max={200000}
        step={5000}
        onValueChange={handleRangeChange}
        className="w-full"
      />
    </div>
  )
}

