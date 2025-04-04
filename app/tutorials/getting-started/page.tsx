"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function GettingStartedTutorial() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Getting Started with <span className="text-blue-600">Lumia AI</span>
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Learn how to set up and start using Lumia AI in your projects.
      </p>

      <div className="space-y-8">
        {/* Step 1: Installation */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 1:</span> Installation
            </CardTitle>
            <CardDescription>Setting up Lumia AI in your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Install the Lumia AI SDK using npm:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>npm install @ai-sdk/lumia</code>
              </pre>
              <p className="text-gray-700">Or using yarn:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>yarn add @ai-sdk/lumia</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Configuration */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 2:</span> Configuration
            </CardTitle>
            <CardDescription>Set up your environment and API key</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Create a configuration file:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`// config/lumia.ts
import { LumiaConfig } from '@ai-sdk/lumia';

export const config: LumiaConfig = {
  apiKey: process.env.LUMIA_API_KEY,
  defaultModel: 'Lumia-V2-Pro',
  // Optional: Configure default parameters
  defaultParams: {
    temperature: 0.7,
    maxTokens: 1000
  }
};`}</code>
              </pre>
              <p className="text-gray-700">Set up your environment variables:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`# .env.local
LUMIA_API_KEY=your_api_key_here`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Basic Usage */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 3:</span> Basic Usage
            </CardTitle>
            <CardDescription>Create your first AI interaction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Create a simple text generation example:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`import { generateText } from '@ai-sdk/lumia';

async function generateResponse() {
  try {
    const response = await generateText({
      prompt: 'Tell me about artificial intelligence',
      system: 'You are a helpful AI assistant.'
    });
    
    console.log(response.text);
  } catch (error) {
    console.error('Error:', error);
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Project Structure */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 4:</span> Project Structure
            </CardTitle>
            <CardDescription>Organize your Lumia AI project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Recommended project structure:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`your-project/
├── src/
│   ├── config/
│   │   └── lumia.ts
│   ├── services/
│   │   └── ai.service.ts
│   └── components/
│       └── AI/
│           ├── TextGeneration.tsx
│           └── ChatInterface.tsx
├── .env.local
└── package.json`}</code>
              </pre>
              <p className="text-gray-700">Example AI service:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`// services/ai.service.ts
import { generateText, streamText } from '@ai-sdk/lumia';
import { config } from '../config/lumia';

export class AIService {
  static async generate(prompt: string) {
    return generateText({
      ...config,
      prompt
    });
  }

  static async stream(prompt: string, onChunk: (chunk: string) => void) {
    return streamText({
      ...config,
      prompt,
      onChunk: ({ chunk }) => {
        if (chunk.type === 'text-delta') {
          onChunk(chunk.text);
        }
      }
    });
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Next Steps</span>
            </CardTitle>
            <CardDescription>Continue your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Now that you have the basics set up, you can:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Explore different model configurations</li>
                <li>Learn about text generation</li>
                <li>Build chat interfaces</li>
                <li>Implement streaming responses</li>
              </ul>
              <div className="mt-6">
                <Link href="/tutorials/text-generation">
                  <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                    Explore Text Generation <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 