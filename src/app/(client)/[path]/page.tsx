import Faq from "@/components/custom/faq";
import Content from "@/components/custom/content";
import Hero from "@/components/custom/hero";
import Preview from "@/components/custom/preview";
import Guide from "@/components/custom/guide";
import Testimonial from "@/components/custom/testimonial";
import { Script, Route, customRoutes } from "@/lib/database/db";
import { AlertDestructive } from "@/components/globle/error";
import { Metadata } from "next";
import { getPageAllCachedData } from "@/lib/cache-data";
import { getCleanPath } from "@/lib/utils";
import { NonBodyAsScript } from "@/components/globle/ad";
import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import { ProductInfoError } from "@/components/globle/info";

export interface TResponse {
  routeContent: Route;
  scripts: Script;
  footer: string;
  productInfo: { activationKey: string; data: string } | string;
}

export function generateStaticParams() {
  const path = getCleanPath(customRoutes);
  return path;
}

export async function generateMetadata({
  params,
}: {
  params: { path: string };
}): Promise<Metadata> {
  let res;
  try {
    res = await getPageAllCachedData(params.path);
  } catch (error) {
    console.error("Error in client home page: ", error);
  }

  const response: TResponse = res;

  const seo = response?.routeContent?.seo;

  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    keywords: seo?.keywords,
  };
}

const HomeDownloadPage = async ({ params }: { params: { path: string } }) => {
  let res;

  try {
    res = await getPageAllCachedData(params.path);
  } catch (error) {
    console.error("Error in client home page: ", error);
    res = { type: "error", error };
  }

  if (res.type === "error") {
    return <AlertDestructive message={JSON.stringify(res.error)} />;
  }

  const {
    scripts,
    footer,
    productInfo,
    routeContent: { content, faqs, guide, hero, testimonials },
  }: TResponse = res;

  if (productInfo === "error") {
    return <ProductInfoError />;
  }

  return (
    <>
      <Header headerCode={scripts?.headerCode} />
      <div className="h-full w-full">
        <Hero
          content={hero}
          bannerAd_300_250={scripts?.adScript?.bannerAd_300_250}
          longBannerAd_468_60={scripts?.adScript?.longBannerAd_468_60}
        />
        <Preview />
        <Guide guides={guide} />
        <Content htmlContent={content} />
        <Testimonial testimonials={testimonials} />
        <Faq faqs={faqs} />
      </div>
      <NonBodyAsScript script={scripts?.bodyCode} />
      <Footer footerCode={scripts?.footerCode} footer={footer} />
    </>
  );
};

export default HomeDownloadPage;
