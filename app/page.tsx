// import React from 'react'

// export default function Home() {
//   return (
//     <h1>Home Page</h1>
//   )
// }



// "use client";

// export default function SelectRole() {
//   return (
//     <div
//       className=" min-h-screen flex flex-col items-center justify-start pt-14 bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/sCreen/tree pic.png')",
//       }}
//     >
//       <h1 className="text-3xl font-bold mb-14 text-white drop-shadow-md">
//         Let’s get started! Please select your role
//       </h1>

//       <div className="flex gap-20">
//         {/* PARENT CARD */}
//         <div className="w-[270px] h-[350px] bg-yellow-300 rounded-2xl shadow-xl flex flex-col items-center p-4">
//           <img
//             src="/sCreen/Union.png"
//             className="w-[150px] h-[150px] rounded-xl object-cover"
//           />

//           <button className="mt-auto bg-[#5b0808] text-white w-[150px] py-2 rounded-full">
//             I’m a parent
//           </button>
//         </div>

//         {/* CHILD CARD */}
//         <div className="w-[270px] h-[350px] bg-[#eacdc4] rounded-2xl shadow-xl flex flex-col items-center p-4">
//           <img
//             src="/sCreen/child.png"
//             className="w-[150px] h-[150px] rounded-xl object-cover"
//           />

//           <button className="mt-auto bg-[#5b0808] text-white w-[150px] py-2 rounded-full">
//             I’m a child
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }







"use client";
import Link from "next/link";
// export default function ButtonPage() 
 
export default function SelectRole() {
  return (
    <div className=" min-h-screen relative flex flex-col items-center justify-start pt-14">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/sCreen/tree pic.png')",
        }}
      />

      {/* TRANSPARENT LAYER */}
      <div className="absolute inset-0 bg-white/10" />

      {/* CONTENT */}
      <div className="relative z-5 flex flex-col items-center">
        
{/* <h1 className="text-[45px] font-bold mb-10">
  Let’s get started! Please select your role
</h1> */}

<h1 className="text-[45px] font-bold mb-10 whitespace-nowrap overflow-x-auto">
  Let’s get started! Please select your role
</h1>


        <div className="flex gap-20">
          

<div className="flex gap-20 justify-center mt-5">
  {/* PARENT CARD */}
  <div className="w-[270px] h-[350px] bg-[#F6FF4B] rounded-2xl shadow-xl flex flex-col items-center p-4">
    {/* عنصر فاضي لدفع الصورة للنص تقريبًا */}
    <div className="flex-1"></div>

    {/* الصورة */}
    <img
      src="/sCreen/Union.png"
      className="w-[140px] h-[170px] rounded-xl object-cover"
    /> 

   <Link href="/parent">
    <button className="mt-2 bg-[#4C0000] text-white w-[150px] py-0 rounded-xl text-[22px] font-medium cursor-pointer ">
      I’m a parent
    </button>
     </Link>

    {/* مسافة أسفل البوكس (اختياري) */}
    <div className="flex-1"></div>
  </div>

  {/* CHILD CARD */}
  <div className="w-[270px] h-[350px] bg-[#FFD9D3] rounded-2xl shadow-xl flex flex-col items-center p-4">
    <div className="flex-1"></div>

    <img
      src="/sCreen/child.png"
      className="w-[140px] h-[170px] rounded-xl object-cover"
    />  



     <Link href="/child">
      <button
      className="mt-2 bg-[#4C0000] text-white w-[150px] py-0 rounded-xl text-[22px] font-medium cursor-pointer"
     >
        I’m a child
      </button>
   </Link>




    <div className="flex-1"></div>
  </div>
</div>





        </div>
      </div>

    </div>
  );
}
