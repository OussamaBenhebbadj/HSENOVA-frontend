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
  const res = await fetch(`${API_URL}/auth/signup`, {
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