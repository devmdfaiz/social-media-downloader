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
import { THeroContent } from "@/lib/database/db";
import { GeneralFormType } from "@/app/(admin)/admin";

const HeroEditor = ({
  form,
}: {
  form: GeneralFormType;
}) => {
  return (
    <div className="my-11 space-y-3">
      <TypographyH3>Hero Fields</TypographyH3>
      <div className="border border-primary/70 p-5">
        <FormField
          control={form.control}
          name="hero.title"
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
          name="hero.description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default HeroEditor;
