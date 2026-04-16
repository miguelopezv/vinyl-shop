import { jwtVerify, type JWTPayload } from "jose";

type AuthPayload = JWTPayload & {
  id?: string;
  email?: string;
  isAdmin?: boolean;
};

export type AdminUser = {
  id?: string;
  email?: string;
  isAdmin: boolean;
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return new TextEncoder().encode(secret);
}

export async function verifyAdminToken(token: string): Promise<AdminUser> {
  const { payload } = await jwtVerify<AuthPayload>(token, getJwtSecret());

  if (payload.isAdmin !== true) {
    throw new Error("User is not an admin");
  }

  return {
    id: typeof payload.id === "string" ? payload.id : undefined,
    email: typeof payload.email === "string" ? payload.email : undefined,
    isAdmin: true,
  };
}
