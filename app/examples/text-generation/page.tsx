"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function TextGenerationExample() {
  const [output, setOutput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        <span className="text-blue-600">Text Generation</span> Example
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Learn how to generate text using different models and parameters with Lumia AI.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Code Section */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Code</span>
            </CardTitle>
            <CardDescription>Complete implementation with comments</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="bg-white text-gray-700 mb-4">
                <TabsTrigger value="basic" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                  Basic
                </TabsTrigger>
                <TabsTrigger value="advanced" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                  Advanced
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-javascript">
                      {`import { generateText } from 'ai';
import { Lumia } from '@ai-sdk/Lumia';

// Basic text generation
async function generateBasicText() {
  const { text } = await generateText({
    model: Lumia('Lumia-V2-Pro'),
    prompt: 'Write a short story about AI',
    system: 'You are a creative writer.'
  });
  
  console.log(text);
}

generateBasicText();`}
                    </code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="advanced">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-javascript">
                      {`import { generateText } from 'ai';
import { Lumia } from '@ai-sdk/Lumia';

// Advanced text generation with parameters
async function generateAdvancedText() {
  const { text, usage } = await generateText({
    model: Lumia('Lumia-V2-Pro'),
    prompt: 'Write a technical blog post about AI',
    system: 'You are an AI expert writing for developers.',
    parameters: {
      temperature: 0.7,
      maxTokens: 500,
      topP: 0.9,
      frequencyPenalty: 0.5,
      presencePenalty: 0.5
    }
  });
  
  console.log('Generated text:', text);
  console.log('Token usage:', usage);
}

generateAdvancedText();`}
                    </code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Parameters Section */}
        <Card className="rounded-2xl lg:col-span-2">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Parameters</span> Explained
            </CardTitle>
            <CardDescription>Understanding the available configuration options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Temperature</h3>
                <p className="text-gray-700">Controls randomness in the output. Higher values (e.g., 0.8) make the output more creative, while lower values (e.g., 0.2) make it more focused and deterministic.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Max Tokens</h3>
                <p className="text-gray-700">The maximum length of the generated text. One token is roughly 4 characters of English text.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Top P</h3>
                <p className="text-gray-700">An alternative to temperature, controls diversity via nucleus sampling. Lower values (e.g., 0.1) make the output more focused.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Frequency Penalty</h3>
                <p className="text-gray-700">Reduces repetition by penalizing tokens based on their frequency in the text so far.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 