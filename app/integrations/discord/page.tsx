import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function DiscordIntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/integrations" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Integrations
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-50 rounded-full">
            <MessageSquare className="h-8 w-8 text-[#5865F2]" />
          </div>
          <h1 className="text-4xl font-bold">Discord Integration</h1>
        </div>

        <p className="text-xl text-gray-600 mb-12">
          Bring AI capabilities to your Discord server with our easy-to-use integration.
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Set up Lumia AI in your Discord server</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>Invite the Lumia AI bot to your server</li>
                <li>Configure the bot permissions</li>
                <li>Set up your API key using the /config command</li>
                <li>Start using AI features in your channels</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>What you can do with Lumia AI in Discord</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Server-wide AI assistant</li>
                <li>Role-based access control</li>
                <li>Custom command system</li>
                <li>Voice channel integration</li>
                <li>Message history and context</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Customize your Discord integration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">API Key Setup</h3>
                  <p className="text-gray-700 mb-4">
                    Configure your API key using the slash command:
                  </p>
                  <code className="block p-4 bg-gray-100 rounded-lg text-sm">
                    /config api_key YOUR_API_KEY
                  </code>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Channel Permissions</h3>
                  <p className="text-gray-700 mb-4">
                    Set up channel-specific permissions:
                  </p>
                  <code className="block p-4 bg-gray-100 rounded-lg text-sm">
                    /config channel #channel-name
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 