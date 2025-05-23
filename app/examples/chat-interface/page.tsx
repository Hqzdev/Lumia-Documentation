"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function ChatInterfaceExample() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ])
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        <span className="text-blue-600">Chat Interface</span> Example
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Learn how to build an interactive chat interface with streaming responses using Lumia AI.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Code Section */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Code</span>
            </CardTitle>
            <CardDescription>Complete implementation with comments</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="component" className="w-full">
              <TabsList className="bg-white text-gray-700 mb-4">
                <TabsTrigger value="component" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                  Component
                </TabsTrigger>
                <TabsTrigger value="styles" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                  Styles
                </TabsTrigger>
              </TabsList>

              <TabsContent value="component">
                <div className="bg-white rounded-2xl overflow-hidden w-full">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-javascript">
                      {`import { streamText } from 'ai';
import { Lumia } from '@ai-sdk/Lumia';
import { useState } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;
    
    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);
    
    // Create placeholder for assistant's response
    const assistantMessage = { role: 'assistant', content: '' };
    setMessages(prev => [...prev, assistantMessage]);
    
    try {
      // Stream the response
      const result = streamText({
        model: Lumia('Lumia-V2-Pro'),
        prompt: input,
        system: 'You are a helpful assistant.',
        onChunk: ({ chunk }) => {
          if (chunk.type === 'text-delta') {
            setMessages(prev => {
              const newMessages = [...prev];
              const lastMessage = newMessages[newMessages.length - 1];
              lastMessage.content += chunk.text;
              return newMessages;
            });
          }
        }
      });
      
      await result.text;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsGenerating(false);
    }
  }
  
  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <div key={i} className={\`flex \${
            message.role === 'user' ? 'justify-end' : 'justify-start'
          }\`}>
            <div className={\`max-w-[80%] rounded-2xl px-4 py-2 \${
              message.role === 'user' 
                ? 'bg-blue-100 text-gray-800' 
                : 'bg-gray-100 text-gray-800'
            }\`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-2xl px-4 py-2 bg-white"
            disabled={isGenerating}
          />
          <button
            type="submit"
            className="bg-white text-blue-600 rounded-2xl px-4 py-2"
            disabled={isGenerating}
          >
            {isGenerating ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}`}
                    </code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="styles">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="language-css">
                      {`/* Add these styles to your CSS file */
.chat-container {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.message-bubble {
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  line-height: 1.5;
}

.user-message {
  background-color: #dbeafe;
  color: #1e40af;
  margin-left: auto;
}

.assistant-message {
  background-color: #f3f4f6;
  color: #111827;
}

.chat-input {
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  width: 100%;
  outline: none;
  transition: border-color 0.2s;
}

.chat-input:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 2px #bfdbfe;
}`}
                    </code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Features Section */}
        <Card className="rounded-2xl lg:col-span-2">
          <CardHeader>
            <CardTitle>
              <span className="text-blue-600">Key Features</span>
            </CardTitle>
            <CardDescription>Understanding the main components and functionality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Real-time Streaming</h3>
                <p className="text-gray-700">Messages appear character by character as they're generated, providing a more engaging experience.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Message History</h3>
                <p className="text-gray-700">Maintains a conversation history with clear visual distinction between user and assistant messages.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Error Handling</h3>
                <p className="text-gray-700">Gracefully handles errors and loading states to ensure a smooth user experience.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 