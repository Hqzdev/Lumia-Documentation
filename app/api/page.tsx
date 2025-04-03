import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApiReference() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">API Reference</h1>

      <div className="space-y-12">
        {/* generateText API */}
        <section id="generate-text" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">generateText</h2>
          <p className="text-gray-700 mb-6">Generates text for a given prompt using the specified AI model.</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Parameters</h3>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Parameter
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">model</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIModel</td>
                  <td className="px-6 py-4 text-sm text-gray-500">The AI model to use for text generation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">prompt</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">The prompt to generate text from</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">system</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string (optional)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">System message to guide the model's behavior</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Returns</h3>
          <p className="text-gray-700 mb-4">A Promise that resolves to an object containing:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              <strong>text</strong>: The generated text string
            </li>
            <li>
              <strong>finishReason</strong>: The reason why the generation stopped
            </li>
            <li>
              <strong>usage</strong>: Token usage information
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Example</h3>
          <Tabs defaultValue="js" className="mb-6">
            <TabsList className="border border-gray-200 bg-white text-gray-700">
              <TabsTrigger value="js" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                JavaScript
              </TabsTrigger>
              <TabsTrigger value="ts" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                TypeScript
              </TabsTrigger>
            </TabsList>
            <TabsContent value="js" className="mt-2">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="language-javascript">
                    {`import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

async function generateSummary() {
  const { text } = await generateText({
    model: openai('gpt-4o'),
    prompt: 'Summarize the benefits of artificial intelligence.',
    system: 'You are a helpful assistant that provides concise summaries.'
  });
  
  console.log(text);
}

generateSummary();`}
                  </code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="ts" className="mt-2">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="language-typescript">
                    {`import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import type { AIModel } from 'ai';

async function generateSummary(): Promise<void> {
  const model: AIModel = openai('gpt-4o');
  
  const { text } = await generateText({
    model,
    prompt: 'Summarize the benefits of artificial intelligence.',
    system: 'You are a helpful assistant that provides concise summaries.'
  });
  
  console.log(text);
}

generateSummary();`}
                  </code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* streamText API */}
        <section id="stream-text" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">streamText</h2>
          <p className="text-gray-700 mb-6">Streams text generation for a given prompt using the specified AI model.</p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Parameters</h3>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Parameter
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">model</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIModel</td>
                  <td className="px-6 py-4 text-sm text-gray-500">The AI model to use for text generation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">prompt</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">The prompt to generate text from</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">system</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string (optional)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">System message to guide the model's behavior</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onChunk</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">function (optional)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Callback function that receives each chunk as it's generated
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onFinish</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">function (optional)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    Callback function that's called when streaming is complete
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Returns</h3>
          <p className="text-gray-700 mb-4">A StreamResult object containing:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              <strong>text</strong>: A Promise that resolves to the complete generated text
            </li>
            <li>
              <strong>finishReason</strong>: A Promise that resolves to the reason why generation stopped
            </li>
            <li>
              <strong>usage</strong>: A Promise that resolves to token usage information
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Example</h3>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="language-javascript">
                {`import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

function chatAssistant() {
  const result = streamText({
    model: openai('gpt-4o'),
    prompt: 'Tell me a short story about a robot learning to paint.',
    system: 'You are a creative storyteller.',
    onChunk: ({ chunk }) => {
      if (chunk.type === 'text-delta') {
        // Display each chunk of text as it arrives
        process.stdout.write(chunk.text);
      }
    },
    onFinish: (result) => {
      console.log('\\n\\nGeneration complete!');
    }
  });

  // You can also access the complete text when it's done
  result.text.then(fullText => {
    console.log('\\n\\nFull story:', fullText);
  });
}

chatAssistant();`}
              </code>
            </pre>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Button className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50">
          View Full API Documentation
        </Button>
      </div>
    </div>
  )
}

