"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import QuizQuestion from "@/components/quiz-question"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, Loader2, Home } from "lucide-react"

interface Question {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export default function QuizPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState<Question[]>([])
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    // Retrieve quiz data from sessionStorage
    const storedQuestions = sessionStorage.getItem("quizQuestions")
    const storedAnswers = sessionStorage.getItem("userAnswers")

    if (!storedQuestions) {
      // If no questions found, redirect back to setup
      router.push("/setup")
      return
    }

    setQuestions(JSON.parse(storedQuestions))
    setUserAnswers(storedAnswers ? JSON.parse(storedAnswers) : [])
    setLoading(false)
  }, [router])

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = answer
    setUserAnswers(newAnswers)

    // Update sessionStorage
    sessionStorage.setItem("userAnswers", JSON.stringify(newAnswers))
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmit = () => {
    setSubmitting(true)

    // Calculate score
    let correctAnswers = 0
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct_answer) {
        correctAnswers++
      }
    })

    const score = (correctAnswers / questions.length) * 100

    // Store results
    sessionStorage.setItem("quizScore", score.toString())
    sessionStorage.setItem(
      "quizResults",
      JSON.stringify({
        questions,
        userAnswers,
        correctAnswers,
        totalQuestions: questions.length,
      }),
    )

    // Navigate to results page
    router.push("/results")
  }

  const handleStartOver = () => {
    // Clear session storage and redirect to home
    sessionStorage.removeItem("quizQuestions")
    sessionStorage.removeItem("userAnswers")
    sessionStorage.removeItem("quizScore")
    sessionStorage.removeItem("quizResults")
    router.push("/")
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-[#2563eb]" />
      </div>
    )
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleStartOver}
            className="text-[#2563eb] hover:text-[#1d4ed8] hover:bg-[#eff6ff]"
          >
            <Home className="h-4 w-4 mr-2" />
            Start Over
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-[#4b5563]">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-[#4b5563]">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-[#e5e7eb]" />
      </div>

      {questions.length > 0 && (
        <Card className="w-full bg-white border border-[#e5e7eb] shadow-lg rounded-xl">
          <CardHeader className="border-b border-[#f3f4f6] bg-[#f9fafb] rounded-t-xl">
            <CardTitle className="text-center text-[#2563eb]">{questions[currentQuestionIndex].category}</CardTitle>
            <div className="flex justify-center gap-2 mt-2">
              <span className="inline-flex items-center rounded-full bg-[#dbeafe] text-[#1e40af] px-2.5 py-0.5 text-xs font-semibold capitalize">
                {questions[currentQuestionIndex].difficulty}
              </span>
              <span className="inline-flex items-center rounded-full bg-[#f3e8ff] text-[#6b21a8] px-2.5 py-0.5 text-xs font-semibold capitalize">
                {questions[currentQuestionIndex].type === "multiple" ? "Multiple Choice" : "True/False"}
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <QuizQuestion
              question={questions[currentQuestionIndex]}
              selectedAnswer={userAnswers[currentQuestionIndex] || ""}
              onSelectAnswer={handleAnswerSelect}
            />
          </CardContent>
          <CardFooter className="flex justify-between border-t border-[#f3f4f6] bg-[#f9fafb] p-4 rounded-b-xl">
            <Button
              variant="outline"
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="border-[#d1d5db] text-[#4b5563] hover:bg-[#f3f4f6]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            {isLastQuestion ? (
              <Button
                onClick={handleSubmit}
                disabled={submitting || userAnswers.some((answer) => answer === "")}
                className="bg-[#16a34a] hover:bg-[#15803d] text-white"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" /> Submit
                  </>
                )}
              </Button>
            ) : (
              <Button
                onClick={goToNextQuestion}
                disabled={!userAnswers[currentQuestionIndex]}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
              >
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

