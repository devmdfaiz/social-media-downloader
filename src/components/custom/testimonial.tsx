import React from "react";
import { TypographyH2, TypographyH4, TypographyP } from "./typography";
import { TTestimonials } from "@/lib/database/db";
import BodyAdScript from "../globle/ad";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Testimonial = ({ testimonials }: { testimonials: TTestimonials[] }) => {
  return (
    <>
      <div className="my-11">
        <TypographyH2 className="text-3xl font-bold text-center my-8 text-primary">
          Testimonials
        </TypographyH2>
        <div className="flex justify-between items-start gap-5 flex-wrap md:flex-nowrap">
          {testimonials.length > 0 &&
            testimonials.map((testimonial, i) => {
              return (
                <Card key={i} className="grow">
                  <CardHeader>
                    <div className="bg-primary/30 text-primary w-11 h-11 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold select-none">
                        {testimonial?.name.slice(0, 1)}
                      </span>
                    </div>
                    <CardTitle>{testimonial?.name}</CardTitle>
                  </CardHeader>
                  <CardContent>{testimonial?.cont}</CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
