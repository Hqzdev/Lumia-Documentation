import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "Getting Started with Lumia AI",
      description: "Learn how to integrate Lumia AI into your applications and start building intelligent features.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Tutorial"
    },
    {
      title: "Advanced Text Generation Techniques",
      description: "Explore advanced techniques for text generation using Lumia AI's powerful models.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Technical"
    },
    {
      title: "Building Chat Applications with Lumia AI",
      description: "A comprehensive guide to building interactive chat applications using Lumia AI's chat interface.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Tutorial"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Latest updates, tutorials, and insights about Lumia AI
        </p>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <CardDescription className="text-lg">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 