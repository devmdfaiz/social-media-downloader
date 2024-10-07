"use client";
import { TTestimonials } from "@/lib/database/db";
import { TypographyH3 } from "../custom/typography";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Dispatch, SetStateAction } from "react";
import { Trash } from "lucide-react";

const TestimonialEditor = ({
  setTestimonialFields,
  testimonialFields,
}: {
  setTestimonialFields: Dispatch<SetStateAction<TTestimonials[]>>;
  testimonialFields: TTestimonials[];
}) => {

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

  return (
    <div className="my-11 space-y-3">
      <TypographyH3>Testimonial Fields</TypographyH3>

      <div className="border border-primary/70 p-5">
        <div>
          {testimonialFields.length > 0 &&
            testimonialFields.map((Tfield, i) => (
              <div className="border border-foreground/30 p-3 relative" key={i}>
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

          <Button variant="outline" type="button" onClick={addTestimonialField}>
            Add Testimonial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialEditor;
