const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function signup(data: {
  fullName: string;
  email: string;
  password: string;
  companyName: string;
  country: string;
  companySize: string;
  industry: string;
  agreeToTerms: boolean;
}) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Erreur lors de l'inscription.");
  return result;
}

export async function login(data: { email: string; password: string }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Erreur lors de la connexion.");
  return result;
}

export interface CurrentUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  companyId: number | null;
  companyName: string | null;
  role: string;
}

export async function getCurrentUser(): Promise<CurrentUser> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Utilisateur non connecté.");
  }

  const response = await fetch(
    `${API_URL}/auth/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Impossible de récupérer le profil.");
  }

  const data: { user: CurrentUser } = await response.json();

  return data.user;
}

import type {
  DashboardStats,
} from "@/src/components/dashboards/CompanyAdmin/StatsCards";

export async function getDashboardStats(): Promise<DashboardStats> {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Utilisateur non connecté.");
  }

  const response = await fetch(
    `${API_URL}/company-admin/dashboard/stats`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Impossible de récupérer les statistiques."
    );
  }

  const data: { stats: DashboardStats } =
    await response.json();

  return data.stats;
}