import { CodeBlock } from "@/components/code-block"
import { ModelCard } from "@/components/model-card"

export function OverviewPage() {
  const quickStartCode = `import Lumia from "Lumia";

const client = new Lumia();

const response = await client.responses.create({
  model: "gpt-4.1",
  input: "Write a one-sentence bedtime story about a unicorn.",
});

console.log(response.output_text);`

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Lumia developer platform</h1>

      {/* Developer Quickstart Section */}
      <div className="mb-12">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Developer quickstart</h2>
            <p className="text-gray-600 text-sm max-w-md">
              Make your first API request in minutes. Learn the basics of the Lumia platform.
            </p>
            <div className="flex items-center mt-3 text-sm text-gray-500">
              <span className="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
              </span>
              5 min
            </div>
          </div>

          <CodeBlock language="javascript" code={quickStartCode} />
        </div>
      </div>

      {/* Browse Models Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Browse models</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            View all
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <ModelCard
            name="GPT-4.1"
            title="GPT-4.1"
            description="Flagship GPT model for complex tasks"
            gradient="bg-gradient-to-br from-blue-400 to-blue-600"
          />
          <ModelCard
            name="o4-mini"
            title="o4-mini"
            description="Faster, more affordable reasoning model"
            gradient="bg-gradient-to-br from-purple-300 to-orange-300"
          />
          <ModelCard
            name="o3"
            title="o3"
            description="Our most powerful reasoning model"
            gradient="bg-gradient-to-br from-yellow-400 to-blue-400"
          />
        </div>
      </div>

      {/* Platform Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Platform Overview</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            The Lumia Platform provides developers with access to cutting-edge AI models through a simple REST API.
            Whether you're building chatbots, content generation tools, or complex AI applications, our platform offers
            the tools and models you need.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Access to GPT-4, GPT-3.5, and other state-of-the-art models</li>
            <li>Simple REST API with comprehensive documentation</li>
            <li>Real-time streaming responses</li>
            <li>Function calling and structured outputs</li>
            <li>Image generation and vision capabilities</li>
            <li>Audio processing and speech synthesis</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">Getting Started</h3>
          <p className="text-gray-600 mb-4">
            To get started with the Lumia Platform, you'll need to create an account and obtain an API key. Once you
            have your key, you can make your first API request in just a few lines of code.
          </p>
        </div>
      </div>
    </div>
  )
}
