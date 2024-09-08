"use client";
import { TGuide } from "@/lib/database/db";
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
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { evarConts } from "@/lib/constants/evarConts";
import { useState } from "react";
import { showToast } from "@/lib/utils";
import { Loader } from "lucide-react";

// Define the schema for form validation
const formSchema = z.object({
  guides: z.array(
    z.object({
      title: z.string().min(1, "Title is required"),
      desc: z.string().min(1, "Description is required"),
    })
  ),
});

const GuideEditor = ({guides}: {guides: TGuide[]}) => {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the form with the guides data as default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guides: guides,
    },
  });

  // 3. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const { guides } = values;
    axios
      .put(`${evarConts.cloudflareKvUrl}/api/guide`, guides)
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
      <TypographyH3>Guide Fields</TypographyH3>

      <div className="border border-primary/70 p-5 mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="form-wrapper flex justify-center md:justify-between items-center gap-3 flex-wrap md:flex-nowrap">
              {form.watch("guides").map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-5 flex-wrap md:flex-nowrap w-full h-fit"
                >
                  <div className="border border-primary/70 flex items-center justify-center px-5 py-6 gap-4 flex-col">
                    <div className="bg-primary/30 text-primary w-14 h-14 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold select-none">
                        {index + 1}
                      </span>
                    </div>

                    <FormField
                      control={form.control}
                      name={`guides.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`guides.${index}.desc`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-32"
                              placeholder="Enter your description"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              {!isLoading ? (
                <Button type="submit">Submit</Button>
              ) : (
                <Loader className="animate-spin text-primary" />
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default GuideEditor;
