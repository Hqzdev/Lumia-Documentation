"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Star } from "lucide-react"

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "AI Content Generator",
      description: "A web application that generates high-quality content using Lumia AI",
      stars: 245,
      author: "johndoe",
      icon: Github
    },
    {
      title: "Smart Chat Assistant",
      description: "An intelligent chatbot powered by Lumia AI for customer support",
      stars: 189,
      author: "alice",
      icon: Github
    },
    {
      title: "AI Image Generator",
      description: "Generate stunning images from text descriptions using Lumia AI",
      stars: 156,
      author: "bob",
      icon: Github
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Community Projects</h1>
          <Button variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            Submit Project
          </Button>
        </div>

        <div className="grid gap-6">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={index} className="hover:translate-y-[-2px] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 rounded-full">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>by {project.author}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-600 mb-2">{project.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{project.stars} stars</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-blue-600">
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
