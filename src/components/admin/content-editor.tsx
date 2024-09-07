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
import Tiptap from "../globle/tiptap";
import axios from "axios";
import { evarConts } from "@/lib/constants/evarConts";
import { showToast } from "@/lib/utils";
import { useState } from "react";
import { Loader } from "lucide-react";

const formSchema = z.object({
  content: z.string({ required_error: "Content is required" }).trim(),
});

const ContentEditor = ({ htmlContent }: { htmlContent: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: htmlContent,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    axios
      .put(`${evarConts.cloudflareKvUrl}/api/content`, values)
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
      <TypographyH3>Content Fields</TypographyH3>

      <div className="border border-primary/70 p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Tiptap
                      field={field}
                      form={form}
                      value={form.getValues("content")}
                    />
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

export default ContentEditor;
