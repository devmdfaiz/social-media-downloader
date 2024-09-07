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
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { evarConts } from "@/lib/constants/evarConts";
import { showToast } from "@/lib/utils";
import { useState } from "react";
import { Loader } from "lucide-react";
import Tiptap from "../globle/tiptap";
import { Policy } from "@/lib/database/db";

const formSchema = z.object({
  page: z.string({ required_error: "Path is required" }).trim(),
  metaTitle: z.string({ required_error: "Meta title is required" }).trim(),
  title: z.string({ required_error: "Title is required" }).trim(),
  metaDescription: z
    .string({ required_error: "Meta description is required" })
    .trim(),
  description: z.string({ required_error: "Description is required" }).trim(),
  keywords: z.string({ required_error: "Keywords is required" }).trim(),
});

const PolicyEditor = ({ policies }: { policies: Policy[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      keywords: "",
      metaDescription: "",
      metaTitle: "",
      page: "",
      description: "",
      title: "",
    },
  });

  // 2. Handle the path selection and populate the title and description.
  const handlePathChange = (selectedPath: string) => {
    const selectedContent = policies.find(
      (content) => content.page === selectedPath
    );

    if (selectedContent) {
      form.setValue("metaTitle", selectedContent.metaTitle);

      form.setValue("metaDescription", selectedContent.metaDescription);

      form.setValue("keywords", selectedContent.keywords);

      form.setValue("description", selectedContent.description);

      form.setValue("title", selectedContent.title);
    }

    form.setValue("page", selectedPath);
  };

  // 3. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const filter = policies.filter((data, i) => {
      return data.page !== form.watch("page");
    });

    const valuesToSendOnKv = [...filter, values];
    axios
      .put(`${evarConts.cloudflareKvUrl}/api/policy`, valuesToSendOnKv)
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
      <TypographyH3>Policy Fields</TypographyH3>
      <div className="border border-primary/70 p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="page"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Page</FormLabel>
                  <Select
                    onValueChange={handlePathChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a page" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {policies.map((content) => (
                        <SelectItem key={content.page} value={content.page}>
                          {content.page}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("page") && (
              <>
                <FormField
                  control={form.control}
                  name="metaTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your meta title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="metaDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meta Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your meta description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keywords</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your keywords"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Tiptap
                          field={field}
                          form={form}
                          value={form.getValues("description")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
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

export default PolicyEditor;
