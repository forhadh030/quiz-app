"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, Home, Loader2, RotateCcw } from "lucide-react"

interface Question {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface QuizResults {
  questions: Question[]
  userAnswers: string[]
  correctAnswers: number
  totalQuestions: number
}

export default function ReviewPage() {
  const router = useRouter()
  const [results, setResults] = useState<QuizResults | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const questionsPerPage = 5

  useEffect(() => {
    // Retrieve results from sessionStorage
    const storedResults = sessionStorage.getItem("quizResults")

    if (!storedResults) {
      // If no results found, redirect back to setup
      router.push("/")
      return
    }

    setResults(JSON.parse(storedResults))
    setLoading(false)
  }, [router])

  const handleStartOver = () => {
    // Clear session storage and redirect to home
    sessionStorage.removeItem("quizQuestions")
    sessionStorage.removeItem("userAnswers")
    sessionStorage.removeItem("quizScore")
    sessionStorage.removeItem("quizResults")
    router.push("/")
  }

  const handleNewQuiz = () => {
    // Clear session storage and redirect to setup
    sessionStorage.removeItem("quizQuestions")
    sessionStorage.removeItem("userAnswers")
    sessionStorage.removeItem("quizScore")
    sessionStorage.removeItem("quizResults")
    router.push("/setup")
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (!results) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-700">No results found. Please take a quiz first.</p>
        <Button onClick={() => router.push("/")} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
          Go to Home
        </Button>
      </div>
    )
  }

  // Calculate pagination
  const totalPages = Math.ceil(results.questions.length / questionsPerPage)
  const indexOfLastQuestion = currentPage * questionsPerPage
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
  const currentQuestions = results.questions.slice(indexOfFirstQuestion, indexOfLastQuestion)
  const currentAnswers = results.userAnswers.slice(indexOfFirstQuestion, indexOfLastQuestion)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Detailed Review</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleNewQuiz} className="border-blue-300 text-blue-700 hover:bg-blue-50">
            <RotateCcw className="mr-2 h-4 w-4" />
            New Quiz
          </Button>
          <Button
            variant="ghost"
            onClick={handleStartOver}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            <Home className="mr-2 h-4 w-4" />
            Start Over
          </Button>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {currentQuestions.map((question, index) => {
          const actualIndex = indexOfFirstQuestion + index
          const isCorrect = results.userAnswers[actualIndex] === question.correct_answer

          return (
            <Card
              key={index}
              className={`bg-white border shadow-md rounded-xl ${isCorrect ? "border-l-4 border-l-green-500" : "border-l-4 border-l-red-500"}`}
            >
              <CardHeader className="pb-2 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <CardTitle
                    className="text-lg font-medium text-gray-800"
                    dangerouslySetInnerHTML={{ __html: question.question }}
                  />
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 ml-2" />
                  )}
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs font-medium text-gray-500">{question.category}</span>
                  <span className="text-xs font-medium text-gray-500">• {question.difficulty}</span>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">Your answer:</p>
                    <div
                      className={`p-3 rounded-md text-sm ${
                        isCorrect
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                      dangerouslySetInnerHTML={{ __html: results.userAnswers[actualIndex] || "No answer provided" }}
                    />
                  </div>

                  {!isCorrect && (
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-700">Correct answer:</p>
                      <div
                        className="p-3 rounded-md bg-green-50 text-green-800 text-sm border border-green-200"
                        dangerouslySetInnerHTML={{ __html: question.correct_answer }}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Simplified Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-500"
                : "hover:bg-blue-50 text-blue-700 border-blue-200"
            }`}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`w-10 h-10 rounded-md flex items-center justify-center ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "border hover:bg-blue-50 text-blue-700 border-blue-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed bg-gray-100 text-gray-500"
                : "hover:bg-blue-50 text-blue-700 border-blue-200"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

