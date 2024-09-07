"use client";
import { TTestimonials } from "@/lib/database/db";
import { TypographyH3 } from "../custom/typography";
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
import { useState } from "react";
import { Loader, Trash } from "lucide-react";
import axios from "axios";
import { evarConts } from "@/lib/constants/evarConts";
import { showToast } from "@/lib/utils";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }).trim(),
  cont: z.string({ required_error: "Message is required" }).trim(),
});

const TestimonialEditor = ({
  testimonials,
}: {
  testimonials: TTestimonials[];
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [testimonialFields, setTestimonialFields] =
    useState<TTestimonials[]>(testimonials);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cont: "",
    },
  });

  const handleInputChange = (
    index: number,
    fieldName: keyof TTestimonials,
    value: string
  ) => {
    const updatedFields = [...testimonialFields];
    updatedFields[index] = {
      ...updatedFields[index],
      [fieldName]: value,
    };
    setTestimonialFields(updatedFields);
  };

  const addTestimonialField = () => {
    setTestimonialFields([
      ...testimonialFields,
      { name: "", cont: "" }, // Add an empty testimonial field
    ]);
  };

  const deleteTestimonialField = (index: number) => {
    const updatedFields = testimonialFields.filter((_, i) => i !== index);
    setTestimonialFields(updatedFields);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    axios
      .put(`${evarConts.cloudflareKvUrl}/api/testimonials`, testimonialFields)
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
      <TypographyH3>Testimonial Fields</TypographyH3>

      <div className="border border-primary/70 p-5">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-5"
            >
              {testimonialFields.length > 0 &&
                testimonialFields.map((Tfield, i) => (
                  <div
                    className="border border-foreground/30 p-3 relative"
                    key={i}
                  >
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter name"
                          value={Tfield.name}
                          onChange={(e) =>
                            handleInputChange(i, "name", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter message"
                          value={Tfield.cont}
                          onChange={(e) =>
                            handleInputChange(i, "cont", e.target.value)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => deleteTestimonialField(i)}
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                ))}

              {!isLoading ? (
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={addTestimonialField}
                  >
                    Add Testimonial
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

export default TestimonialEditor;
