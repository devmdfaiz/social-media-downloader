"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export const ProductInfoError = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Activation Required</CardTitle>
          <CardDescription>
            To continue using this service, please activate your script.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/activation"
            className={buttonVariants({ variant: "default" })}
          >
            Activate Now
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
