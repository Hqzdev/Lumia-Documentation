"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy } from "lucide-react"
import { useState } from "react"
import Link from "next/link"


export default function Installation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Installation <span className="text-blue-600">Guide</span></h1>

      <div className="space-y-12 max-w-3xl">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
          <p className="text-gray-700 mb-4">Before installing the Yumi AI, ensure you have the following:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Node.js 18.x or later</li>
            <li>npm 7.x or later, or yarn 1.22.x or later</li>
            <li>A project using React, Next.js, Vue, Svelte, or Node.js</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
          <p className="text-gray-700 mb-4">You can install the Yumi AI using npm, yarn, or pnpm:</p>

          <Tabs defaultValue="npm" className="mb-6">
            <TabsList className="border border-gray-200 bg-white text-gray-700">
              <TabsTrigger value="npm" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                npm
              </TabsTrigger>
              <TabsTrigger
                value="yarn"
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
              >
                yarn
              </TabsTrigger>
              <TabsTrigger
                value="pnpm"
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
              >
                pnpm
              </TabsTrigger>
            </TabsList>
            <TabsContent value="npm" className="mt-2">
              <CopyableCodeBlock code="npm install ai @ai-sdk/Yumi" />
            </TabsContent>
            <TabsContent value="yarn" className="mt-2">
              <CopyableCodeBlock code="yarn add ai @ai-sdk/Yumi" />
            </TabsContent>
            <TabsContent value="pnpm" className="mt-2">
              <CopyableCodeBlock code="pnpm add ai @ai-sdk/Yumi" />
            </TabsContent>
          </Tabs>

         
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Environment Setup</h2>
          <p className="text-gray-700 mb-4">
            You'll need to set up environment variables for your AI provider. Create a <code>.env</code> file in your
            project root:
          </p>

          <CopyableCodeBlock code="Yumi_API_KEY=your_Yumi_api_key_here" />

          <p className="text-gray-700 mt-4">
            Make sure to add <code>.env</code> to your <code>.gitignore</code> file to avoid exposing your <Link href="/apikey" className="text-blue-600 hover:text-blue-700">API keys</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Basic Setup</h2>
          <p className="text-gray-700 mb-4">Here's a basic example to verify your installation:</p>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="language-javascript">
                {`// test.js
import { generateText } from 'ai';
import { Yumi } from '@ai-sdk/Yumi';

async function testAiSdk() {
  try {
    const { text } = await generateText({
      model: Yumi('Yumi-V2-Max'),
      prompt: 'Hello, Yumi AI!',
    });
    
    console.log('AI response:', text);
  } catch (error) {
    console.error('Error:', error);
  }
}

testAiSdk();`}
              </code>
            </pre>
          </div>

          <p className="text-gray-700">
            Run this script with <code>node -r dotenv/config test.js</code> to test your installation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <p className="text-gray-700 mb-4">Now that you've installed the Yumi AI, you can:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              Explore the{" "}
              <a href="/api" className="text-blue-600 hover:underline">
                API Reference
              </a>{" "}
              to learn about all available functions
            </li>
            <li>
              Check out the{" "}
              <a href="/examples" className="text-blue-600 hover:underline">
                Examples
              </a>{" "}
              for practical use cases
            </li>
            <li>
              Follow the{" "}
              <a href="/tutorials" className="text-blue-600 hover:underline">
                Tutorials
              </a>{" "}
              for step-by-step guides
            </li>
          </ul>

          <Button className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50">
            View Getting Started Guide
          </Button>
        </section>
      </div>
    </div>
  )
}

function CopyableCodeBlock({ code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden relative">
      <pre className="p-4 text-sm overflow-x-auto pr-12">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

