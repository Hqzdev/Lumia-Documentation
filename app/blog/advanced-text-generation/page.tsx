"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdvancedTextGeneration() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Advanced Text Generation Techniques</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>March 10, 2024</span>
          <span>•</span>
          <span>8 min read</span>
          <span>•</span>
          <span>Technical</span>
        </div>

        <div className="prose prose-lg max-w-none border-2 border-gray-200 rounded-2xl lg:p-8">
          <p className="lead text-gray-700 font-semibold text-xl">
            Discover how to leverage Yumi AI's advanced capabilities for sophisticated text generation tasks.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Understanding Model Parameters</h2>
          <p className="text-gray-700">
            To achieve optimal results with text generation, it's crucial to understand and properly configure the key parameters:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Temperature:</strong> Controls randomness in the output (0.0-1.0)</li>
            <li><strong>Top-p:</strong> Nucleus sampling parameter for response diversity</li>
            <li><strong>Max tokens:</strong> Limits the length of generated text</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Advanced Prompt Engineering</h2>
          <p className="text-gray-700">
            Effective prompt engineering is key to generating high-quality text. Here's an example of an advanced prompt structure:
          </p>
          <pre><code>{`
const response = await Yumi.generate({
  prompt: {
    context: "You are an expert technical writer",
    instruction: "Write a detailed explanation",
    content: "Explain how neural networks process information",
    format: "Use markdown formatting"
  },
  temperature: 0.7,
  maxTokens: 500
});
          `}</code></pre>

          <h2 className="text-2xl font-bold text-gray-900">Fine-tuning and Customization</h2>
          <p className="text-gray-700">
            Learn how to fine-tune models for specific use cases and customize outputs for your application's needs:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Dataset preparation and cleaning</li>
            <li>Model fine-tuning strategies</li>
            <li>Output format customization</li>
            <li>Response filtering and post-processing</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Best Practices</h2>
          <p className="text-gray-700">
            Follow these best practices to ensure optimal performance and reliability:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Implement proper error handling</li>
            <li>Use streaming for long responses</li>
            <li>Cache frequently generated content</li>
            <li>Monitor and optimize token usage</li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900">Pro Tip</h3>
            <p className="text-blue-800">
              Always test your prompts with different parameter combinations to find the optimal balance between creativity and coherence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
