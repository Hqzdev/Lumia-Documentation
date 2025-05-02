"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function APIKeyPage() {
  const [apiKey, setApiKey] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateAPIKey = () => {
    setIsGenerating(true)
    // Simulate API key generation
    setTimeout(() => {
      const newKey = `Yumi_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`
      setApiKey(newKey)
      setIsGenerating(false)
    }, 1500)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Generate Your <span className="text-blue-600">API Key</span>
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Get your unique API key to start using Yumi AI
      </p>

      <Card className="rounded-2xl max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>API Key Generator</CardTitle>
          <CardDescription>
            Generate a unique API key for accessing Yumi AI services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Input
                value={apiKey}
                readOnly
                placeholder="Your API key will appear here"
                className="rounded-2xl"
              />
              {apiKey && (
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="rounded-2xl"
                >
                  {copied ? "Copied!" : "Copy"}
                </Button>
              )}
            </div>
            <Button
              onClick={generateAPIKey}
              disabled={isGenerating}
              className="w-full bg-blue-600 text-white rounded-2xl hover:bg-blue-700"
            >
              {isGenerating ? "Generating..." : "Generate API Key"}
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Important Notes:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Keep your API key secure and never share it publicly</li>
              <li>Your API key is unique to your account</li>
              <li>You can regenerate your API key at any time</li>
              <li>API keys have rate limits based on your subscription plan</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Next Steps:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Add your API key to your environment variables</li>
              <li>Configure your application to use the API key</li>
              <li>Start making API calls to Yumi AI services</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 