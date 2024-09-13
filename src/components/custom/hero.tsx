import React from "react";
import { TypographyH1, TypographyMuted } from "./typography";
import { THeroContent } from "@/lib/database/db";
import DownloaderForm from "./form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BodyAdScript from "../globle/ad";

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
    <Card className="w-full py-11 my-11">
      <CardHeader>
        <CardTitle className="text-primary text-center text-2xl lg:text-4xl font-bold">
          {content?.title}
        </CardTitle>
        <br />
        <CardDescription className="text-center">
          {content?.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BodyAdScript
          bannerAd_300_250={bannerAd_300_250}
          longBannerAd_468_60={longBannerAd_468_60}
        />
        <DownloaderForm />
      </CardContent>
    </Card>
  );
};

export default Hero;
