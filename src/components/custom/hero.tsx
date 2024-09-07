import React from "react";
import { TypographyH1, TypographyMuted } from "./typography";
import { THeroContent } from "@/lib/database/db";
import DownloaderForm from "./form";

const Hero = ({
  content,
  bannerAd_300_250,
  longBannerAd_468_60,
}: {
  content: THeroContent;
  longBannerAd_468_60: string;
  bannerAd_300_250: string;
}) => {
  return (
    <div className="w-full border border-primary/70 px-3 py-11 my-11">
      <div className="flex items-center justify-center flex-col gap-6 w-full">
        {/* ad script */}
        <div className="w-full h-fit flex items-center justify-center">
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

        <TypographyH1 className="text-primary text-center text-2xl lg:text-4xl">
          {content?.title}
        </TypographyH1>

        <TypographyMuted className="text-center">
          {content?.description}
        </TypographyMuted>

        {/* ad script */}
        <div className="w-full h-fit flex items-center justify-center">
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

        <DownloaderForm />
      </div>
    </div>
  );
};

export default Hero;
