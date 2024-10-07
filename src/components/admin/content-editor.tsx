"use client";
import { TypographyH3 } from "../custom/typography";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Tiptap from "../globle/tiptap";
import { GeneralFormType } from "@/app/(admin)/admin";

const ContentEditor = ({
  form,
}: {
  form: GeneralFormType;
}) => {
  return (
    <div className="my-11 space-y-3">
      <TypographyH3>Content Fields</TypographyH3>
      <div className="border border-primary/70 p-5">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
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
      </div>
    </div>
  );
};

export default ContentEditor;
