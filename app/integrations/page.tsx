"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, MessageSquare, Slack } from "lucide-react"
import Link from "next/link"

export default function IntegrationsPage() {
  const integrations = [
    {
      title: "Slack Integration",
      description: "Connect Lumia AI with your Slack workspace to enable AI-powered conversations and automation.",
      icon: Slack,
      href: "/integrations/slack"
    },
    {
      title: "Discord Integration",
      description: "Bring AI capabilities to your Discord server with our easy-to-use integration.",
      icon: MessageSquare,
      href: "/integrations/discord"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Integrations</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Connect Lumia AI with your favorite services and platforms
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{integration.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{integration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700"
                    asChild
                  >
                    <a href={integration.href}>
                      Learn more <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
} 