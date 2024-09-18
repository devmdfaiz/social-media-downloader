"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const ActivationForm = () => {
  return (
    <div className="flex items-start justify-center h-screen w-full pt-12">
      <Tabs defaultValue="generate-key" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="generate-key">Generate key</TabsTrigger>
          <TabsTrigger value="validate-key">Validate key</TabsTrigger>
          <TabsTrigger value="forget-key">Forget key</TabsTrigger>
        </TabsList>
        <TabsContent value="generate-key">
          <GenerateKey />
        </TabsContent>
        <TabsContent value="validate-key">
          <VerifyKey />
        </TabsContent>
        <TabsContent value="forget-key">
          <ForgetKey />
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
    purchaseCode: z
      .string({ required_error: "Purchase code is required" })
      .trim(),
    platform: z.string({ required_error: "Platform is required" }).trim(),
    email: z.string({ required_error: "Email is required" }).trim(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      purchaseCode: "",
      platform: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log("values: ", values);

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
          {`Enter your all below details to generate activation key`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {!isLoadingComplete ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="platform"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Platform</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a purchase platform" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="code-canyen">Code Canyen</SelectItem>
                        {/* <SelectItem value="evo-creator">Evo Creator</SelectItem> */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <FormField
                control={form.control}
                name="purchaseCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purchase Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Purchase code"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      How to get code canyen purchase code -{" "}
                      <Link
                        target="_blank"
                        className="hover:border-b-2 text-primary"
                        href="https://www.youtube.com/watch?v=ye_MKnXnCa0"
                      >
                        Click here
                      </Link>
                    </FormDescription>
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
            inbox. If you {`don't`} see it there, make sure to also check your
            spam folder.
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
            content: { content: htmlContent },
            contactData: contact,
            faqsData: faqs,
            footerData: { footer },
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

export const ForgetKey = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Please enter a valid email address")
      .trim(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const res = await axios.post("/api/forget-key", values);
      const { status, data } = res;

      if (status === 200) {
        setIsLoading(false);
        showToast(data.message, "", "Close", () => {});
      }
    } catch (error) {
      setIsLoading(false);
      const errorMessage = clientError(error);
      console.error("Error in sending activation key: ", error);
      showToast(errorMessage, "", "Close", () => {});
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Forgot Your Activation Key?</CardTitle>
        <CardDescription>
          {`Enter your registered email below, and we’ll send you the activation key.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your registered email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!isLoading ? (
              <Button type="submit">Send Activation Key</Button>
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
