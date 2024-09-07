"use client";
import { TypographyH3 } from "../custom/typography";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { evarConts } from "@/lib/constants/evarConts";
import { showToast } from "@/lib/utils";
import { useState } from "react";
import { Loader } from "lucide-react";
import { Contact } from "@/lib/database/db";

const formSchema = z.object({
  phone: z.string({ required_error: "Content is required" }).trim(),
  email: z.string({ required_error: "Content is required" }).email().trim(),
});

const ContactEditor = ({ contact }: { contact: Contact }) => {
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: contact.email,
      phone: contact.phone,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    axios
      .put(`${evarConts.cloudflareKvUrl}/api/contact`, values)
      .then((res) => {
        const { data, status } = res;

        if (status === 200) {
          setIsLoading(false);
          console.log("data ", data.message);

          showToast(data.message, "", "Close", () => {});
        }
      })
      .catch((error) => {
        setIsLoading(false);
        showToast(
          "An unexpected error has occurred. Please try again later.",
          "",
          "Close",
          () => {}
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="my-11 space-y-3">
      <TypographyH3>Contact Fields</TypographyH3>

      <div className="border border-primary/70 p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone" {...field} />
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
              <Button type="submit">Submit</Button>
            ) : (
              <Loader className="animate-spin text-primary" />
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactEditor;
