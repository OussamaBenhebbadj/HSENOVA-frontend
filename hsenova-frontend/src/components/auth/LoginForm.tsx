"use client";
import { Eye, EyeOff, LockKeyhole, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
            <h1 className="font-primary text-3xl font-bold text-white ml-8 mt-16">Welcome back !</h1>
            <p className="ml-8 mt-2 text-grey font-primary">Sign in to your workspace.</p>

            <div className="mb-7">
            <label className="mt-8 ml-8 block text-base font-secondary text-white">
                Work Email
            </label>

            <div className="flex w-[600px] ml-8 mt-2 h-[50px] items-center rounded-md border border-white px-5">
                <Mail size={22} className="mr-3 text-white" />

                <input
                type="email"
                placeholder="user@company.com"
                className="w-full bg-transparent font-secondary text-base text-white outline-none placeholder:text-white"
                />
            </div>
        </div>

        <div>
            <label className="ml-8 block text-base font-secondary text-white">
                Password
            </label>

            <div className="flex w-[600px] ml-8 mt-2 h-[50px] items-center rounded-md border border-white px-5">
                <LockKeyhole size={22} className="mr-3 fill-white text-white" />

                <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent font-secondary text-base text-white outline-none placeholder:text-white"
                />

                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-3 text-white"
                >
                {showPassword ? (
                    <EyeOff size={23} />
                ) : (
                    <Eye size={23} />
                )}
                </button>
            </div>
        </div>

        <div className="mt-2 mr-14 text-right">
          <button
            type="button"
            className="font-secondary text-sm text-primary"
          >
            Forgot password ?
          </button>
        </div>

        {/* Sign in */}
        <button
          type="button"
          className="mt-8 ml-8 flex h-[49px] w-[600px] items-center justify-center gap-3 rounded-md bg-primary font-secondary text-lg font-medium text-white"
        >
          Sign in
          <ArrowRight size={27} />
        </button>

        {/* Or continue with */}
        <div className="my-8 flex items-center gap-3 w-[600px] ml-8 ">
          <div className="h-px flex-1 bg-white" />

          <span className="whitespace-nowrap font-secondary text-base text-white">
            Or continue with
          </span>

          <div className="h-px flex-1 bg-white" />
        </div>

        {/* Social login */}
        <div className="flex gap-12">

          {/* Google */}
          <button
            type="button"
            className="flex h-[38px] ml-8 w-[276px]  items-center justify-center gap-3 rounded-md border border-white font-secondary text-sm text-white"
          >
            <span className="font-bold text-base">G</span>
            Google
          </button>

          {/* Microsoft */}
          <button
            type="button"
            className="flex h-[38px] ml-1  w-[276px] items-center justify-center gap-3 rounded-md border border-white font-secondary text-sm text-white"
          >
            <span className="grid grid-cols-2 gap-[1px]">
              <span className="h-[7px] w-[7px] bg-[#F25022]" />
              <span className="h-[7px] w-[7px] bg-[#7FBA00]" />
              <span className="h-[7px] w-[7px] bg-[#00A4EF]" />
              <span className="h-[7px] w-[7px] bg-[#FFB900]" />
            </span>

            Microsoft
          </button>

        </div>

        {/* Create workspace */}
        <p className="mt-4 mr-12 text-center font-secondary text-base text-white">
          Don&apos;t have an account ?{" "}
          <Link
            href="/register"
            type="button"
            className="font-medium text-primary"
          >
            Create workspace
          </Link>
        </p>
        
        </div>
  );
}