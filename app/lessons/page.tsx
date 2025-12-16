


"use client";

import Image from "next/image";
import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300','200','600','700'] 
});

export default function LessonsPage() {
  const lessons = [
    {
      title: "recycling basics",
      level: "Level 1 - 2 Min",
      img: "/screen/boy-girl.png",
      button: "Continue",
    },
    {
      title: "recycling basics",
      level: "Level 1 - 2 Min",
      img: "/screen/boy-girl.png",
      button: "Continue",
    },
    {
      title: "recycling basics",
      level: "Level 1 - 2 Min",
      img: "/screen/boy-girl.png",
      button: "Continue",
    },
    {
      title: "parts of plant",
      level: "Level 2 - 4 Min",
      img: "/screen/boy-girl.png",
      button: "Start Lesson",
    },
    {
      title: "parts of plant",
      level: "Level 2 - 4 Min",
      img: "/screen/boy-girl.png",
      button: "Start Lesson",
    },
    {
      title: "parts of plant",
      level: "Level 2 - 4 Min",
      img: "/screen/boy-girl.png",
      button: "Start Lesson",
    },
  ];

  return (
    <div className="w-full h-screen flex bg-[#F5F5F5]">

      {/* Sidebar موجودة */}

      <div className="flex-1 p-6">

        {/* Title */}
        {/* <h1 className="text-3xl font-semibold text-center mb-2">Lessons</h1> */}

 <div className={`${poppins.className} w-full min-h-screen bg-[#F5F5F5] p-8`}>
  {/* Title */}
  <h1 className="text-3xl font-semibold mb-2 w-[34%] mx-auto text-center">
    Lessons
  </h1>



        {/* الخط الأفقي */}
        <div className="w-full h-[1px] bg-gray-300 mb-2"></div>

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex gap-1 justify-left mb-6">
          <span>home</span>
          <span>›</span>
          <span className="text-black">lessons</span>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lessons.map((item, i) => (
           <div
              key={i}
              className="bg-white rounded-2xl shadow p-2  hover:shadow-md transition"
            >
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  className="w-full h-[170px] object  rounded-2xl"
                  alt={item.title}
                />
              </div>

              <div className="text-center mt-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.level}</p>

<Link
  href="/lesson-page"
  className="mt-2 px-4 py-1 rounded-2xl font-medium transition inline-block text-white text-[21px] bg-[#3EF772] hover:bg-gray-700"
>
  {item.button}
</Link>


 
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
        </div> 
  );
}








