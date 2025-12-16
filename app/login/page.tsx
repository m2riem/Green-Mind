

"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { HiOutlineMail, HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { loginSchema, loginSchemaForm } from "@/components/ui/schema/loginSchema"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const poppinsMedium = Poppins({ subsets: ["latin"], weight: "500" });

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<loginSchemaForm>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  })

  const handleTogglePassword = () => setShowPassword(!showPassword)

  async function handlelogin(values: loginSchemaForm) {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    })
    if (response?.ok) {
      toast.success("You logged in successfully")
      router.push("/")
    } else {
      toast.error(response?.error || "Invalid credentials")
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 relative">

      {/* Logo */}
      <img
        src="/sCreen/logo.png"
        alt="logo"
        className="hidden md:block absolute top-1 left-16 w-[200px] h-[220px] z-20"
      />

      {/* Header */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-black text-center">
        <h2 className="font-normal text-[52px] leading-[1.1]">
          Welcome to the Family Portal
        </h2>
        <p className={`${poppins.className} text-[18px] leading-[1.2]`}>
          Please Log In As Parent Or Child To Continue
        </p>
      </div>

      {/* Background Image */}
      <img
        src="/sCreen/login2.png"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt="bg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/9 -z-5"></div>

      {/* Form Container */}
      <div className="relative z-10 bg-white rounded-[50px] shadow-xl p-5 flex flex-col md:flex-row gap-8 border border-black/10" style={{ width: '700px' }}>
        <div className="flex-1">

          <div className="flex justify-center">
            <h1 className={`${poppinsMedium.className} text-[34px] mb-2 text-center`}>
              Login
            </h1>
          </div>


          {/* Form with context */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handlelogin)}>

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
  <div className="relative mb-2">
    <Input
      type="email"
      {...field}
      className="pr-10"
      placeholder="Enter your email"
    />
    <HiOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
  </div>
</FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />


<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Password:</FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"} 
            {...field}
            className="pr-10 "
            placeholder="Enter your password"
          />
        
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500  "
            onClick={() => setShowPassword(!showPassword)} 
          >
            {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
          </span>
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>




             
              <div className="flex justify-between text-sm mb-4 mt-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link href="/ForgetPassword" className="font-semibold hover:underline">
                  Forget your password?
                </Link>
              </div>

         
              <button
                type="submit"
                style={{ backgroundColor: "#1BAA00" }}
                className="w-full py-2 rounded-lg font-bold cursor-pointer"
              >
                Login
              </button>

           
              <div className="flex gap-2 mt-3">
               
                <button className="flex items-center gap-2 p-2 border border-black/30 rounded-lg whitespace-nowrap w-1/2 justify-center">
                 
                  <FcGoogle size={20} />
                  <Link href="/google-login">
                  Login with Google
                  </Link>
                </button>




                <button
                  type="button"
                  className="flex items-center gap-3 p-2 border border-black/30 rounded-lg whitespace-nowrap w-1/2 justify-center"
                >
                  <FaApple size={20} />
                  Login with Apple
                </button>
              </div>

             

<p className={`${poppins.className} text-[#005303] text-[16px] text-right p-2`}>
  {"Don't have an account? "}
  <Link
    href="/Signup"
    className="font-bold text-[16px] cursor-pointer hover:underline"
  >
    Create One
  </Link>
</p>

            </form>
          </Form>

        </div>

        {/* Right-side Image */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <img src="/sCreen/login.png" alt="kid" className="w-64" />
        </div>

      </div>

    </div>
  )
}
