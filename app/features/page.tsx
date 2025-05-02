"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, MessageSquare, Zap, Shield, Cpu, Settings } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        <span className="text-blue-600">Features</span>
      </h1>
      <p className="text-xl text-gray-700 mb-12">
        Discover the powerful capabilities of Yumi AI
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Text Generation */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Text Generation</CardTitle>
            <CardDescription>Generate high-quality text for any use case</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• Creative writing and content generation</li>
              <li>• Technical documentation</li>
              <li>• Marketing copy and social media posts</li>
              <li>• Customizable parameters for fine-tuning</li>
            </ul>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Chat Interface</CardTitle>
            <CardDescription>Build interactive chat applications</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• Real-time streaming responses</li>
              <li>• Message history management</li>
              <li>• Customizable UI components</li>
              <li>• Error handling and retry logic</li>
            </ul>
          </CardContent>
        </Card>

        {/* Performance */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>High Performance</CardTitle>
            <CardDescription>Optimized for speed and reliability</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• Fast response times</li>
              <li>• Efficient resource usage</li>
              <li>• Request batching</li>
              <li>• Caching mechanisms</li>
            </ul>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Enterprise Security</CardTitle>
            <CardDescription>Built with security in mind</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• API key authentication</li>
              <li>• Rate limiting</li>
              <li>• Data encryption</li>
              <li>• Compliance standards</li>
            </ul>
          </CardContent>
        </Card>

        {/* Models */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Advanced Models</CardTitle>
            <CardDescription>State-of-the-art AI models</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• Multiple model options</li>
              <li>• Fine-tuning capabilities</li>
              <li>• Custom model configurations</li>
              <li>• Model versioning</li>
            </ul>
          </CardContent>
        </Card>

        {/* Customization */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Customization</CardTitle>
            <CardDescription>Tailor to your specific needs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• Custom parameters</li>
              <li>• System prompts</li>
              <li>• Response formatting</li>
              <li>• Integration options</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 