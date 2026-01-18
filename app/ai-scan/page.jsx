"use client";
import Link from "next/link";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

export default function AiScanPage() {
  return (
    <div className="w-full h-screen bg-[#F5F5F5] flex overflow-hidden">

      {/* Sidebar */}
      <div className="w-[260px] h-full bg-white shadow-md rounded-tr-3xl rounded-br-3xl p-6 mt-5">
        <div className="flex items-center gap-3 mb-8">
          <Image src="/SCreen/logo.png" width={48} height={48} alt="logo" />
          <h2 className="text-xl font-semibold">Green Mind</h2>
        </div>

        <div className="flex flex-col gap-5">
          <MenuItem title="Dashboard" icon="/SCreen/dash.png" href="/child" />
          <MenuItem title="Lessons" icon="/SCreen/start lesson.png" href="/lessons" />
          <MenuItem title="Games" icon="/SCreen/games.png" href="/games" />
          <MenuItem title="AI Scan" icon="/SCreen/ai.png" href="/ai-scan" active />
          <MenuItem title="Tree Growth" icon="/SCreen/tree-gro.png" href="/growth" />
          <MenuItem title="Album" icon="/SCreen/album.png" href="/album" />
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="relative flex items-center justify-center mb-6">
          <h1 className="text-2xl font-semibold absolute left-1/2 -translate-x-1/2">
            AI Plant Scan
          </h1>

          <div className="flex items-center gap-6 ml-auto">
            <IoNotificationsOutline className="text-2xl" />
            <Image
              src="/screen/cute.png"
              width={45}
              height={45}
              alt="avatar"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-300 mb-6"></div>
        
<div className="relative flex flex-col items-center mb-8">

  <div className="bg-[#EFFFF4] border-4 border-dashed border-green-500 rounded-3xl p-10 flex flex-col items-center justify-center text-center w-[70%] overflow-hidden relative z-10">
    <Image
      src="/SCreen/camera-ai.png"
      width={150}
      height={150}
      alt="camera"
      className="rounded-xl"
    />
    <p className="mt-4 text-gray-600">Upload Photo From Gallery</p>
    <button className="mt-4 bg-green-600 text-white px-8 py-2 rounded-xl">
      Upload
    </button>
  </div>

  <Image
    src="/SCreen/Group 45.png"
    width={230}
    height={230}
    alt="green character"
    className="absolute -top-[45px] right-[120px] z-0"
  />
</div>


        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* XP Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
            <Image src="/screen/tree.png" width={80} height={80} alt="tree" />
            <div>
              <h3 className="text-green-600 font-bold text-lg">+2 XP!</h3>
              <p className="text-sm text-gray-600">
                Scanning your real plants helps you grow your tree
              </p>
            </div>
          </div>

          {/* Recent Scans */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold mb-4">Recent Plant You Scanned</h3>
            <div className="flex gap-3">
              <Image src="/SCreen/tree-ai.jpg" width={80} height={50} className="rounded-xl" alt="plant" />
              <Image src="/SCreen/tree-ai.jpg" width={80} height={50} className="rounded-xl" alt="plant" />
              <Image src="/SCreen/tree-ai.jpg" width={80} height={50} className="rounded-xl" alt="plant" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* COMPONENT */

function MenuItem({ title, icon, active, href }) {
  return (
    <Link href={href}>
      <div
        className={`px-4 py-2 rounded-xl cursor-pointer text-sm flex items-center gap-3
        ${active ? "bg-green-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}
      >
        <Image src={icon} width={22} height={22} alt={title} />
        {title}
      </div>
    </Link>
  );
}
