
"use client";

import { useEffect, useState } from "react";
import StatsCards, {
  type DashboardStats,
} from "@/src/components/dashboards/CompanyAdmin/StatsCards";

import { getDashboardStats } from "@/src/lib/api";

export default function CompanyAdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadStats() {
      try {
        const data = await getDashboardStats();

        if (active) {
          setStats(data);
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : "Une erreur est survenue."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadStats();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl ml-6 mt-8 font-semibold text-white">
          Dashboard
        </h1>
        <p className="mt-1 ml-6 text-sm text-[#B4B4B4]">
          Overview of your company workspace.
        </p>
      </div>

      {loading && (
        <p className="text-[#B4B4B4]">
          Loading statistics...
        </p>
      )}

      {error && (
        <p role="alert" className="text-red-400">
          {error}
        </p>
      )}

      {stats && <StatsCards stats={stats} />}
    </div>
  );
}
