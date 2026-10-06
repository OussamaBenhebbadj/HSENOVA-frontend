"use client";

import {
  UserRound,
  Mail,
  Building2,
  UsersRound,
  BriefcaseBusiness,
  ChevronDown,
  ArrowRight,
  Square,
  Check,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link"; 

export default function CreateWorkspaceForm() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="w-full max-w-[700px] pt-16">

      {/* Header */}
      <div className="mb-7">
        <h1 className="font-primary text-3xl font-bold text-white ml-8">
          Let’s get started
        </h1>

        <p className="mt-1 font-secondary text-lg text-white ml-8">
          All fields marked with <span className="text-danger">*</span> are
          required
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-x-9 gap-y-4">

        {/* Full Name */}
        <FormField
          label="Full Name"
          required
          icon={<UserRound size={20} />}
          placeholder="Enter your full name"
        />

        {/* Work Email */}
        <FormField
          label="Work Email"
          required
          icon={<Mail size={20} />}
          placeholder="Enter your work email"
          type="email"
        />

        {/* Company Name */}
        <FormField
          label="Company Name"
          required
          icon={<Building2 size={20} />}
          placeholder="Enter your company name"
        />

        {/* Country */}
        <SelectField
          label="Country"
          required
          icon={<UsersRound size={20} />}
          placeholder="Select country"
        />

        {/* Company Size */}
        <SelectField
          label="Company size"
          required
          icon={<UsersRound size={20} />}
          placeholder="Select company size"
        />

        {/* Industry */}
        <SelectField
          label="Industry"
          required
          icon={<BriefcaseBusiness size={20} />}
          placeholder="Select industry"
        />
      </div>

      {/* Email information */}
      <div className="mt-8 flex min-h-[70px] w-[628px] ml-8 items-center rounded-md border border-primary bg-transparent px-3">

        <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
          <Mail size={22} className="text-white" />
        </div>

        <div>
          <p className="font-secondary text-sm font-medium text-white">
            We will send you an email
          </p>

          <p className="font-secondary text-xs leading-tight text-white">
            You’ll receive a secure link to set your password
            <br />
            and activate your workspace.
          </p>
        </div>
      </div>

      {/* Terms */}
      <div className="mt-3 ml-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setAccepted(!accepted)}
          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-white"
        >
          {accepted && (
            <Check size={14} className="text-primary" />
          )}
        </button>

        <p className="font-secondary text-xs text-white">
          I agree to the{" "}
          <button
            type="button"
            className="text-primary hover:underline"
          >
            Terms of Service
          </button>{" "}
          and{" "}
          <button
            type="button"
            className="text-primary hover:underline"
          >
            Privacy Policy
          </button>
        </p>
      </div>

      {/* Create workspace */}
      <button
        type="button"
        className="mt-4 ml-8 w-[628px] flex h-8 items-center justify-center gap-3 rounded-md bg-primary font-secondary text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Create Workspace
        <ArrowRight size={22} />
      </button>

      {/* Sign in */}
      <p className="mt-7 text-center font-secondary text-base text-white">
        Already have an account ?{" "}
        <Link
          href="/login"
          type="button"
          className="text-primary hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  required?: boolean;
  type?: string;
}

function FormField({
  label,
  placeholder,
  icon,
  required = false,
  type = "text",
}: FormFieldProps) {
  return (
    <div>
      <label className="mb-1 ml-8 block font-secondary text-sm text-white">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>

      <div className="flex h-11 ml-8 w-[264px] items-center rounded-md border border-white px-4">
        <span className="mr-3 text-white">
          {icon}
        </span>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent font-secondary text-sm text-white outline-none placeholder:text-white"
        />
      </div>
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  required?: boolean;
}

function SelectField({
  label,
  placeholder,
  icon,
  required = false,
}: SelectFieldProps) {
  return (
    <div>
      <label className="mb-1 ml-8 block font-secondary text-sm text-white">
        {label}
        {required && <span className="text-danger"> *</span>}
      </label>

      <div className="flex h-11 w-[264px] ml-8 items-center rounded-md border border-white px-4">
        <span className="mr-3 text-white">
          {icon}
        </span>

        <select
          defaultValue=""
          className="w-full appearance-none bg-transparent font-secondary text-sm text-white outline-none"
        >
          <option value="" disabled className="bg-[#09131D]">
            {placeholder}
          </option>

          <option className="bg-[#09131D]">Option 1</option>
          <option className="bg-[#09131D]">Option 2</option>
          <option className="bg-[#09131D]">Option 3</option>
        </select>

        <ChevronDown
          size={20}
          className="pointer-events-none ml-2 shrink-0 text-white"
        />
      </div>
    </div>
  );
}