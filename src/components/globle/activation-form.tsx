"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { showToast } from "@/lib/utils";
import { clientError } from "@/lib/error/error-extracter";
import { useState } from "react";
import { Loader } from "lucide-react";
import { seedAllData } from "@/lib/action";
import {
  contact,
  faqs,
  footer,
  guides,
  heroContent,
  htmlContent,
  policies,
  scripts,
  seoData,
  testimonials,
} from "@/lib/database/db";
import { TypographyMuted } from "../custom/typography";

const ActivationForm = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Tabs defaultValue="generate-key" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="generate-key">Generate key</TabsTrigger>
          <TabsTrigger value="validate-key">Validate key</TabsTrigger>
        </TabsList>
        <TabsContent value="generate-key">
          <GenerateKey />
        </TabsContent>
        <TabsContent value="validate-key">
          <VerifyKey />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const GenerateKey = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const formSchema = z.object({
    phone: z.string({ required_error: "Phone number is required" }).trim(),
    email: z.string({ required_error: "Email is required" }).trim(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const res = axios
      .post("/api/generate-key", values)
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          setIsLoading(false);
          setIsLoadingComplete(true);
          showToast(data.message, "", "Close", () => {});
        }
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = clientError(error);
        console.error("Error in generating activation key: ", error);

        showToast(errorMessage, "", "Close", () => {});
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate key</CardTitle>
        <CardDescription>
          {`Enter your "Phone number" & "Email" to generate activation key`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {!isLoadingComplete ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!isLoading ? (
                <Button type="submit">Generate key</Button>
              ) : (
                <Loader className="animate-spin text-primary" />
              )}
            </form>
          </Form>
        ) : (
          <TypographyMuted>
            We have sent an activation key to your email. Please check your
            inbox. If you don't see it there, make sure to also check your spam
            folder.
          </TypographyMuted>
        )}
      </CardContent>
    </Card>
  );
};

export const VerifyKey = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    activationKey: z
      .string({ required_error: "Activation key is required" })
      .trim(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activationKey: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    axios
      .post("/api/verify-key", values)
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          showToast(data.message, "", "Close", () => {});

          seedAllData({
            content: htmlContent,
            contactData: contact,
            faqsData: faqs,
            footerData: footer,
            guideData: guides,
            heroData: heroContent,
            policyData: policies,
            scriptsData: scripts,
            seoData: seoData,
            testimonialsData: testimonials,
          }).then((res) => {
            setIsLoading(false);
            if (res?.status) {
              showToast(res.message, "", "Close", () => {});
              window.location.href = "/";
            }
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = clientError(error);
        console.error("Error in verifying activation key: ", error);

        showToast(errorMessage, "", "Close", () => {});
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify activation key</CardTitle>
        <CardDescription>
          {`Enter your "Activation key" and verify`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="activationKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activation key</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your activation key" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isLoading ? (
              <Button type="submit">Verify key</Button>
            ) : (
              <Loader className="animate-spin text-primary" />
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ActivationForm;
