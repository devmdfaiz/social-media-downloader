"use client";
import { TypographyH3 } from "../custom/typography";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { TSEOData } from "@/lib/database/db";
import { GeneralFormType } from "@/app/(admin)/admin";
import { ContactFormType } from "./contact-editor";

const SeoEditor = ({ form }: { form: any }) => {
  return (
    <div className="my-11 space-y-3">
      <TypographyH3>SEO Fields</TypographyH3>
      <div className="border border-primary/70 p-5 space-y-8">
        <FormField
          control={form.control}
          name="seo.metaTitle"
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
          name="seo.metaDescription"
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
          name="seo.keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Keywords</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your keywords" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default SeoEditor;
