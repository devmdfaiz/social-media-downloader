import Faq from "@/components/custom/faq";
import Content from "@/components/custom/content";
import Hero from "@/components/custom/hero";
import Preview from "@/components/custom/preview";
import Guide from "@/components/custom/guide";
import Testimonial from "@/components/custom/testimonial";
import {
  Contact,
  FAQItem,
  Script,
  TGuide,
  THeroContent,
  TSEOData,
  TTestimonials,
  seoData,
} from "@/lib/database/db";
import { AlertDestructive } from "@/components/globle/error";
import { Metadata } from "next";
import { getPageAllCachedData } from "@/lib/cache-data";
import { getCleanPath } from "@/lib/utils";

export interface TResponse {
  heroContent: THeroContent[];
  guides: TGuide[];
  htmlContent: { content: string };
  testimonials: TTestimonials[];
  faqs: FAQItem[];
  contact: Contact;
  seoData: TSEOData[];
  scripts: Script;
  footer: { footer: string };
  productInfo: { activationKey: string; data: string } | string;
}

export function generateStaticParams() {
  const path = getCleanPath(seoData);
  return path;
}

export async function generateMetadata({
  params,
}: {
  params: { path: string };
}): Promise<Metadata> {
  let res;
  try {
    res = await getPageAllCachedData();
  } catch (error) {
    console.error("Error in client home page: ", error);
    res = { seoData };
  }

  const { seoData: dynamicSeoData }: TResponse = res;

  const filterSeoData = dynamicSeoData.find((content, i) => {
    return content.page === `/${params.path}`;
  });

  return {
    title: filterSeoData?.metaTitle,
    description: filterSeoData?.metaDescription,
    keywords: filterSeoData?.keywords,
  };
}

const HomeDownloadPage = async ({ params }: { params: { path: string } }) => {
  let res;

  try {
    res = await getPageAllCachedData();
  } catch (error) {
    console.error("Error in client home page: ", error);
    res = "error";
  }

  if (res === "error") {
    return <AlertDestructive message={res} />;
  }

  const {
    heroContent,
    guides,
    htmlContent,
    testimonials,
    faqs,
    scripts,
  }: TResponse = res;

  const filterContent = heroContent.filter((content, i) => {
    return content.page === `/${params.path}`;
  });

  return (
    <div className="h-full w-full">
      <Hero
        content={filterContent[0]}
        bannerAd_300_250={scripts?.adScript?.bannerAd_300_250}
        longBannerAd_468_60={scripts?.adScript?.longBannerAd_468_60}
      />
      <Preview />
      <Guide
        guides={guides}
        bannerAd_300_250={scripts?.adScript?.bannerAd_300_250}
        longBannerAd_468_60={scripts?.adScript?.longBannerAd_468_60}
      />
      <Content
        htmlContent={htmlContent?.content}
        bannerAd_300_250={scripts?.adScript?.bannerAd_300_250}
        longBannerAd_468_60={scripts?.adScript?.longBannerAd_468_60}
      />
      <Testimonial
        testimonials={testimonials}
        bannerAd_300_250={scripts?.adScript?.bannerAd_300_250}
        longBannerAd_468_60={scripts?.adScript?.longBannerAd_468_60}
      />
      <Faq
        faqs={faqs}
        bannerAd_300_250={scripts?.adScript?.bannerAd_300_250}
        longBannerAd_468_60={scripts?.adScript?.longBannerAd_468_60}
      />
    </div>
  );
};

export default HomeDownloadPage;
