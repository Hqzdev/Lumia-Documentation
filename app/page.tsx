import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Code, BookOpen, Terminal, Zap, Github } from "lucide-react"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

interface DocCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

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
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:bg-blue-50" size="lg">
                Get Started <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-blue-600 rounded-2xl" size="lg">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Try Lumia Dashboard</h2>
              <p className="text-blue-100">Experience the power of Lumia AI in our interactive dashboard</p>
            </div>
            <a 
              href="https://Lumia-dashboard.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center"
            >
              Go to Dashboard <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-2xl ">
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
            <div className="bg-white rounded-2xl overflow-hidden">
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
import { Lumia } from '@ai-sdk/Lumia';

async function main() {
  // Generate text with Lumia model
  const { text } = await generateText({
    model: Lumia('Lumia-v2'),
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
              <Button className="bg-white text-blue-600 rounded-2xl hover:bg-blue-50">
                View More Examples <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Links */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore the <span className="text-blue-600">Documentation</span></h2>
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

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 mr-3 flex items-center justify-center">
                  <span className="text-2xl font-bold">L</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Lumia.ai</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Empowering your creativity and productivity with advanced AI technology.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</Link>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link>
                <Link href="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</Link>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <a href="mailto:info@Lumia.ai" className="text-gray-400 hover:text-blue-400 transition-colors block">
                info@Lumia.ai
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/Hqzdev/nextjs-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl transition-all duration-300 ease-out hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function DocCard({ icon, title, description, href }: DocCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 ease-out hover:scale-105">
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

