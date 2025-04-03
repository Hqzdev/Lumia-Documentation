import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, BookOpen, Terminal, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500  to-indigo-600 text-transparent bg-clip-text mb-6">Lumia AI Documentation</h1>
            <p className="text-xl text-gray-700 mb-8">
              A powerful toolkit for building AI-powered applications with ease
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50" size="lg">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50" size="lg">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Terminal className="h-8 w-8 text-blue-500" />}
            title="Easy Integration"
            description="Integrate AI capabilities into your application with just a few lines of code."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-blue-500" />}
            title="High Performance"
            description="Optimized for speed and efficiency, even with complex AI operations."
          />
          <FeatureCard
            icon={<Code className="h-8 w-8 text-blue-500" />}
            title="Flexible API"
            description="Comprehensive API that adapts to your specific use case and requirements."
          />
        </div>
      </div>

      {/* Code Example Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Start Example</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">Example.js</span>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="language-javascript">
                  {`import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

async function main() {
  // Generate text with OpenAI model
  const { text } = await generateText({
    model: openai('gpt-4o'),
    prompt: 'Explain quantum computing in simple terms',
    system: 'You are a helpful assistant that explains complex topics simply.'
  });
  
  console.log(text);
}

main();`}
                </code>
              </pre>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50">
                View More Examples <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Links */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore the Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <DocCard
            title="Installation Guide"
            description="Learn how to install and set up the Lumia AI in your project."
            icon={<BookOpen className="h-6 w-6 text-blue-500" />}
            href="/installation"
          />
          <DocCard
            title="API Reference"
            description="Detailed documentation of all available methods and options."
            icon={<Code className="h-6 w-6 text-blue-500" />}
            href="/api"
          />
          <DocCard
            title="Tutorials"
            description="Step-by-step guides for common use cases and scenarios."
            icon={<Terminal className="h-6 w-6 text-blue-500" />}
            href="/tutorials"
          />
          <DocCard
            title="Examples"
            description="Real-world examples and code snippets to get you started."
            icon={<Zap className="h-6 w-6 text-blue-500" />}
            href="/examples"
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function DocCard({ icon, title, description, href }) {
  return (
    <Link href={href} className="block">
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-blue-200">
        <div className="flex items-start">
          <div className="mr-4 mt-1">{icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="text-blue-600 font-medium flex items-center">
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

