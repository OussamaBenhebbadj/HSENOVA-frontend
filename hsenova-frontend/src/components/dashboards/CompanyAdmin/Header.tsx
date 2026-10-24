
"use client";

import { useEffect, useState } from "react";
import { Bell, Search } from "lucide-react";
import {
  getCurrentUser,
  type CurrentUser,
} from "@/src/lib/api";

export default function Header() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [greeting, setGreeting] = useState("Welcome");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    let active = true;

    async function loadUser() {
      try {
        const currentUser = await getCurrentUser();

        if (active) {
          setUser(currentUser);
        }
      } catch (error) {
        console.error("Error loading user:", error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      active = false;
    };
  }, []);

  return (
    <header className="flex w-full flex-col gap-4 bg-[#09131D] px-6 py-4 text-white sm:flex-row sm:items-start sm:justify-between">

      {/* Welcome message */}
      <div className="flex flex-col gap-1">
        <h1 className="text-sm font-semibold">
          {loading
            ? "Loading..."
            : user
              ? `${greeting}, ${user.firstName} !`
              : "Welcome !"}
        </h1>

        <p className="text-xs text-[#B4B4B4]">
          Workspace - {user?.companyName ?? "—"}
        </p>
      </div>

      {/* Header actions */}
      <div className="flex items-center gap-3">

        {/* Search */}
        <div className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-md border border-[#56616A] px-3 sm:w-56 sm:flex-none">
          <Search size={16} className="shrink-0 text-white" />

          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users, roles..."
            aria-label="Search users and roles"
            className="w-full min-w-0 bg-transparent text-xs text-white outline-none placeholder:text-[#B4B4B4]"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#56616A] transition-colors hover:bg-white/10"
        >
          <Bell size={18} />

          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#FF0000]" />
        </button>

      </div>
    </header>
  );
}
