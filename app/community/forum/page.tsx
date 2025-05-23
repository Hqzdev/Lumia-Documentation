import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Search } from "lucide-react"

export default function ForumPage() {
  const forumCategories = [
    {
      title: "General Discussion",
      description: "General topics about Lumia AI and community updates",
      posts: 125,
      icon: MessageSquare
    },
    {
      title: "Help & Support",
      description: "Get help with using Lumia AI and troubleshooting",
      posts: 89,
      icon: MessageSquare
    },
    {
      title: "Feature Requests",
      description: "Suggest and discuss new features for Lumia AI",
      posts: 45,
      icon: MessageSquare
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Community Forum</h1>
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="grid gap-6">
          {forumCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:translate-y-[-2px] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 rounded-full">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{category.posts} posts</span>
                    <Button variant="ghost" className="text-blue-600">
                      View Discussions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
