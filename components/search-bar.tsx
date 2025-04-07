"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="relative flex w-full items-center">
      <Input
        type="text"
        placeholder="Search documentation..."
        className="w-full rounded-full pr-10 focus-visible:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button
        type="submit"
        size="icon"
        className="absolute right-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
      >
        <Search className="h-4 w-4" />
      </Button>
    </form>
  )
}
