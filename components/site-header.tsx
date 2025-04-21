import Link from "next/link"
import { MapPinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

export default function SiteHeader() {
  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <MobileMenu />
          <Link href="/" className="flex items-center gap-2">
            <MapPinIcon className="w-6 h-6 text-green-600" />
            <span className="text-xl font-semibold">RuraBloom</span>
          </Link>
        </div>
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
          <Link href="/resources" className="text-sm font-medium hover:underline underline-offset-4">
            Resources
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block">
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
  )
}

