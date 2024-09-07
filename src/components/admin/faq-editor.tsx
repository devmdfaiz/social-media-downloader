"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { TypographyH3 } from "../custom/typography";
import { Loader, Trash } from "lucide-react";
import { FAQItem } from "@/lib/database/db";
import axios from "axios";
import { evarConts } from "@/lib/constants/evarConts";
import { showToast } from "@/lib/utils";

const formSchema = z.object({
  question: z.string({ required_error: "Question is required" }).trim(),
  answer: z.string({ required_error: "Answer is required" }).trim(),
});

const FAQEditor = ({ faqs }: { faqs: FAQItem[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [faqFields, setFaqFields] = useState<FAQItem[]>(faqs);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const handleInputChange = (
    index: number,
    fieldName: keyof FAQItem,
    value: string
  ) => {
    const updatedFields = [...faqFields];
    updatedFields[index] = {
      ...updatedFields[index],
      [fieldName]: value,
    };
    setFaqFields(updatedFields);
  };

  const addFaqField = () => {
    setFaqFields([...faqFields, { question: "", answer: "" }]);
  };

  const deleteFaqField = (index: number) => {
    const updatedFields = faqFields.filter((_, i) => i !== index);
    setFaqFields(updatedFields);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    axios
      .put(`${evarConts.cloudflareKvUrl}/api/faqs`, faqFields)
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
      <TypographyH3>FAQ Fields</TypographyH3>

      <div className="border border-primary/70 p-5">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-5"
            >
              {faqFields.length > 0 &&
                faqFields.map((faq, i) => (
                  <div
                    className="border border-foreground/30 p-3 relative"
                    key={i}
                  >
                    <FormItem>
                      <FormLabel>Question</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter question"
                          value={faq.question}
                          onChange={(e) =>
                            handleInputChange(i, "question", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <FormItem>
                      <FormLabel>Answer</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter answer"
                          value={faq.answer}
                          onChange={(e) =>
                            handleInputChange(i, "answer", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => deleteFaqField(i)}
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              {!isLoading ? (
                <div className="flex gap-4">
                  <Button variant="outline" type="button" onClick={addFaqField}>
                    Add FAQ
                  </Button>
                  <Button type="submit">Submit</Button>
                </div>
              ) : (
                <Loader className="animate-spin text-primary" />
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FAQEditor;
