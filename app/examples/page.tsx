"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Examples() {
  const [article, setArticle] = useState(`
  The advancement of artificial intelligence (AI) has brought about significant changes across various industries, from healthcare to finance. AI's ability to process vast amounts of data and identify patterns has led to more efficient and accurate decision-making processes. However, the integration of AI also raises ethical concerns, particularly regarding job displacement and data privacy. As AI continues to evolve, it is crucial to address these challenges to ensure that its benefits are distributed equitably and its potential risks are mitigated effectively.
  `)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Examples</h1>
      <p className="text-xl text-gray-700 mb-12 max-w-3xl">
        Explore practical examples of the Lumia AI in action. Each example includes complete code and explanations.
      </p>

      <div className="space-y-16">
        {/* Text Generation Example */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Text Generation</h2>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Simple Text Generation</CardTitle>
              <CardDescription>Generate text responses using OpenAI models</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="code" className="w-full">
                <TabsList className="border border-gray-200 bg-white text-gray-700 mb-4">
                  <TabsTrigger
                    value="code"
                    className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700"
                  >
                    Code
                  </TabsTrigger>
                  <TabsTrigger
                    value="output"
                    className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700"
                  >
                    Code
                  </TabsTrigger>
                  <TabsTrigger
                    value="output"
                    className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700"
                  >
                    Output
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="code">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code className="language-javascript">
                        {`import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

async function main() {
  const { text } = await generateText({
    model: openai('gpt-4o'),
    prompt: 'Write a short poem about technology and nature.',
    system: 'You are a creative poet who writes concise, meaningful poems.'
  });
  
  console.log(text);
}

main();`}
                      </code>
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="output">
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                    <p className="whitespace-pre-line text-gray-800">
                      Silicon meets soil, Circuits intertwined with roots, Both growing as one. Screens glow like
                      sunsets, While rivers of data flow Through digital leaves. In harmony now, Technology and nature—
                      Our shared tomorrow.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                View Full Example <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Chat Application Example */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Chat Application</h2>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Interactive Chat</CardTitle>
              <CardDescription>Build a simple chat interface with streaming responses</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="code" className="w-full">
                <TabsList className="border border-gray-200 bg-white text-gray-700 mb-4">
                  <TabsTrigger
                    value="code"
                    className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700"
                  >
                    Code
                  </TabsTrigger>
                  <TabsTrigger
                    value="output"
                    className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700"
                  >
                    Code
                  </TabsTrigger>
                  <TabsTrigger
                    value="output"
                    className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700"
                  >
                    Output
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="code">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code className="language-javascript">
                        {`import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { useState } from 'react';

export default function ChatExample() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);
    
    // Create an initial assistant message that we'll update as we receive chunks
    const assistantMessage = { role: 'assistant', content: '' };
    setMessages(prev => [...prev, assistantMessage]);
    
    // Prepare the prompt from all messages
    const prompt = [...messages, userMessage]
      .map(m => \`\${m.role === 'user' ? 'User' : 'Assistant'}: \${m.content}\`)
      .join('\\n');
    
    // Stream the response
    const result = streamText({
      model: openai('gpt-4o'),
      prompt: prompt + '\\nAssistant:',
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
      },
    });
    
    await result.text;
    setIsGenerating(false);
  }
  
  return (
    <div className="flex flex-col h-[500px] max-w-md mx-auto border rounded-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <div key={i} className={\`flex \${message.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
            <div className={\`max-w-[80%] rounded-lg px-4 py-2 \${
              message.role === 'user' 
                ? 'bg-purple-100 text-gray-800' 
                : 'bg-gray-100 text-gray-800'
            }\`}>
              {message.content || (isGenerating && i === messages.length - 1 ? '...' : '')}
            </div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="border-t p-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
          disabled={isGenerating}
        />
        <button
          type="submit"
          className="bg-white text-purple-600 border border-l-0 border-purple-200 hover:bg-purple-50 rounded-r-md px-4 py-2 font-medium"
          disabled={isGenerating}
        >
          Send
        </button>
      </form>
    </div>
  );
}`}
                      </code>
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="output">
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-end">
                        <div className="max-w-[80%] rounded-lg px-4 py-2 bg-purple-100 text-gray-800">
                          What can you tell me about the Lumia AI?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
                          The Lumia AI is a toolkit that simplifies building AI-powered applications. It provides a
                          unified API for working with different AI models, making it easier to integrate capabilities
                          like text generation, chat interfaces, and more into your applications. It supports various
                          frameworks including React, Next.js, Vue, and Node.js, and offers standardized functions like
                          generateText and streamText for different use cases. The SDK also includes UI components to
                          help build interactive AI interfaces quickly.
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                View Full Example <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Advanced Example */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Usage</h2>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Content Summarizer</CardTitle>
              <CardDescription>Build a tool that summarizes articles or long text</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="language-javascript">
                    {`import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { useState } from 'react';

export default function Summarizer() {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function summarizeArticle() {
    setLoading(true);
    
    try {
      const { text } = await generateText({
        model: openai('gpt-4o'),
        prompt: \`Summarize the following article in 3-5 sentences: ${article}\`,
        system: 'You are a professional summarizer. Create concise, accurate summaries that capture the key points.'
      });
      
      setSummary(text);
    } catch (error) {
      console.error('Error summarizing article:', error);
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h3 className="font-medium text-gray-900 mb-2">Original Article</h3>
        <div className="max-h-60 overflow-y-auto text-gray-700">
          {article}
        </div>
      </div>
      
      <Button 
        onClick={summarizeArticle}
        disabled={loading}
        className="bg-white text-purple-600 border border-purple-200 hover:bg-purple-50 w-full"
      >
        {loading ? 'Summarizing...' : 'Summarize Article'}
      </Button>
      
      {summary && (
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <h3 className="font-medium text-gray-900 mb-2">Summary</h3>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}
    </div>
  );
}
`}
                  </code>
                </pre>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                View Full Example <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}

