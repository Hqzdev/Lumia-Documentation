import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Slack } from "lucide-react"
import Link from "next/link"

export default function SlackIntegrationPage() {
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
            <Slack className="h-8 w-8 text-[#4A154B]" />
          </div>
          <h1 className="text-4xl font-bold">Slack Integration</h1>
        </div>

        <p className="text-xl text-gray-600 mb-12">
          Connect Yumi AI with your Slack workspace to enable AI-powered conversations and automation.
        </p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Set up Yumi AI in your Slack workspace</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>Install the Yumi AI app from the Slack App Directory</li>
                <li>Authorize the app to access your workspace</li>
                <li>Configure your API key in the app settings</li>
                <li>Start using AI features in your channels</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>What you can do with Yumi AI in Slack</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Real-time chat responses in channels</li>
                <li>Custom command triggers with /commands</li>
                <li>File analysis and processing</li>
                <li>Channel-specific AI assistants</li>
                <li>Automated workflows and notifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Customize your Slack integration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">API Key Setup</h3>
                  <p className="text-gray-700 mb-4">
                    Add your Yumi AI API key to enable the integration:
                  </p>
                  <code className="block p-4 bg-gray-100 rounded-lg text-sm">
                    /Yumi config api_key YOUR_API_KEY
                  </code>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Channel Configuration</h3>
                  <p className="text-gray-700 mb-4">
                    Configure which channels can use AI features:
                  </p>
                  <code className="block p-4 bg-gray-100 rounded-lg text-sm">
                    /Yumi config channel #channel-name
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