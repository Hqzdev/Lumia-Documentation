"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function ReleaseNotesPage() {
  const [expandedVersions, setExpandedVersions] = useState<string[]>([])

  const toggleVersion = (version: string) => {
    setExpandedVersions(prev =>
      prev.includes(version)
        ? prev.filter(v => v !== version)
        : [...prev, version]
    )
  }

  const releases = [
    {
      version: "2.0.0",
      date: "2024-04-01",
      type: "major",
      highlights: [
        "Complete UI redesign with modern components",
        "New chat interface with streaming support",
        "Enhanced API documentation with interactive examples",
        "Improved performance and reliability"
      ],
      changes: [
        {
          type: "added",
          items: [
            "New chat interface component",
            "Streaming response support",
            "Interactive API documentation",
            "Dark mode support"
          ]
        },
        {
          type: "changed",
          items: [
            "Updated UI components library",
            "Improved error handling",
            "Enhanced performance optimizations"
          ]
        },
        {
          type: "fixed",
          items: [
            "Fixed memory leaks in chat interface",
            "Resolved API rate limiting issues",
            "Corrected documentation typos"
          ]
        }
      ]
    },
    {
      version: "1.2.0",
      date: "2024-03-15",
      type: "minor",
      highlights: [
        "New integrations with popular platforms",
        "Enhanced security features",
        "Improved error handling"
      ],
      changes: [
        {
          type: "added",
          items: [
            "Slack integration",
            "Telegram bot support",
            "Discord integration"
          ]
        },
        {
          type: "changed",
          items: [
            "Updated authentication system",
            "Improved API response times"
          ]
        },
        {
          type: "fixed",
          items: [
            "Fixed authentication token issues",
            "Resolved API endpoint errors"
          ]
        }
      ]
    },
    {
      version: "1.1.0",
      date: "2024-02-28",
      type: "minor",
      highlights: [
        "New features and improvements",
        "Bug fixes and optimizations"
      ],
      changes: [
        {
          type: "added",
          items: [
            "New text generation models",
            "Enhanced documentation"
          ]
        },
        {
          type: "changed",
          items: [
            "Improved API performance",
            "Updated error messages"
          ]
        },
        {
          type: "fixed",
          items: [
            "Fixed rate limiting issues",
            "Resolved documentation errors"
          ]
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        <span className="text-blue-600">Release Notes</span>
      </h1>
      <p className="text-xl text-gray-700 mb-12">
        Stay updated with the latest changes and improvements
      </p>

      <div className="space-y-8">
        {releases.map((release) => (
          <Card key={release.version} className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <CardTitle className="text-2xl">v{release.version}</CardTitle>
                  <Badge
                    variant={
                      release.type === "major"
                        ? "destructive"
                        : release.type === "minor"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {release.type}
                  </Badge>
                </div>
                <div className="text-gray-500">{release.date}</div>
              </div>
              <CardDescription>
                {release.highlights.join(" • ")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {release.changes.map((changeGroup) => (
                  <div key={changeGroup.type} className="space-y-2">
                    <h3 className="font-medium text-gray-900 capitalize">
                      {changeGroup.type}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {changeGroup.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 