import SeoEditor from "@/components/admin/seo-editor";
import { AlertDestructive } from "@/components/globle/error";
import { TSEOData } from "@/lib/database/db";
import { getSEOData } from "@/lib/fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seo editor",
};

const SeoEditorPage = async () => {
  let res;
  try {
    res = await getSEOData();
  } catch (error) {
    console.error("Error in Seo editor page: ", error);
    res = "error";
  }

  if (res === "error") {
    return <AlertDestructive message={res} />;
  }

  const seoData: TSEOData[] = res["seo-cont"];

  return <SeoEditor seoData={seoData} />;
};

export default SeoEditorPage;
