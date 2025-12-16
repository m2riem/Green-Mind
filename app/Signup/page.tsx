

// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast } from "sonner";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Poppins } from "next/font/google"

// const poppinsMixed = Poppins({
//   subsets: ["latin"],
//   weight: "500" 
// })

// const poppinsSemi = Poppins({
//   subsets: ["latin"],
//   weight: "600" 
// })

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// import { SignupSchema, SignupSchemaType } from "@/components/ui/schema/SignupSchema";




// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: "400", 
// });const poppinsMedium = Poppins({
//   subsets: ["latin"],
//   weight: "500", 
// });



// export default function SignupPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const form = useForm<SignupSchemaType>({
//     defaultValues: {
//       fullName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       childName: "",
//       childCode: "",
//     },
//     resolver: zodResolver(SignupSchema),
//   });

//   async function handleSignup(values: SignupSchemaType) {
//     setLoading(true);
//     try {
//       await axios.post("YOUR-API", values);

//       toast.success("Account created successfully! Redirecting...");
//       setTimeout(() => router.push("/login"), 1500);
//     } catch (err: any) {
//       toast.error(err.response?.data?.message || err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center relative">



// <img 
//   src="/sCreen/signup.jpg" 
//   className="absolute inset-0 w-full h-full object-cover z-10 opacity-80"
//   alt="bg"
// />



// <img
//   src="/sCreen/logo.png"
//   alt="logo"
//   className="hidden md:block absolute top-8 left-16 w-[200px] h-[220px] z-20"
// />




// <div className="mb-8 text-center relative z-10 -mt-6 text-[54px]">
 
//   <h2 className="font-normal text-[52px] mb-5">
//   Welcome to the Family portal
// </h2>

//  <p className={`${poppinsSemi.className} text-[18px] text-Black-50 mt-1`}>
//     Create your account to get started.
//   </p>
// </div> 



     
//          <div className="relative z-10 w-full max-w-2xl bg-white bg-opacity-90 rounded-[40px] shadow-xl p-5">

//          <h3 className={`${poppinsSemi.className} text-[34px] text-center mb-8`}>
//   Sign up
// </h3>

//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(handleSignup)}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
           
//             <FormField
//               control={form.control}
//               name="fullName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Full Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter Your Full Name" {...field} autoFocus disabled={loading} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

          
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter Your Email" {...field} disabled={loading} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

           
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="Enter Your Password" {...field} disabled={loading} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

          
//             <FormField
//               control={form.control}
//               name="confirmPassword"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Confirm Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="Confirm Your Password" {...field} disabled={loading} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

          
//             <FormField
//               control={form.control}
//               name="childName"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Child Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter Child Name" {...field} disabled={loading} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

            
//             <FormField
//               control={form.control}
//               name="childCode"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Child Secret Code</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter Secret Code" {...field} disabled={loading} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

      
//             <div className="md:col-span-2 mt-1">
//               <Button
//                 type="submit"
//                 disabled={loading}
           
//   style={{ backgroundColor: "#147C00" }}
//                 className="w-1/2 py-2 rounded-xl font-bold cursor-pointer text-white mx-auto block bg-green-600 hover:bg-green-700"
//               >
          
//                 {loading ? "Processing..." : "Sign Up"}
//               </Button>

//               <p className="text-center mt-4 text-[#005303]">
//                 Already have an account?
                
//                 <span
//   className={`${poppinsMixed.className} text-[18px] text-[#005303] font-semibold cursor-pointer ml-2`}
//   onClick={() => router.push("/login")}
// >
//   Log in
// </span>

//               </p>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }





















"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Poppins } from "next/font/google";

import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlineIdentification } from "react-icons/hi";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SignupSchema, SignupSchemaType } from "@/components/ui/schema/SignupSchema";

const poppinsMixed = Poppins({ subsets: ["latin"], weight: "500" });
const poppinsSemi = Poppins({ subsets: ["latin"], weight: "600" });

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<SignupSchemaType>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      childName: "",
      childCode: "",
    },
    resolver: zodResolver(SignupSchema),
  });

  async function handleSignup(values: SignupSchemaType) {
    setLoading(true);
    try {
      await axios.post("YOUR-API", values);
      toast.success("Account created successfully! Redirecting...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: any) {
      toast.error(err.response?.data?.message || err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-cover bg-center relative">

      <img 
        src="/sCreen/signup.jpg" 
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-80"
        alt="bg"
      />

      <img
        src="/sCreen/logo.png"
        alt="logo"
        className="hidden md:block absolute top-8 left-16 w-[200px] h-[220px] z-20"
      />

      <div className="mb-8 text-center relative z-10 -mt-6 text-[54px]">
        <h2 className="font-normal text-[52px] mb-5">Welcome to the Family portal</h2>
        <p className={`${poppinsSemi.className} text-[18px] text-Black-50 mt-1`}>
          Create your account to get started.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-white bg-opacity-90 rounded-[40px] shadow-xl p-5">
        <h3 className={`${poppinsSemi.className} text-[34px] text-center mb-8`}>Sign up</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSignup)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Enter Your Full Name" {...field} autoFocus disabled={loading} className="pr-10"/>
                      <HiOutlineUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Enter Your Email" {...field} disabled={loading} className="pr-10"/>
                      <HiOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="password" placeholder="Enter Your Password" {...field} disabled={loading} className="pr-10"/>
                      <HiOutlineLockClosed className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type="password" placeholder="Confirm Your Password" {...field} disabled={loading} className="pr-10"/>
                      <HiOutlineLockClosed className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Child Name */}
            <FormField
              control={form.control}
              name="childName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Child Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Enter Child Name" {...field} disabled={loading} className="pr-10"/>
                      <HiOutlineUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Child Code */}
            <FormField
              control={form.control}
              name="childCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Child Secret Code</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Enter Secret Code" {...field} disabled={loading} className="pr-10"/>
                      <HiOutlineIdentification className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="md:col-span-2 mt-1">
              <Button
                type="submit"
                disabled={loading}
                style={{ backgroundColor: "#147C00" }}
                className="w-1/2 py-2 rounded-xl font-bold cursor-pointer text-white mx-auto block bg-green-600 hover:bg-green-700"
              >
                {loading ? "Processing..." : "Sign Up"}
              </Button>

              <p className="text-center mt-4 text-[#005303]">
                Already have an account?
                <span
                  className={`${poppinsMixed.className} text-[18px] text-[#005303] font-semibold cursor-pointer ml-2`}
                  onClick={() => router.push("/login")}
                >
                  Log in
                </span>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
