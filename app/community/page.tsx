import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, MessageSquare, Users } from "lucide-react"

export default function CommunityPage() {
  const communitySections = [
    {
      title: "GitHub Discussions",
      description: "Join our GitHub community to discuss features, report issues, and share your projects.",
      icon: Github,
      action: "Join Discussion",
      href: "https://github.com/Hqzdev/nextjs-ai/discussions"
    },
    {
      title: "Community Forum",
      description: "Connect with other developers, share experiences, and get help from the community.",
      icon: MessageSquare,
      action: "Visit Forum",
      href: "/community/forum"
    },
    {
      title: "Community Projects",
      description: "Discover projects built with Lumia AI and share your own creations.",
      icon: Users,
      action: "View Projects",
      href: "/community/projects"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Community</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Join our growing community of developers and AI enthusiasts
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {communitySections.map((section, index) => {
            const Icon = section.icon
            return (
              <Card key={index} className="hover:translate-y-[-5px] border-2 border-gray-200 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700"
                    asChild
                  >
                    <a href={section.href} target={section.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      {section.action}
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