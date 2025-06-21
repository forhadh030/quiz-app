import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {

  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-xl border border-[#e5e7eb] shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2563eb] mb-4">Welcome to Trivia Challenge!</h1>
          <p className="text-xl text-[#374151]">Test your knowledge with questions from the Open Trivia Database</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center mb-8 text-[#6b7280] max-w-md">
            Challenge yourself with questions from various categories and difficulty levels. See how many you can answer correctly!
          </p>
          <Link
            href="/setup"    // Use basePath in the href
            className="px-8 py-3 bg-[#2563eb] text-white rounded-md hover:bg-[#1d4ed8] font-medium text-lg transition-colors shadow-md hover:shadow-lg"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}