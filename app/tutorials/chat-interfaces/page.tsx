"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ChatInterfacesTutorial() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Building <span className="text-blue-600">Chat Interfaces</span>
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Learn how to create interactive chat applications with Yumi AI.
      </p>

      <div className="space-y-8">
        {/* Step 1: Setup */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 1:</span> Setup
            </CardTitle>
            <CardDescription>Setting up your development environment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">First, install the required dependencies:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>npm install @ai-sdk/Yumi react @types/react</code>
              </pre>
              <p className="text-gray-700">Create a new component file for your chat interface:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>touch components/ChatInterface.tsx</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Basic Structure */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 2:</span> Basic Structure
            </CardTitle>
            <CardDescription>Creating the chat interface component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Set up the basic component structure with state management:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`import { useState } from 'react';
import { Yumi } from '@ai-sdk/Yumi';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto">
        {/* Messages will go here */}
      </div>
      <div className="p-4">
        {/* Input form will go here */}
      </div>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Message Handling */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 3:</span> Message Handling
            </CardTitle>
            <CardDescription>Implementing message display and input handling</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Add message components and handle user input:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`function Message({ role, content }) {
  return (
    <div className={\`flex \${role === 'user' ? 'justify-end' : 'justify-start'}\`}>
      <div className={\`rounded-2xl px-4 py-2 \${
        role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
      }\`}>
        {content}
      </div>
    </div>
  );
}

// Add to your component:
const handleSubmit = (e) => {
  e.preventDefault();
  if (!input.trim()) return;
  
  setMessages(prev => [...prev, { role: 'user', content: input }]);
  setInput('');
  // We'll add AI response handling next
};`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: AI Integration */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Step 4:</span> AI Integration
            </CardTitle>
            <CardDescription>Connecting with Yumi AI for responses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Integrate Yumi AI for streaming responses:</p>
              <pre className="bg-white rounded-2xl p-4 text-sm overflow-x-auto">
                <code>{`import { streamText } from '@ai-sdk/Yumi';

// Add to your handleSubmit function:
const response = await streamText({
  model: Yumi('Yumi-V2-Pro'),
  prompt: input,
  system: 'You are a helpful assistant.',
  onChunk: ({ chunk }) => {
    if (chunk.type === 'text-delta') {
      setMessages(prev => {
        const last = prev[prev.length - 1];
        last.content += chunk.text;
        return [...prev];
      });
    }
  }
});`}</code>
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
            <CardDescription>Explore advanced features and customization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">Now that you have a basic chat interface, you can:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Add error handling and loading states</li>
                <li>Implement message persistence</li>
                <li>Customize the UI and animations</li>
                <li>Add support for different message types</li>
              </ul>
              <div className="mt-6">
                <Link href="/examples/chat-interface">
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