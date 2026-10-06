"use client";

import {
  UserRound, Mail, Building2, UsersRound, BriefcaseBusiness,
  ChevronDown, ArrowRight, Check,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signup, login } from "../../lib/api";

export default function CreateWorkspaceForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    companyName: "",
    country: "",
    companySize: "",
    industry: "",
  });
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    setError("");

    if (!accepted) {
      setError("Vous devez accepter les conditions.");
      return;
    }

    setLoading(true);
    try {
      await signup({ ...formData, agreeToTerms: accepted });
      const loginResult = await login({ email: formData.email, password: formData.password });
      localStorage.setItem("token", loginResult.token);
      router.push("/company-admin");
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[700px] pt-16">
      <div className="mb-7">
        <h1 className="font-primary text-3xl font-bold text-white ml-8">Let's get started</h1>
        <p className="mt-1 font-secondary text-lg text-white ml-8">
          All fields marked with <span className="text-danger">*</span> are required
        </p>
      </div>

      {error && (
        <p className="ml-8 mb-4 text-sm text-danger">{error}</p>
      )}

      <div className="grid grid-cols-2 gap-x-9 gap-y-4">
        <FormField
          label="Full Name" required icon={<UserRound size={20} />}
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(v) => handleChange("fullName", v)}
        />
        <FormField
          label="Work Email" required icon={<Mail size={20} />}
          placeholder="Enter your work email" type="email"
          value={formData.email}
          onChange={(v) => handleChange("email", v)}
        />
        <FormField
          label="Password" required icon={<UserRound size={20} />}
          placeholder="Create a password" type="password"
          value={formData.password}
          onChange={(v) => handleChange("password", v)}
        />
        <FormField
          label="Company Name" required icon={<Building2 size={20} />}
          placeholder="Enter your company name"
          value={formData.companyName}
          onChange={(v) => handleChange("companyName", v)}
        />
        <SelectField
          label="Country" required icon={<UsersRound size={20} />}
          placeholder="Select country"
          value={formData.country}
          onChange={(v) => handleChange("country", v)}
          options={["France", "Belgique", "Suisse", "Canada"]}
        />
        <SelectField
          label="Company size" required icon={<UsersRound size={20} />}
          placeholder="Select company size"
          value={formData.companySize}
          onChange={(v) => handleChange("companySize", v)}
          options={["1-10", "11-50", "51-200", "200+"]}
        />
        <SelectField
          label="Industry" required icon={<BriefcaseBusiness size={20} />}
          placeholder="Select industry"
          value={formData.industry}
          onChange={(v) => handleChange("industry", v)}
          options={["Construction", "Manufacturing", "Energy", "Healthcare"]}
        />
      </div>

      <div className="mt-3 ml-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setAccepted(!accepted)}
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-white"
        >
          {accepted && <Check size={14} className="text-primary" />}
        </button>
        <p className="font-secondary text-xs text-white">
          I agree to the{" "}
          <button type="button" className="text-primary hover:underline">Terms of Service</button>{" "}
          and{" "}
          <button type="button" className="text-primary hover:underline">Privacy Policy</button>
        </p>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="mt-4 ml-8 w-[628px] flex h-8 items-center justify-center gap-3 rounded-md bg-primary font-secondary text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Workspace"}
        {!loading && <ArrowRight size={22} />}
      </button>

      <p className="mt-7 text-center font-secondary text-base text-white">
        Already have an account ?{" "}
        <Link href="/login" className="text-primary hover:underline">Sign in</Link>
      </p>
    </div>
  );
}

interface FormFieldProps {
  label: string; placeholder: string; icon: React.ReactNode;
  required?: boolean; type?: string; value: string; onChange: (v: string) => void;
}

function FormField({ label, placeholder, icon, required = false, type = "text", value, onChange }: FormFieldProps) {
  return (
    <div>
      <label className="mb-1 ml-8 block font-secondary text-sm text-white">
        {label}{required && <span className="text-danger"> *</span>}
      </label>
      <div className="flex h-11 ml-8 w-[264px] items-center rounded-md border border-white px-4">
        <span className="mr-3 text-white">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent font-secondary text-sm text-white outline-none placeholder:text-white"
        />
      </div>
    </div>
  );
}

interface SelectFieldProps {
  label: string; placeholder: string; icon: React.ReactNode;
  required?: boolean; value: string; onChange: (v: string) => void; options: string[];
}

function SelectField({ label, placeholder, icon, required = false, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-1 ml-8 block font-secondary text-sm text-white">
        {label}{required && <span className="text-danger"> *</span>}
      </label>
      <div className="flex h-11 w-[264px] ml-8 items-center rounded-md border border-white px-4">
        <span className="mr-3 text-white">{icon}</span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-transparent font-secondary text-sm text-white outline-none"
        >
          <option value="" disabled className="bg-[#09131D]">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#09131D]">{opt}</option>
          ))}
        </select>
        <ChevronDown size={20} className="pointer-events-none ml-2 shrink-0 text-white" />
      </div>
    </div>
  );
}