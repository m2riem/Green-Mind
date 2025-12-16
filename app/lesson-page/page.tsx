



"use client";
import Image from "next/image";
import Link from "next/link";


export default function LessonPage() {
  const quizzes = [
    { id: 1, questions: 5 },
    { id: 2, questions: 5 },
    { id: 3, questions: 5 },
  ];

  const relatedLessons = [
    {
      id: 1,
      title: "Environment",
      level: 1,
      duration: "2 min",
      image: "/lesson1.png",
    },
    {
      id: 2,
      title: "Environment",
      level: 1,
      duration: "2 min",
      image: "/lesson1.png",
    },
    {
      id: 3,
      title: "Environment",
      level: 1,
      duration: "2 min",
      image: "/lesson1.png",
    },
    {
      id: 4,
      title: "Environment",
      level: 1,
      duration: "2 min",
      image: "/lesson1.png",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      {/* <Navbar /> */}

      <div className="max-w-6xl mx-auto p-6 md:p-10">
        {/* Video */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/recycling.jpg"
            alt="Lesson Video"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Title & Info */}
        <div className="mt-6">
          <h1 className="text-3xl font-semibold">Recycling Basics - Lesson 1</h1>
          <p className="text-gray-600 mt-1">
            Level 1 • Duration: 2 minutes
          </p>
        </div>

        {/* Overview */}
        <div className="mt-6 bg-white p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold text-xl">Overview</h2>
          <p className="text-gray-600 mt-2 leading-6">
            Learn how recycling helps protect our planet! In this video, kids will
            discover what recycling means, why it's important, and how simple actions
            like sorting plastic, paper, and metal ♻️
          </p>
        </div>

        {/* What You Will Learn */}
        <div className="mt-4 bg-white p-5 rounded-xl shadow-sm">
          <h2 className="font-semibold text-xl">What you will learn</h2>
          <ul className="mt-2 text-gray-600 space-y-1 list-disc list-inside">
            <li>What Recycling Means</li>
            <li>How To Sort Waste</li>
            <li>Recyclable Materials</li>
            <li>Why Recycling Helps Earth</li>
            <li>Simple Eco Habits</li>
          </ul>
        </div>

        {/* Quizzes */}
        <div className="mt-6">
          <h2 className="font-semibold mb-3 text-xl">Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className={`p-5 rounded-xl shadow-md text-center ${
                  quiz.id === 1 ? "bg-gray-100" : "bg-yellow-50"
                }`}
              >
                <h3 className="font-bold mb-1">Quiz {quiz.id}</h3>
                <p className="text-gray-600 mb-3">{quiz.questions} Questions</p>
                <Link
                  href={`/quiz/${quiz.id}`}
                  className="bg-[#00B467] text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition"
                >
                  Start
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Related Lessons */}
        <div className="mt-10">
          <h2 className="font-semibold mb-4 text-xl">Related Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {relatedLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-green-50 p-3 rounded-xl flex flex-col items-center text-center"
              >
                <Image
                  src={lesson.image}
                  width={150}
                  height={150}
                  alt={lesson.title}
                  className="rounded-xl"
                />
                <h3 className="mt-2 font-semibold">{lesson.title}</h3>
                <p className="text-gray-600 text-sm">
                  Level {lesson.level} • {lesson.duration}
                </p>
                <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded-full text-sm hover:scale-105 transition">
                  Watch
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
