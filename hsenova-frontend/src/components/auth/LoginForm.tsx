"use client";
import { Eye, EyeOff, LockKeyhole, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "../../lib/api";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");
    setLoading(true);
    try {
      const result = await login({ email, password });
      localStorage.setItem("token", result.token);
      router.push("/company-admin");
    } catch (err: any) {
      setError(err.message || "Email ou mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="font-primary text-3xl font-bold text-white ml-8 mt-16">Welcome back !</h1>
      <p className="ml-8 mt-2 text-grey font-primary">Sign in to your workspace.</p>

      {error && <p className="ml-8 mt-3 text-sm text-danger">{error}</p>}

      <div className="mb-7">
        <label className="mt-8 ml-8 block text-base font-secondary text-white">Work Email</label>
        <div className="flex w-[600px] ml-8 mt-2 h-[50px] items-center rounded-md border border-white px-5">
          <Mail size={22} className="mr-3 text-white" />
          <input
            type="email"
            placeholder="user@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent font-secondary text-base text-white outline-none placeholder:text-white"
          />
        </div>
      </div>

      <div>
        <label className="ml-8 block text-base font-secondary text-white">Password</label>
        <div className="flex w-[600px] ml-8 mt-2 h-[50px] items-center rounded-md border border-white px-5">
          <LockKeyhole size={22} className="mr-3 fill-white text-white" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent font-secondary text-base text-white outline-none placeholder:text-white"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-3 text-white">
            {showPassword ? <EyeOff size={23} /> : <Eye size={23} />}
          </button>
        </div>
      </div>

      <div className="mt-2 mr-14 text-right">
        <button type="button" className="font-secondary text-sm text-primary">Forgot password ?</button>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="mt-8 ml-8 flex h-[49px] w-[600px] items-center justify-center gap-3 rounded-md bg-primary font-secondary text-lg font-medium text-white disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign in"}
        {!loading && <ArrowRight size={27} />}
      </button>

      <p className="mt-4 mr-12 text-center font-secondary text-base text-white">
        Don&apos;t have an account ?{" "}
        <Link href="/register" className="font-medium text-primary">Create workspace</Link>
      </p>
    </div>
  );
}