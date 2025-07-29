import { CodeBlock } from "@/components/code-block"

export function QuickstartPage() {
  const installCode = `npm install Lumia`

  const setupCode = `import Lumia from 'Lumia';

const Lumia = new Lumia({
  apiKey: process.env.Lumia_API_KEY,
});`

  const chatCode = `const completion = await Lumia.chat.completions.create({
  messages: [{"role": "system", "content": "You are a helpful assistant."},
             {"role": "user", "content": "Hello!"}],
  model: "gpt-3.5-turbo",
});

console.log(completion.choices[0].message);`

  const streamingCode = `const stream = await Lumia.chat.completions.create({
  model: "gpt-4",
  messages: [{"role": "user", "content": "Say this is a test"}],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || "");
}`

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Quickstart</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Get up and running with the Lumia API in just a few minutes. This guide will walk you through making your
          first API request and understanding the basic concepts.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Installation</h2>
        <p className="text-gray-600 mb-4">First, install the Lumia Node.js library:</p>
        <div className="mb-8">
          <CodeBlock language="bash" code={installCode} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Setup</h2>
        <p className="text-gray-600 mb-4">Initialize the Lumia client with your API key:</p>
        <div className="mb-8">
          <CodeBlock language="javascript" code={setupCode} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Make your first request</h2>
        <p className="text-gray-600 mb-4">Now you can make your first chat completion request:</p>
        <div className="mb-8">
          <CodeBlock language="javascript" code={chatCode} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Streaming responses</h2>
        <p className="text-gray-600 mb-4">For real-time applications, you can stream responses as they're generated:</p>
        <div className="mb-8">
          <CodeBlock language="javascript" code={streamingCode} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Explore different models and their capabilities</li>
          <li>Learn about function calling and structured outputs</li>
          <li>Implement error handling and rate limiting</li>
          <li>Check out our comprehensive API reference</li>
        </ul>
      </div>
    </div>
  )
}
