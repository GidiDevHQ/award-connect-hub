export const API_BASE_URL = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

export type RegisterRequest = {
  fullName: string;
  email: string;
  password: string;
  username?: string;
  country?: string;
  role?: string;
  awardLevel?: string;
  centre?: string;
  headline?: string;
  bio?: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      (data && typeof data === "object" && "message" in data && typeof data.message === "string"
        ? data.message
        : null) || "Request failed";
    throw new Error(message);
  }
  return data as T;
}

export async function registerAccount(payload: RegisterRequest) {
  const url = `${API_BASE_URL}/api/auth/register`;
  return parseJsonResponse<{ user: { id: string; email: string; fullName: string; username?: string | null }; message: string }>(
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    }),
  );
}

export async function loginAccount(payload: LoginRequest) {
  const url = `${API_BASE_URL}/api/auth/login`;
  return parseJsonResponse<{ user: { id: string; email: string; fullName: string; username?: string | null }; message: string }>(
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    }),
  );
}
