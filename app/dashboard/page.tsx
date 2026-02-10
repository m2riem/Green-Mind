"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoNotificationsOutline,
  IoSettingsOutline,
  IoPersonOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { PieChart, Pie, Cell } from "recharts";

/* ==================== DATA ==================== */
const totalPlants = 5;
const initialDonePlants = 3;

const initialTimeData = [
  { name: "part1", value: 30 },
  { name: "part2", value: 30 },
  { name: "part3", value: 40 },
];

const scanColors = ["#147c00", "#E5E7EB"];
const timeColors = ["#147c00", "#f6416c", "#E5E7EB"];

/* ==================== MAIN COMPONENT ==================== */
export default function Dashboard() {
  const [donePlants, setDonePlants] = useState(initialDonePlants);
  const [timeData, setTimeData] = useState(initialTimeData);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // ✅ Added this

  const scanData = [
    { name: "done", value: donePlants },
    { name: "left", value: totalPlants - donePlants },
  ];

  /* Handle Logout Function */
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="w-full min-h-screen flex bg-[#F5F5F5] relative">
      {/* Blur */}
      <div className="absolute inset-0 backdrop-blur-md z-0"></div>

      <div className="relative z-10 flex w-full h-screen">
        {/* ================= Sidebar ================= */}
        <div className="w-[350px] h-full bg-gradient-to-b from-[#00C9FF]/70 to-[#92FE9D]/70 backdrop-blur-lg shadow-lg rounded-tr-3xl rounded-br-3xl p-6 border border-white/30">
          <div className="flex items-center gap-3 mb-8">
            <Image src="/SCreen/logo.png" width={48} height={48} alt="logo" />
            <h2 className="text-xl font-semibold">Green Mind</h2>
          </div>

          <div className="flex flex-col gap-5">
            <MenuItem title="Dashboard" icon="/SCreen/dash.png" href="/dashboard" active />
            <MenuItem title="Lessons" icon="/SCreen/start lesson.png" href="/lessons" />
            <MenuItem title="Games" icon="/SCreen/games.png" href="/games" />
            <MenuItem title="AI Scan" icon="/SCreen/ai.png" href="/ai-scan" />
            <MenuItem title="Tree Growth" icon="/SCreen/tree-gro.png" href="/growth" />
            <MenuItem title="Album" icon="/SCreen/album.png" href="/album" />
          </div>
        </div>

        {/* ================= Main ================= */}
        <main className="flex-1 p-6 overflow-y-auto h-full">
          {/* Navbar */}
          <div className="flex justify-end items-center gap-4 mb-8 backdrop-blur-md p-4 rounded-xl shadow relative z-[999]">
            <Link href="/" className="hover:text-green-600 transition">
              Home
            </Link>

            <IoNotificationsOutline className="text-2xl cursor-pointer" />

            {/* ====== Settings Dropdown ====== */}
            <div className="relative">
              <IoSettingsOutline
                className="text-2xl cursor-pointer hover:rotate-90 transition"
                onClick={() => setOpenDropdown(!openDropdown)}
              />

              {openDropdown && (
                <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-xl border border-gray-100 py-2 z-50">

                  {/* ✅ زرار Logout يفتح البوب أب */}
                  <button
                    onClick={() => setShowLogoutPopup(true)}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                  >
                    <IoLogOutOutline />
                    Logout
                  </button>
                </div>
              )}
            </div>

            <Image
              src="/SCreen/cute.png"
              width={45}
              height={45}
              alt="avatar"
              className="rounded-full"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-center mb-6">Dashboard</h1>

          {/* ================= Welcome Card ================= */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center mb-9">
            <div>
              <h2 className="text-2xl font-bold">Welcome Back Adam!</h2>
              <p className="text-gray-500 mb-3">Let’s Grow Your Tree Today</p>

              <ProgressItem percentage={20} />

              <div className="flex gap-3 mt-4">
                <Link href="/lessons">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition">
                    Start Lesson
                  </button>
                </Link>

                <Link href="/games">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-xl cursor-pointer hover:scale-105 transition">
                    Play Game
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:mr-[90px]">
              <Image
                src="/SCreen/Group 45.png"
                width={170}
                height={170}
                alt="character"
                className="hidden md:block"
              />
            </div>
          </div>

          {/* ================= Main Cards ================= */}
          <div className="bg-white rounded-3xl p-6 shadow-md mb-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* My Tree */}
              <div className="bg-[#f9f9f9] p-6 rounded-2xl flex flex-col items-center">
                <h3 className="font-semibold mb-3">My Tree</h3>
                <Image src="/SCreen/tree.png" width={110} height={110} alt="tree" />
                <p className="text-gray-500 text-sm mt-3">Level 3</p>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#f9f9f9] rounded-2xl p-6">
                <h3 className="font-semibold mb-6 text-center">Quick Actions</h3>
                <div className="flex gap-8 justify-center">
                  <ActionCard imgSrc="/SCreen/start lesson.png" title="Start Lesson" />
                  <ActionCard imgSrc="/SCreen/camera.png" title="Scan Plant" />
                </div>
              </div>

              {/* Games Progress */}
              <div className="bg-[#f9f9f9] rounded-2xl p-6">
                <h3 className="font-semibold mb-6 text-center">Games Progress</h3>
                <div className="space-y-4">
                  <ProgressItem title="Puzzle" percentage={70} />
                  <ProgressItem title="Memory" percentage={50} />
                  <ProgressItem title="Matching" percentage={90} />
                </div>
              </div>
            </div>
          </div>

          {/* ================= Bottom Section ================= */}
          <div className="w-full flex justify-center -mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <ContinueLearning />
              <TodaysActivity
                scanData={scanData}
                scanColors={scanColors}
                timeData={timeData}
                timeColors={timeColors}
              />
            </div>
          </div>
        </main>
      </div>

      {/* ================= LOGOUT POPUP ================= */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[1000]">
          <div className="bg-white rounded-3xl shadow-2xl p-10 w-[90%] max-w-[480px] text-center relative">
            <div className="flex justify-center mb-4">
              <Image
                src="/SCreen/Group 45.png"
                width={120}
                height={120}
                alt="green character"
                className="animate-bounce-fast"
              />
            </div>

            <h2 className="text-3xl font-bold text-green-700 mb-3">
              Are you sure you want to logout?
            </h2>
            <p className="text-gray-600 mb-8">
              You’ll be redirected to the login page.
            </p>

            <div className="flex justify-center gap-6">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition font-medium text-lg"
              >
                Yes, Logout
              </button>

              <button
                onClick={() => setShowLogoutPopup(false)}
                className="bg-gray-300 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-400 transition font-medium text-lg"
              >
                Cancel
              </button>
            </div>
          </div>

          <style jsx global>{`
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            .animate-bounce-fast {
              animation: bounce 1s infinite;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}

/* ==================== Components ==================== */
function MenuItem({ title, icon, active, href }) {
  return (
    <Link href={href}>
      <div
        className={`px-4 py-3 rounded-xl flex items-center gap-3 text-sm transition ${
          active
            ? "bg-green-500 text-white shadow-md"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Image src={icon} width={26} height={26} alt={title} />
        {title}
      </div>
    </Link>
  );
}

function ActionCard({ imgSrc, title }) {
  return (
    <button className="bg-yellow-100 hover:bg-yellow-200 px-4 py-3 rounded-xl flex flex-col items-center gap-1 transition">
      <Image src={imgSrc} width={40} height={40} alt={title} />
      <span className="text-sm">{title}</span>
    </button>
  );
}

function ProgressItem({ title, percentage }) {
  return (
    <div className="mb-3">
      {title && <p className="text-sm mb-1">{title}</p>}
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ContinueLearning() {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-md w-fit self-start">
      <h3 className="font-semibold mb-8 text-center">Continue Learning</h3>

      <div className="flex gap-2 items-center mb-3">
        <Image src="/SCreen/boy-girl.png" width={100} height={100} alt="lesson" />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">Continue</span>
          <span className="text-sm text-gray-600">Parts of A Plant</span>
        </div>
      </div>

      <Link href="/ai-scan">
        <button className="mt-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm block mx-auto cursor-pointer hover:bg-green-700 transition">
          Continue
        </button>
      </Link>
    </div>
  );
}

function TodaysActivity({ scanData, scanColors, timeData, timeColors }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-fit self-start">
      <h3 className="font-semibold mb-4 text-center">Today’s Activity</h3>

      <div className="flex gap-6 justify-center">
        <div className="relative">
          <PieChart width={130} height={130}>
            <Pie
              data={scanData}
              innerRadius={42}
              outerRadius={58}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {scanData.map((_, i) => (
                <Cell key={i} fill={scanColors[i]} />
              ))}
            </Pie>
          </PieChart>
          <span className="absolute top-1/2 right-0 -translate-y-1/2 text-xs px-2 rounded-full">
            {scanData[0].value} Plants
          </span>
        </div>

        <div className="relative">
          <PieChart width={130} height={130}>
            <Pie
              data={timeData}
              innerRadius={42}
              outerRadius={58}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {timeData.map((_, i) => (
                <Cell key={i} fill={timeColors[i]} />
              ))}
            </Pie>
          </PieChart>
          <span className="absolute top-1/2 left-0 -translate-y-1/2 text-xs px-2 rounded-full">
            {timeData[0].value} Min
          </span>
          <span className="absolute top-1/2 right-0 -translate-y-1/2 text-xs px-2 rounded-full">
            {timeData[2].value} Min
          </span>
        </div>
      </div>

      <div className="mt-4 text-sm space-y-1 text-center flex flex-col items-center">
        <Legend color="linear-gradient(to bottom, #0dff49, #27661e)" text="Scan 3 Plants" />
        <Legend color="#f9a7d0" text="Lesson" />
        <Legend color="linear-gradient(to bottom, #65e66a, #38803b)" text="Games" />
      </div>
    </div>
  );
}

function Legend({ color, text }) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <span className="w-3 h-3 rounded-sm" style={{ background: color }} />
      <span>{text}</span>
    </div>
  );
}