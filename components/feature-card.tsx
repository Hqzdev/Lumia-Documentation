"use client"

import { useState } from "react"
import { MessageSquare, Code, FileText, Brain, ArrowRight } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "MessageSquare":
        return <MessageSquare className="h-6 w-6" />
      case "Code":
        return <Code className="h-6 w-6" />
      case "FileText":
        return <FileText className="h-6 w-6" />
      case "Brain":
        return <Brain className="h-6 w-6" />
      default:
        return <MessageSquare className="h-6 w-6" />
    }
  }

  return (
    <div
      className="group relative overflow-hidden bg-white  p-8 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 text-white">
          {getIcon()}
        </div>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div
          className={`flex items-center text-blue-600 font-medium transition-all duration-300 ${
            isHovered ? "translate-x-2" : ""
          }`}
        >
          <span className="mr-2">Learn more</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -mr-12 -mt-12" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full -ml-12 -mb-12" />
    </div>
  )
} 