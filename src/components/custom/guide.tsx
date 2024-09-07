import React from "react";
import { TypographyH2, TypographyH4, TypographyP } from "./typography";
import { Separator } from "@/components/ui/separator";
import { TGuide } from "@/lib/database/db";

const Guide = ({
  guides,
  bannerAd_300_250,
  longBannerAd_468_60,
}: {
  guides: TGuide[];
  longBannerAd_468_60: string;
  bannerAd_300_250: string;
}) => {
  return (
    <div className="my-11">
      <TypographyH2 className="text-3xl font-bold text-center my-8 text-primary">
        How to use
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

      <div className="flex justify-between items-center gap-5 flex-wrap md:flex-nowrap">
        {guides?.length > 0 &&
          guides.map((guide, i) => {
            return (
              <div key={i} className="w-full h-fit">
                <div className="border border-primary/70 flex items-center justify-center px-5 py-6 gap-4 flex-col">
                  <div className="bg-primary/30 text-primary w-14 h-14 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold select-none">
                      {i + 1}
                    </span>
                  </div>

                  <TypographyH4>{guide?.title}</TypographyH4>

                  <Separator />

                  <TypographyP>{guide?.desc}</TypographyP>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Guide;
