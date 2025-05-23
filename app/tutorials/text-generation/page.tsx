"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function TextGenerationTutorial() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        <span className="text-blue-600">Text Generation</span> Tutorial
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Learn how to generate high-quality text using Lumia AI models.
      </p>

      <div className="space-y-8">
        {/* Step 1: Setup */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 1:</span> Initial Setup
            </CardTitle>
            <CardDescription>Setting up your project with Lumia AI</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Install the required dependencies:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>npm install @ai-sdk/Lumia</code>
              </pre>
              <p className="text-gray-700">Import the necessary modules:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`import { generateText } from '@ai-sdk/Lumia';
import { Lumia } from '@ai-sdk/Lumia';`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Basic Text Generation */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 2:</span> Basic Text Generation
            </CardTitle>
            <CardDescription>Generate your first AI response</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Create a basic text generation function:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`async function generateBasicText() {
  try {
    const { text } = await generateText({
      model: Lumia('Lumia-V2-Pro'),
      prompt: 'Write a short story about AI',
      system: 'You are a creative writer.'
    });
    
    console.log(text);
  } catch (error) {
    console.error('Error:', error);
  }
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Advanced Parameters */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 3:</span> Advanced Parameters
            </CardTitle>
            <CardDescription>Fine-tune your text generation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Customize the output with advanced parameters:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`const response = await generateText({
  model: Lumia('Lumia-V2-Pro'),
  prompt: 'Write a technical blog post about AI',
  system: 'You are an AI expert writing for developers.',
  parameters: {
    temperature: 0.7,    // Controls randomness (0-1)
    maxTokens: 500,      // Maximum length of response
    topP: 0.9,          // Nucleus sampling parameter
    frequencyPenalty: 0.5,  // Reduces repetition
    presencePenalty: 0.5    // Encourages topic diversity
  }
});`}</code>
              </pre>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">Parameter Explanations:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>temperature:</strong> Higher values make output more random, lower more focused</li>
                  <li><strong>maxTokens:</strong> Controls the length of generated text</li>
                  <li><strong>topP:</strong> Alternative to temperature for controlling randomness</li>
                  <li><strong>frequencyPenalty:</strong> Reduces word repetition</li>
                  <li><strong>presencePenalty:</strong> Encourages the model to talk about new topics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Error Handling */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 4:</span> Error Handling
            </CardTitle>
            <CardDescription>Implement robust error handling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Add proper error handling to your text generation:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`async function generateWithErrorHandling() {
  try {
    const { text, usage } = await generateText({
      model: Lumia('Lumia-V2-Pro'),
      prompt: 'Write about AI safety',
      system: 'You are an AI safety researcher.',
    });

    console.log('Generated text:', text);
    console.log('Token usage:', usage);
    
  } catch (error) {
    if (error.name === 'ValidationError') {
      console.error('Invalid parameters:', error.message);
    } else if (error.name === 'RateLimitError') {
      console.error('Rate limit exceeded. Please try again later.');
    } else {
      console.error('Unexpected error:', error);
    }
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
            <CardDescription>Explore more advanced features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Now that you've mastered the basics, you can:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Implement streaming responses</li>
                <li>Create custom prompt templates</li>
                <li>Build a text generation UI</li>
                <li>Integrate with your application</li>
              </ul>
              <div className="mt-6">
                <Link href="/examples/text-generation">
                  <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                    View Complete Example <ChevronRight className="ml-2 h-4 w-4" />
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