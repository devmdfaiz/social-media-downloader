import { TypographyH2 } from "@/components/custom/typography";
import LoginForm from "@/components/globle/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen flex-col gap-3">
      <TypographyH2>Welcome back!</TypographyH2>
      <LoginForm />
    </div>
  );
}
