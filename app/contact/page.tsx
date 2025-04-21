"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPinIcon, Mail, Phone, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    console.log("Form submitted:", formData)
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
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

      <main className="flex-1 bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Get in Touch</div>
            <h1 className="text-3xl font-bold tracking-tighter">Contact RuraBloom</h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px]">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 rounded-full bg-green-100 p-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold">Message Sent!</h3>
                      <p className="mb-6 text-gray-500">
                        Thank you for reaching out. We'll respond to your inquiry shortly.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help you?"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message here..."
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us directly using the information below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-gray-500">support@rurabloom.com</p>
                      <p className="text-sm text-gray-500">info@rurabloom.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-gray-500">(555) 123-4567</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 9am - 5pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office</h3>
                      <p className="text-sm text-gray-500">123 Rural Way</p>
                      <p className="text-sm text-gray-500">Farmington, NY 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">Is RuraBloom free for job seekers?</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Yes, RuraBloom is 100% free for all job seekers. We never charge fees to search for or apply to
                      jobs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">How do I post a job?</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Employers can post jobs by creating an account and selecting "Post a Job" from the main
                      navigation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">What areas does RuraBloom cover?</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      We currently focus on rural communities across the United States, with plans to expand
                      internationally.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/faq" className="text-green-600 text-sm font-medium hover:underline">
                    View all FAQs
                  </Link>
                </CardFooter>
              </Card>
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

