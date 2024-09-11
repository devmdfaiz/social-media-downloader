import { TypographyH2 } from "@/components/custom/typography";
import LoginForm from "@/components/globle/login";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen flex-col gap-3">
      <Card className="p-3 w-[350px]">
        <CardHeader className="pb-1">
          <CardTitle className="text-xl">Admin Login</CardTitle>
          <CardDescription>
            Access your dashboard to manage users, settings, and analytics.
            Please log in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
