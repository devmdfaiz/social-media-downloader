"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClipboardIcon } from "@radix-ui/react-icons";
import { paste } from "@/lib/utils";
import axios from "axios";
import { useContext, useState } from "react";
import { PreviewContext } from "@/context/previewContext";

export const downloaderFormSchema = z.object({
  url: z.string().url().trim(),
});

const DownloaderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setResponseData } = useContext(PreviewContext);

  
  const form = useForm<z.infer<typeof downloaderFormSchema>>({
    resolver: zodResolver(downloaderFormSchema),
    defaultValues: {
      url: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof downloaderFormSchema>) {
    setIsLoading(true);
    axios
      .post("/api/initiate-download", values)
      .then((res) => {
        const { data: axiosData, status } = res;

        if (status === 200) {
          setIsLoading(false);
          if (!axiosData.data.success) {
            alert(axiosData.data.message);

            return;
          }
          setResponseData(axiosData.data);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        alert("An unknown error occurred");
        console.error("Error in fetching client data: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`first-letter:w-full flex ${
            isLoading ? "items-center" : "items-start"
          } justify-center gap-x-3`}
        >
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Input
                    className="w-[180px] sm:w-[300px] md:w-[350px] lg:w-[450px]"
                    placeholder="Past your link here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!isLoading ? (
            <>
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => {
                  paste({ form });
                }}
              >
                <ClipboardIcon />
              </Button>
              <Button type="submit">Get Links</Button>
            </>
          ) : (
            <Loader className="animate-spin text-primary" />
          )}
        </form>
      </Form>
    </div>
  );
};

export default DownloaderForm;
