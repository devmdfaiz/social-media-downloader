"use client";
import { TGuide } from "@/lib/database/db";
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
import { GeneralFormType } from "@/app/(admin)/admin";

const GuideEditor = ({
  form,
}: {
  form: GeneralFormType;
}) => {
  return (
    <div className="my-11 space-y-3">
      <TypographyH3>Guide Fields</TypographyH3>
      <div className="border border-primary/70 p-5 mx-auto">
        <div className="form-wrapper flex justify-center md:justify-between items-center gap-3 flex-wrap md:flex-nowrap">
          {form.watch("guide").map((_, index) => (
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
                  name={`guide.${index}.title`}
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
                  name={`guide.${index}.desc`}
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
      </div>
    </div>
  );
};

export default GuideEditor;
