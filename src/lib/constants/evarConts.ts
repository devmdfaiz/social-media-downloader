interface TEvarConts {
  rapidKey: string;
  rapidHost: string;
  cloudflareKvUrl: string;
  loginEmail: string;
  loginPassword: string;
  jwtSec: string;
  baseUrl: string;
}

export const evarConts: TEvarConts = {
  rapidKey: process.env.RAPID_KEY!,
  rapidHost: process.env.RAPID_HOST!,
  loginEmail: process.env.LOGIN_EMAIL!,
  loginPassword: process.env.LOGIN_PASS!,
  cloudflareKvUrl: process.env.NEXT_PUBLIC_CLOUDFLARE_KV_URL!,
  jwtSec: process.env.JWT_SECRET!,
  baseUrl: process.env.BASE_URL!,
};
