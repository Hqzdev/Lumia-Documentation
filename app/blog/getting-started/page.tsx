"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GettingStarted() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Getting Started with Lumia AI</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>March 15, 2024</span>
          <span>•</span>
          <span>5 min read</span>
          <span>•</span>
          <span>Tutorial</span>
        </div>

        <div className="prose prose-lg max-w-none border-2 border-gray-200 rounded-2xl lg:p-8">
          <p className="lead text-gray-700 font-semibold text-xl">
            Welcome to Lumia AI! This guide will help you get started with integrating our AI capabilities into your applications.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Prerequisites</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Basic understanding of JavaScript/TypeScript</li>
            <li>Node.js installed on your machine</li>
            <li>A Lumia AI API key</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Installation</h2>
          <p className="text-gray-700">
            First, install the Lumia AI SDK using npm:
          </p>
          <pre><code>npm install @lumia/ai</code></pre>

          <h2>Basic Usage</h2>
          <p>
            Here's a simple example of how to use Lumia AI for text generation:
          </p>
          <pre><code>{`
import { LumiaAI } from '@lumia/ai';

const lumia = new LumiaAI('YOUR_API_KEY');

const response = await lumia.generate({
  prompt: "Write a creative story",
  maxTokens: 100
});

console.log(response.text);
          `}</code></pre>

          <h2>Next Steps</h2>
          <p>
            Explore our other tutorials and documentation to learn more about advanced features and best practices.
          </p>
        </div>
      </div>
    </div>
  )
}
