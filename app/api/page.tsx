import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApiReference() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        <span className="text-blue-600">API</span> Reference
      </h1>

      <div className="space-y-12">
        {/* generateText API */}
        <section id="generate-text" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">GenerateText</span> Method
          </h2>
          <p className="text-gray-700 mb-6">
            The <span className="text-blue-600">GenerateText</span> method allows you to create human-like text using advanced AI models. Perfect for content generation, translations, and creative writing.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Input Parameters</h3>
          <div className="bg-white rounded-2xl overflow-hidden mb-6">
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">model</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIModel</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Specify which Yumi AI model to use for generation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">prompt</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Your input text that guides the AI's response</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">system</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string (optional)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Define the AI's behavior and context for better results</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Response Object</h3>
          <p className="text-gray-700 mb-4">The method returns a Promise with the following properties:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              <span className="text-blue-600 font-medium">text</span>: Generated content from the AI model
            </li>
            <li>
              <span className="text-blue-600 font-medium">finishReason</span>: Why the generation process ended
            </li>
            <li>
              <span className="text-blue-600 font-medium">usage</span>: Detailed token consumption metrics
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Code Example</h3>
          <Tabs defaultValue="js" className="mb-6">
            <TabsList className="bg-white text-gray-700">
              <TabsTrigger value="js" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                JavaScript
              </TabsTrigger>
              <TabsTrigger value="ts" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                TypeScript
              </TabsTrigger>
            </TabsList>
            <TabsContent value="js" className="mt-2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="language-javascript">
                    {`import { generateText } from 'ai';
import { Yumi } from '@ai-sdk/Yumi';

async function createBlogPost() {
  const { text } = await generateText({
    model: Yumi('Yumi-V2-Pro'),
    prompt: 'Write a blog post about AI in healthcare',
    system: 'You are an expert in healthcare technology'
  });
  
  console.log(text);
}

createBlogPost();`}
                  </code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="ts" className="mt-2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="language-typescript">
                    {`import { generateText } from 'ai';
import { Yumi } from '@ai-sdk/Yumi';
import type { AIModel } from 'ai';

async function createBlogPost(): Promise<void> {
  const model: AIModel = Yumi('Yumi-V2-Pro');
  
  const { text } = await generateText({
    model,
    prompt: 'Write a blog post about AI in healthcare',
    system: 'You are an expert in healthcare technology'
  });
  
  console.log(text);
}

createBlogPost();`}
                  </code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* streamText API */}
        <section id="stream-text" className="scroll-mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">StreamText</span> Method
          </h2>
          <p className="text-gray-700 mb-6">
            The <span className="text-blue-600">StreamText</span> method enables real-time text generation with instant feedback. Ideal for chat interfaces, live content creation, and interactive applications.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Input Parameters</h3>
          <div className="bg-white rounded-2xl overflow-hidden mb-6">
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">model</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIModel</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Choose your preferred Yumi AI model</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">prompt</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                  <td className="px-6 py-4 text-sm text-gray-500">The input prompt for streaming generation</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">system</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string (optional)</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Set the AI's role and behavior context</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">onChunk</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">function</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Handle each piece of generated text in real-time</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">onFinish</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">function</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Execute code when the stream completes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Response Object</h3>
          <p className="text-gray-700 mb-4">Returns a StreamResult object containing:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              <span className="text-blue-600 font-medium">text</span>: Promise resolving to the complete generated content
            </li>
            <li>
              <span className="text-blue-600 font-medium">finishReason</span>: Promise with the completion status
            </li>
            <li>
              <span className="text-blue-600 font-medium">usage</span>: Promise containing detailed token metrics
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Code Example</h3>
          <div className="bg-white rounded-2xl overflow-hidden mb-6">
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="language-javascript">
                {`import { streamText } from 'ai';
import { Yumi } from '@ai-sdk/Yumi';

function createStory() {
  const result = streamText({
    model: Yumi('Yumi-V2-Pro'),
    prompt: 'Write a story about a digital artist',
    system: 'You are a creative storyteller',
    onChunk: ({ chunk }) => {
      if (chunk.type === 'text-delta') {
        // Show text as it's generated
        updateUI(chunk.text);
      }
    },
    onFinish: (result) => {
      console.log('Story completed!');
    }
  });

  // Get the complete story when done
  result.text.then(story => {
    saveToDatabase(story);
  });
}

createStory();`}
              </code>
            </pre>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
          Explore Complete Documentation
        </Button>
      </div>
    </div>
  )
}

