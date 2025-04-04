"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Examples() {
  const [article, setArticle] = useState(`
  The advancement of artificial intelligence (AI) has brought about significant changes across various industries, from healthcare to finance. AI's ability to process vast amounts of data and identify patterns has led to more efficient and accurate decision-making processes. However, the integration of AI also raises ethical concerns, particularly regarding job displacement and data privacy. As AI continues to evolve, it is crucial to address these challenges to ensure that its benefits are distributed equitably and its potential risks are mitigated effectively.
  `)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        <span className="text-blue-600">Examples</span> & Use Cases
      </h1>
      <p className="text-xl text-gray-700 mb-12 max-w-3xl">
        Explore practical examples of the <span className="text-blue-600">Lumia AI</span> in action. Each example includes complete code and explanations.
      </p>

      <Tabs defaultValue="code" className="w-full mb-8">
        <TabsList className="bg-white text-gray-700 mb-4">
          <TabsTrigger value="code" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            Code Examples
          </TabsTrigger>
          <TabsTrigger value="examples" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
            Live Examples
          </TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="space-y-8">
          {/* Text Generation Example */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>
                <span className="text-blue-600">Text Generation</span>
              </CardTitle>
              <CardDescription>Generate text responses using Lumia models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-2xl overflow-hidden">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="language-javascript">
                    {`import { generateText } from 'ai';
import { Lumia } from '@ai-sdk/Lumia';

async function main() {
  const { text } = await generateText({
    model: Lumia('Lumia-V2-Pro'),
    prompt: 'Write a short poem about technology and nature.',
    system: 'You are a creative poet who writes concise, meaningful poems.'
  });
  
  console.log(text);
}

main();`}
                  </code>
                </pre>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/examples/text-generation">
                <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                  View Full Example <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Chat Application Example */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>
                <span className="text-blue-600">Chat Interface</span>
              </CardTitle>
              <CardDescription>Build a simple chat interface with streaming responses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-2xl overflow-hidden">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="language-javascript">
                    {`import { streamText } from 'ai';
import { Lumia } from '@ai-sdk/Lumia';
import { useState } from 'react';

export default function ChatExample() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    const result = streamText({
      model: Lumia('Lumia-V2-Pro'),
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
    });
  }
  
  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div key={i} className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
            <div className={\`rounded-2xl px-4 py-2 \${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}\`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full rounded-2xl px-4 py-2"
          placeholder="Type a message..."
        />
      </form>
    </div>
  );
}`}
                  </code>
                </pre>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/examples/chat-interface">
                <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                  View Full Example <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-8">
          {/* Live Text Generation Example */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>
                <span className="text-blue-600">Content Summarizer</span>
              </CardTitle>
              <CardDescription>Try our AI-powered text summarization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Original Article</h3>
                  <div className="max-h-60 overflow-y-auto text-gray-700">
                    {article}
                  </div>
                </div>
                
                <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50 w-full">
                  Summarize Article
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Live Chat Example */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>
                <span className="text-blue-600">Interactive Chat</span>
              </CardTitle>
              <CardDescription>Try our AI chat interface</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-2xl p-4 h-[300px] flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-blue-100 text-gray-800">
                      Hello! Can you tell me about Lumia AI?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-gray-100 text-gray-800">
                      Lumia AI is a powerful toolkit for building AI-powered applications. It provides an easy-to-use API for text generation, chat interfaces, and more.
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 rounded-2xl px-4 py-2 bg-gray-50"
                  />
                  <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

