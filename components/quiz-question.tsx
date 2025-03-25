"use client"

import { useState, useEffect } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Question {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface QuizQuestionProps {
  question: Question
  selectedAnswer: string
  onSelectAnswer: (answer: string) => void
}

export default function QuizQuestion({ question, selectedAnswer, onSelectAnswer }: QuizQuestionProps) {
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    // Combine correct and incorrect answers and shuffle them
    const allOptions = [...question.incorrect_answers, question.correct_answer]
    setOptions(shuffleArray(allOptions))
  }, [question])

  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array: string[]): string[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Function to decode HTML entities
  const decodeHTML = (html: string): string => {
    const textarea = document.createElement("textarea")
    textarea.innerHTML = html
    return textarea.value
  }

  return (
    <div className="space-y-6">
      <h3
        className="text-xl font-medium text-center mb-6 text-gray-800"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      <RadioGroup value={selectedAnswer} onValueChange={onSelectAnswer} className="space-y-3">
        {options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors 
              ${
                selectedAnswer === option
                  ? "bg-[#eff6ff] border-[#93c5fd] shadow-sm"
                  : "hover:bg-[#f9fafb] border-[#e5e7eb]"
              }`}
            onClick={() => onSelectAnswer(option)}
          >
            <RadioGroupItem value={option} id={`option-${index}`} className="text-[#2563eb] border-[#9ca3af]" />
            <Label
              htmlFor={`option-${index}`}
              className="flex-grow cursor-pointer text-[#374151]"
              dangerouslySetInnerHTML={{ __html: option }}
            />
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

