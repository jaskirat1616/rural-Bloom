"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/jobs" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Find Jobs
            </Link>
            <Link href="/map" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Job Map
            </Link>
            <Link href="/post-job" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Post a Job
            </Link>
            <Link href="/about" className="text-lg font-medium" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/resources" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Resources
            </Link>
            <Link href="/blog" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-2">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)}>
              <Button className="w-full">Sign up</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

