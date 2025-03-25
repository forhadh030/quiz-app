"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Category {
  id: number
  name: string
}

export default function QuizSetup() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [fetchingCategories, setFetchingCategories] = useState(true)

  const [quizConfig, setQuizConfig] = useState({
    amount: "10",
    category: "",
    difficulty: "",
    type: "",
  })

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://opentdb.com/api_category.php")
        const data = await response.json()
        setCategories(data.trivia_categories)
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setFetchingCategories(false)
      }
    }

    fetchCategories()
  }, [])

  const handleChange = (name: string, value: string) => {
    setQuizConfig((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const startQuiz = async () => {
    setLoading(true)

    // Build the API URL with the selected parameters
    let apiUrl = `https://opentdb.com/api.php?amount=${quizConfig.amount}`

    if (quizConfig.category && quizConfig.category !== "any") {
      apiUrl += `&category=${quizConfig.category}`
    }

    if (quizConfig.difficulty && quizConfig.difficulty !== "any") {
      apiUrl += `&difficulty=${quizConfig.difficulty}`
    }

    if (quizConfig.type && quizConfig.type !== "any") {
      apiUrl += `&type=${quizConfig.type}`
    }

    try {
      const response = await fetch(apiUrl)
      const data = await response.json()

      if (data.response_code === 0) {
        // Store the quiz data in sessionStorage
        sessionStorage.setItem("quizQuestions", JSON.stringify(data.results))
        sessionStorage.setItem("userAnswers", JSON.stringify(Array(data.results.length).fill("")))

        // Navigate to the quiz page
        router.push("/quiz")
      } else {
        alert("Error fetching questions. Please try different parameters.")
      }
    } catch (error) {
      console.error("Error starting quiz:", error)
      alert("Error starting quiz. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center mb-2">
          <Link href="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <CardTitle className="text-center flex-1">Configure Your Quiz</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">Number of Questions</Label>
          <Select value={quizConfig.amount} onValueChange={(value) => handleChange("amount", value)}>
            <SelectTrigger id="amount">
              <SelectValue placeholder="Select number of questions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={quizConfig.category}
            onValueChange={(value) => handleChange("category", value)}
            disabled={fetchingCategories}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder={fetchingCategories ? "Loading categories..." : "Any Category"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Category</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="difficulty">Difficulty</Label>
          <Select value={quizConfig.difficulty} onValueChange={(value) => handleChange("difficulty", value)}>
            <SelectTrigger id="difficulty">
              <SelectValue placeholder="Any Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Difficulty</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Question Type</Label>
          <Select value={quizConfig.type} onValueChange={(value) => handleChange("type", value)}>
            <SelectTrigger id="type">
              <SelectValue placeholder="Any Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="multiple">Multiple Choice</SelectItem>
              <SelectItem value="boolean">True / False</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full mt-6" onClick={startQuiz} disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Start Quiz"
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

