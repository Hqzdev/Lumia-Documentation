"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function APIReferencePage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("text-generation")
  const [apiKey, setApiKey] = useState("")

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        <span className="text-blue-600">API Reference</span>
      </h1>
      <p className="text-xl text-gray-700 mb-12">
        Interactive API documentation with live examples
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedEndpoint("text-generation")}
                  className={`w-full text-left p-2 rounded-lg transition-colors ${
                    selectedEndpoint === "text-generation"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Text Generation
                </button>
                <button
                  onClick={() => setSelectedEndpoint("chat")}
                  className={`w-full text-left p-2 rounded-lg transition-colors ${
                    selectedEndpoint === "chat"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => setSelectedEndpoint("embeddings")}
                  className={`w-full text-left p-2 rounded-lg transition-colors ${
                    selectedEndpoint === "embeddings"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Embeddings
                </button>
                <button
                  onClick={() => setSelectedEndpoint("moderation")}
                  className={`w-full text-left p-2 rounded-lg transition-colors ${
                    selectedEndpoint === "moderation"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Moderation
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>API Key</CardTitle>
              <CardDescription>
                Enter your <span className="text-blue-600">API key</span> to test the endpoints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="rounded-2xl"
              />
            </CardContent>
          </Card>

          <div className="mt-8">
            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>
              <TabsContent value="curl" className="mt-4">
                <Card className="rounded-2xl">
                  <CardContent className="p-4">
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                      <code>{`curl https://api.lumia.ai/v1/${selectedEndpoint} \\
  -H "Authorization: Bearer ${apiKey || 'YOUR_API_KEY'}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Hello, how are you?",
    "max_tokens": 100
  }'`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="javascript" className="mt-4">
                <Card className="rounded-2xl">
                  <CardContent className="p-4">
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                      <code>{`const response = await fetch('https://api.lumia.ai/v1/${selectedEndpoint}', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ${apiKey || 'YOUR_API_KEY'}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: "Hello, how are you?",
    max_tokens: 100
  })
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="python" className="mt-4">
                <Card className="rounded-2xl">
                  <CardContent className="p-4">
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                      <code>{`import requests

response = requests.post(
  'https://api.lumia.ai/v1/${selectedEndpoint}',
  headers={
    'Authorization': f'Bearer ${apiKey || 'YOUR_API_KEY'}',
    'Content-Type': 'application/json'
  },
  json={
    'prompt': 'Hello, how are you?',
    'max_tokens': 100
  }
)`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-8">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Response Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                  <code>{`{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "I'm doing well, thank you for asking! How can I help you today?"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 