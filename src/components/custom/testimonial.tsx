import React from "react";
import { TypographyH2, TypographyH4, TypographyP } from "./typography";
import {
  TTestimonials,
} from "@/lib/database/db";

const Testimonial = ({
  testimonials,
  bannerAd_300_250,
  longBannerAd_468_60,
}: {
  testimonials: TTestimonials[];
  longBannerAd_468_60: string;
  bannerAd_300_250: string;
}) => {
  return (
    <div className="my-11">
      <TypographyH2 className="text-3xl font-bold text-center my-8 text-primary">
        Testimonials
      </TypographyH2>

      {/* ad script */}
      <div className="w-full h-fit flex items-center justify-center mb-8">
        <div className="above-form-add w-[468px] h-[60px] hidden sm:block">
          {longBannerAd_468_60 && (
            <div
              dangerouslySetInnerHTML={{ __html: longBannerAd_468_60 }}
            ></div>
          )}
        </div>

        <div className="above-form-add w-[300px] h-[250px] sm:hidden">
          {bannerAd_300_250 && (
            <div dangerouslySetInnerHTML={{ __html: bannerAd_300_250 }}></div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-start gap-5 flex-wrap md:flex-nowrap">
        {testimonials.length > 0 &&
          testimonials.map((testimonial, i) => {
            return (
              <div key={i} className="w-full h-fit">
                <div className="border border-primary/70 flex items-start justify-center px-5 py-6 flex-col h-full">
                  <TypographyH4>{testimonial?.name}</TypographyH4>

                  <TypographyP className="scroll-m-0">
                    {testimonial?.cont}
                  </TypographyP>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Testimonial;
