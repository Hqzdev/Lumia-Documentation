"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Tutorials() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        <span className="text-blue-600">Tutorials</span> & Guides
      </h1>
      <p className="text-xl text-gray-700 mb-12 max-w-3xl">
        Learn how to use <span className="text-blue-600">Lumia AI</span> with our step-by-step tutorials and comprehensive guides.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Getting Started */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Getting Started</span>
            </CardTitle>
            <CardDescription>Learn the basics of Lumia AI and set up your first project</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Installation and setup
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Basic configuration
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Your first AI response
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/tutorials/getting-started">
              <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                Start Learning <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Text Generation */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Text Generation</span>
            </CardTitle>
            <CardDescription>Master text generation with different models and parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Understanding models
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Prompt engineering
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Advanced parameters
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/tutorials/text-generation">
              <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Chat Interfaces */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Chat Interfaces</span>
            </CardTitle>
            <CardDescription>Build interactive chat applications with streaming responses</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Setting up the chat UI
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Handling streaming
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Managing chat history
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/tutorials/chat-interfaces">
              <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                Start Building <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Advanced Usage */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Advanced Usage</span>
            </CardTitle>
            <CardDescription>Learn advanced techniques and optimizations</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Custom model configuration
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Performance optimization
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                Error handling
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/tutorials/advanced">
              <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                Dive Deep <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 