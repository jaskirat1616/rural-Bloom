import Link from "next/link"
import { Tractor, Wheat, Leaf, Mountain, Truck, Building, Utensils, Trees, Droplets, Wrench } from "lucide-react"

const categories = [
  {
    id: "agriculture",
    name: "Agriculture",
    icon: Wheat,
    count: 1245,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "ranching",
    name: "Ranching",
    icon: Tractor,
    count: 863,
    color: "bg-green-50 text-green-600",
  },
  {
    id: "food-production",
    name: "Food Production",
    icon: Utensils,
    count: 742,
    color: "bg-red-50 text-red-600",
  },
  {
    id: "forestry",
    name: "Forestry",
    icon: Trees,
    count: 531,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    count: 428,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "construction",
    name: "Construction",
    icon: Building,
    count: 395,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    id: "conservation",
    name: "Conservation",
    icon: Leaf,
    count: 312,
    color: "bg-lime-50 text-lime-600",
  },
  {
    id: "tourism",
    name: "Rural Tourism",
    icon: Mountain,
    count: 287,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "water-management",
    name: "Water Management",
    icon: Droplets,
    count: 245,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: Wrench,
    count: 198,
    color: "bg-gray-50 text-gray-600",
  },
]

export default function JobCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/jobs/categories/${category.id}`}
          className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
        >
          <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mb-3`}>
            <category.icon className="h-6 w-6" />
          </div>
          <h3 className="font-medium text-sm mb-1">{category.name}</h3>
          <p className="text-xs text-gray-500">{category.count} jobs</p>
        </Link>
      ))}
    </div>
  )
}

