import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, BookOpen, AlertCircle } from "lucide-react"

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Documentation",
      description: "Browse our comprehensive documentation to find answers to common questions.",
      icon: BookOpen,
      action: "View Documentation",
      href: "/tutorials/getting-started"
    },
    {
      title: "Contact Support",
      description: "Get in touch with our support team for assistance with your specific needs.",
      icon: Mail,
      action: "Send Message",
      href: "mailto:support@Lumia.ai"
    },
    {
      title: "Report an Issue",
      description: "Found a bug or have a feature request? Let us know through our issue tracker.",
      icon: AlertCircle,
      action: "Create Issue",
      href: "https://github.com/Hqzdev/nextjs-ai/issues"
    },
    {
      title: "Community Support",
      description: "Join our community forum to get help from other users and share your experiences.",
      icon: MessageSquare,
      action: "Visit Forum",
      href: "/community/forum"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Support</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          We're here to help you succeed with Lumia AI
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {supportOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Card key={index} className="rounded-2xl border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>{option.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700"
                    asChild
                  >
                    <a href={option.href} target="_blank" rel="noopener noreferrer">
                      {option.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available Monday through Friday, 9:00 AM to 5:00 PM EST.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Contact Support Team
          </Button>
        </div>
      </div>
    </div>
  )
} 