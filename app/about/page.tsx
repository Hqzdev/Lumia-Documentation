"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users, Target, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        About <span className="text-blue-600">Yumi AI</span>
      </h1>
      <p className="text-xl text-gray-700 mb-12">
        Empowering developers with cutting-edge AI technology
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Mission */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Making AI accessible to everyone</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              At Yumi AI, we believe in democratizing artificial intelligence. Our mission is to provide developers with powerful, easy-to-use tools that enable them to build innovative applications with AI capabilities. We're committed to making AI technology accessible, reliable, and efficient for developers of all skill levels.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Our Vision</CardTitle>
            <CardDescription>Shaping the future of AI development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We envision a world where AI is seamlessly integrated into every application, enhancing user experiences and solving complex problems. Our goal is to be at the forefront of AI innovation, providing developers with the tools they need to create the next generation of intelligent applications.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Our <span className="text-blue-600">Values</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Innovation */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We constantly push the boundaries of what's possible with AI, developing new features and capabilities that help developers create groundbreaking applications.
            </p>
          </CardContent>
        </Card>

        {/* Community */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We believe in the power of community and actively engage with developers to understand their needs, gather feedback, and foster collaboration.
            </p>
          </CardContent>
        </Card>

        {/* Quality */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We maintain the highest standards in our technology, ensuring reliability, performance, and security in every aspect of our platform.
            </p>
          </CardContent>
        </Card>

        {/* Accessibility */}
        <Card className="rounded-2xl">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle>Accessibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We strive to make AI technology accessible to developers of all skill levels, providing clear documentation, tutorials, and support.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 