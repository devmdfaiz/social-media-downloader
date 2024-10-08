"use client";
import { TResponse } from "@/app/(client)/[path]/page";
import ContactEditor from "@/components/admin/contact-editor";
import ContentEditor from "@/components/admin/content-editor";
import FAQEditor from "@/components/admin/faq-editor";
import FooterEditor from "@/components/admin/footer-editor";
import GuideEditor from "@/components/admin/guide-editor";
import HeroEditor from "@/components/admin/hero-editor";
import TestimonialEditor from "@/components/admin/testimonial-editor";
import { AlertDestructive } from "@/components/globle/error";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getPageAllCachedData } from "@/lib/cache-data";
import { evarConts } from "@/lib/constants/evarConts";
import { customRoutes, FAQItem, Route, TTestimonials } from "@/lib/database/db";
import { getCleanPath, showToast } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SeoEditor from "@/components/admin/seo-editor";

const formSchema = z.object({
  page: z.string({ required_error: "Path is required" }).trim(),

  hero: z.object({
    description: z.string({ required_error: "Description is required" }).trim(),
    title: z.string({ required_error: "Title is required" }).trim(),
  }),

  guide: z.array(
    z.object({
      title: z.string().min(1, "Title is required"),
      desc: z.string().min(1, "Description is required"),
    })
  ),

  content: z.string({ required_error: "Content is required" }).trim(),

  seo: z.object({
    metaTitle: z.string({ required_error: "Meta title is required" }).trim(),
    metaDescription: z
      .string({ required_error: "Meta description is required" })
      .trim(),
    keywords: z.string({ required_error: "Keywords is required" }).trim(),
  }),
});

export type GeneralFormType = UseFormReturn<
  z.infer<typeof formSchema>,
  any,
  undefined
>;

const AdminPageClient = () => {
  const [pageContent, setPageContent] = useState<TResponse | "error">();
  const [isLoading, setIsLoading] = useState(false);
  const [testimonialFields, setTestimonialFields] = useState<TTestimonials[]>([
    { name: "null", cont: "null" },
  ]);
  const [faqFields, setFaqFields] = useState<FAQItem[]>([
    {
      answer: "null",
      question: "null",
    },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hero: {
        description: "",
        title: "",
      },
      page: "",
      guide: [],
      content: "",
      seo: {
        keywords: "",
        metaDescription: "",
        metaTitle: "",
      },
    },
  });

  useMemo(() => {
    if (form.watch("page")) {
      const path = getCleanPath([form.watch("page")]);
      const cleanPath = path[0];
      getPageAllCachedData(cleanPath)
        .then((res) => {
          setPageContent(() => {
            form.setValue("hero.title", res?.routeContent.hero.title);

            form.setValue(
              "hero.description",
              res?.routeContent.hero.description
            );

            form.setValue("guide", res?.routeContent.guide);

            form.setValue("content", res?.routeContent.content);

            form.setValue("seo.keywords", res?.routeContent.seo.keywords);

            form.setValue("seo.metaTitle", res?.routeContent.seo.metaTitle);

            form.setValue(
              "seo.metaDescription",
              res?.routeContent.seo.metaDescription
            );

            setTestimonialFields(res.routeContent.testimonials);

            setFaqFields(res.routeContent.faqs);

            return res;
          });
        })
        .catch((error) => {
          setPageContent("error");
        });
    }
  }, [form.watch("page")]);

  if (pageContent === "error") {
    return <AlertDestructive message={JSON.stringify(pageContent)} />;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    const valuesToSendOnKv: Route = {
      ...values,
      testimonials: { ...testimonialFields },
      faqs: { ...faqFields },
    };

    axios
      .put(
        `${evarConts.cloudflareKvUrl}/api/all${values.page}`,
        valuesToSendOnKv
      )
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

  console.log(
    "selected page: ",
    form.watch("page"),
    " page content: ",
    pageContent
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5">
        <FormField
          control={form.control}
          name="page"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Page</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a page" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {customRoutes.map((content) => (
                    <SelectItem key={content} value={content}>
                      {content}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {pageContent && (
          <>
            <SeoEditor form={form} />
            <HeroEditor form={form} />
            <GuideEditor form={form} />
            <ContentEditor form={form} />
          </>
        )}
        {testimonialFields[0].name !== "null" && (
          <TestimonialEditor
            setTestimonialFields={setTestimonialFields}
            testimonialFields={testimonialFields}
          />
        )}
        {faqFields[0].answer !== "null" && (
          <FAQEditor faqFields={faqFields} setFaqFields={setFaqFields} />
        )}
        {faqFields[0].answer !== "null" && (
          <>
            {!isLoading ? (
              <Button type="submit">Submit</Button>
            ) : (
              <Loader className="animate-spin text-primary" />
            )}
          </>
        )}
      </form>
    </Form>
  );
};

export default AdminPageClient;
