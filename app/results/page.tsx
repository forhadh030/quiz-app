"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, RotateCcw, List, Home } from "lucide-react"

interface QuizResults {
  questions: {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }[]
  userAnswers: string[]
  correctAnswers: number
  totalQuestions: number
}

export default function ResultsPage() {
  const router = useRouter()
  const [score, setScore] = useState<number | null>(null)
  const [results, setResults] = useState<QuizResults | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Retrieve results from sessionStorage
    const storedScore = sessionStorage.getItem("quizScore")
    const storedResults = sessionStorage.getItem("quizResults")

    if (!storedScore || !storedResults) {
      // If no results found, redirect back to setup
      router.push("/")
      return
    }

    setScore(Number.parseFloat(storedScore))
    setResults(JSON.parse(storedResults))
    setLoading(false)
  }, [router])

  const handleRestart = () => {
    // Clear session storage and redirect to setup
    sessionStorage.removeItem("quizQuestions")
    sessionStorage.removeItem("userAnswers")
    sessionStorage.removeItem("quizScore")
    sessionStorage.removeItem("quizResults")
    router.push("/setup")
  }

  const handleStartOver = () => {
    // Clear session storage and redirect to home
    sessionStorage.removeItem("quizQuestions")
    sessionStorage.removeItem("userAnswers")
    sessionStorage.removeItem("quizScore")
    sessionStorage.removeItem("quizResults")
    router.push("/")
  }

  const handleViewDetails = () => {
    router.push("/review")
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  // Determine color based on score
  const getScoreColor = () => {
    if (score === null) return "text-gray-500"
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-blue-600"
    if (score >= 40) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreRingColor = () => {
    if (score === null) return "text-gray-300"
    if (score >= 80) return "text-green-500"
    if (score >= 60) return "text-blue-500"
    if (score >= 40) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-end mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleStartOver}
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
        >
          <Home className="h-4 w-4 mr-2" />
          Start Over
        </Button>
      </div>

      <Card className="w-full max-w-md mx-auto bg-white border border-gray-200 shadow-lg rounded-xl">
        <CardHeader className="border-b border-gray-100 bg-gray-50 rounded-t-xl">
          <CardTitle className="text-center text-2xl text-blue-700">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className={`${getScoreRingColor()} stroke-current`}
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                  strokeDasharray={`${score ? score * 2.51 : 0} 251.2`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className={`absolute text-4xl font-bold ${getScoreColor()}`}>
                {score !== null ? Math.round(score) : 0}%
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-lg text-gray-700">
                You got <span className="font-bold text-blue-700">{results?.correctAnswers}</span> out of{" "}
                <span className="font-bold text-blue-700">{results?.totalQuestions}</span> questions correct!
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 border-t border-gray-100 bg-gray-50 p-4 rounded-b-xl">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleViewDetails}>
            <List className="mr-2 h-4 w-4" />
            View Detailed Results
          </Button>
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleRestart}>
            <RotateCcw className="mr-2 h-4 w-4" />
            New Quiz
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

