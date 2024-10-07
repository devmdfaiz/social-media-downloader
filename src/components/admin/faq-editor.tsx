"use client";
import { Dispatch, SetStateAction } from "react";
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
import { Trash } from "lucide-react";
import { FAQItem } from "@/lib/database/db";

const FAQEditor = ({
  faqFields,
  setFaqFields,
}: {
  faqFields: FAQItem[];
  setFaqFields: Dispatch<SetStateAction<FAQItem[]>>;
}) => {
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

  return (
    <div className="my-11 space-y-3">
      <TypographyH3>FAQ Fields</TypographyH3>

      <div className="border border-primary/70 p-5">
        <div>
          {faqFields.length > 0 &&
            faqFields.map((faq, i) => (
              <div className="border border-foreground/30 p-3 relative" key={i}>
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

          <Button variant="outline" type="button" onClick={addFaqField}>
            Add FAQ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQEditor;
