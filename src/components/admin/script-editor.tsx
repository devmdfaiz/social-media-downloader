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
import axios from "axios";
import { evarConts } from "@/lib/constants/evarConts";
import { showToast } from "@/lib/utils";
import { useState } from "react";
import { Loader } from "lucide-react";
import {  Script, scripts } from "@/lib/database/db";

const formSchema = z.object({
  headerCode: z.string().trim().optional(),
  footerCode: z.string().trim().optional(),
  bodyCode: z.string().trim().optional(),
  bannerAd_300_250: z.string().trim().optional(),
  longBannerAd_468_60: z.string().trim().optional(),
});

const ScriptEditor = ({ scripts }: { scripts: Script }) => {
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bannerAd_300_250: scripts?.adScript?.bannerAd_300_250 || `<script></script>`,
      bodyCode: scripts?.bodyCode || `<script></script>`,
      footerCode: scripts?.footerCode || `<script></script>`,
      headerCode: scripts?.headerCode || `<script></script>`,
      longBannerAd_468_60: scripts?.adScript?.longBannerAd_468_60 || `<script></script>`,
    },
  });

  // 3. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const valuesToSendOnKv: Script = {
         headerCode: values.headerCode!,
         footerCode: values.footerCode!,
         bodyCode: values.bodyCode!,
         adScript: {
          bannerAd_300_250: values.bannerAd_300_250!,
          longBannerAd_468_60: values.longBannerAd_468_60!,
         }
    }
    axios
      .put(`${evarConts.cloudflareKvUrl}/api/scripts`, valuesToSendOnKv)
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
              name="headerCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Header Code</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your header code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bodyCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body code</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your body code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="longBannerAd_468_60"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long banner ad</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your ad script long type"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bannerAd_300_250"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long square ad</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your square type ad"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="footerCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Footer code</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter footer code" {...field} />
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

export default ScriptEditor;
