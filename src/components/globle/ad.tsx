"use client";
import { useEffect, useState } from "react";

export const AdComponent_468_60 = ({
  longBannerAd_468_60,
}: {
  longBannerAd_468_60: string;
}) => {
  const [script, setScript] = useState<any>(null);

  useEffect(() => {
    setScript(longBannerAd_468_60);
    // Ad code execution logic here
    if (script) {
      const adDiv = document.getElementById("long-banner-ad")!;
      adDiv.innerHTML = script;
    }
  }, [script]);

  return <div id="long-banner-ad"></div>;
};

export const AdComponent_300_250 = ({
  bannerAd_300_250,
}: {
  bannerAd_300_250: string;
}) => {
  useEffect(() => {
    // Ad code execution logic here
    if (bannerAd_300_250) {
      const adDiv = document.getElementById("banner-ad")!;
      adDiv.innerHTML = bannerAd_300_250;
    }
  }, [bannerAd_300_250]);

  return <div id="banner-ad"></div>;
};
