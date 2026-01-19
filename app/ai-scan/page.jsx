"use client";
import Link from "next/link";
import Image from "next/image";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";

export default function AiScanPage() {
  return (
    <div className="w-full h-screen flex bg-[#F5F5F5] relative overflow-hidden">
      {/* Overlay Blur */}
      <div className="absolute inset-0 backdrop-blur-md z-0"></div>

      {/* Page Content */}
      <div className="relative z-10 flex w-full h-full">
        {/* Sidebar */}
        <div className="w-[350px] h-full bg-gradient-to-b from-[#00C9FF]/70 to-[#92FE9D]/70 backdrop-blur-lg shadow-lg rounded-tr-3xl rounded-br-3xl p-6 border border-white/30">
          <div className="flex items-center gap-3 mb-8">
            <Image src="/SCreen/logo.png" width={48} height={48} alt="logo" />
            <h2 className="text-xl font-semibold">Green Mind</h2>
          </div>

          <div className="flex flex-col gap-5">
            <MenuItem title="Dashboard" icon="/SCreen/dash.png" href="/child" />
            <MenuItem
              title="Lessons"
              icon="/SCreen/start lesson.png"
              href="/lessons"
            />
            <MenuItem title="Games" icon="/SCreen/games.png" href="/games" />
            <MenuItem
              title="AI Scan"
              icon="/SCreen/ai.png"
              href="/ai-scan"
              active
            />
            <MenuItem
              title="Tree Growth"
              icon="/SCreen/tree-gro.png"
              href="/growth"
            />
            <MenuItem title="Album" icon="/SCreen/album.png" href="/album" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-5 p-0 top-6 ">
          {/* Navbar */}
          <div className="flex justify-end items-center gap-4 mb-8 bg-white/0  p-4 rounded-xl shadow lg:w-[100%]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <IoNotificationsOutline className="text-2xl cursor-pointer" />
            <IoSettingsOutline className="text-2xl cursor-pointer hover:rotate-90 transition" />
            <Image
              src="/SCreen/cute.png"
              width={45}
              height={45}
              alt="avatar"
              className="rounded-full cursor-pointer"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-center mb-6">
            AI Plant Scan
          </h1>

          {/* Upload Section */}
          <div className="relative flex flex-col items-center mb-12">
            <div className="bg-[#EFFFF4] border-4 border-dashed border-green-600 rounded-3xl p-20 flex flex-col items-center justify-center text-center w-[70%] overflow-hidden relative z-30 shadow-md">
              <Image
                src="/SCreen/camera-ai.png"
                width={150}
                height={150}
                alt="camera"
                className="rounded-xl"
              />
              <p className="mt-4 text-gray-600">Upload Photo From Gallery</p>
              <button className="mt-4 bg-green-600 text-white px-8 py-2 rounded-xl hover:scale-105 transition">
                Upload
              </button>
            </div>

            {/* Green Character Behind */}
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
            <div className="bg-white rounded-3xl shadow-md p-10 flex items-center gap-4 hover:scale-105 transition shadow-md ">
              <Image
                src="/SCreen/tree.png"
                width={200}
                height={100}
                alt="tree"
              />
              <div>
                <h3 className="text-green-600 font-bold text-lg">+2 XP!</h3>
                <p className="text-sm text-gray-600">
                  Scanning your real plants helps you grow your tree
                </p>
              </div>
            </div>

            {/* Recent Scans */}
            <div className="bg-white rounded-3xl shadow-md p-10 hover:scale-105 transition shadow-md">
              <h3 className="font-semibold mb-4">Recent Plant You Scanned</h3>
              <div className="flex gap-8">
                <Image
                  src="/SCreen/tree-ai.jpg"
                  width={80}
                  height={50}
                  className="rounded-xl"
                  alt="plant"
                />
                <Image
                  src="/SCreen/tree-ai.jpg"
                  width={80}
                  height={50}
                  className="rounded-xl"
                  alt="plant"
                />
                <Image
                  src="/SCreen/tree-ai.jpg"
                  width={80}
                  height={50}
                  className="rounded-xl"
                  alt="plant"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Menu Item */
function MenuItem({ title, icon, active, href }) {
  return (
    <Link href={href}>
      <div
        className={`px-4 py-2 rounded-xl cursor-pointer text-sm flex items-center gap-3 transition
        ${
          active
            ? "bg-green-500 text-white shadow-md"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Image src={icon} width={30} height={22} alt={title} />
        {title}
      </div>
    </Link>
  );
}
