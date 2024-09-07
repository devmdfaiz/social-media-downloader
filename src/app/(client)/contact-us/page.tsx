import { TypographyH1, TypographyP } from "@/components/custom/typography";
import { AlertDestructive } from "@/components/globle/error";
import { getContactPageCachedData, getSeoCachedData } from "@/lib/cache-data";
import { Contact, seoData, TSEOData } from "@/lib/database/db";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  let res;
  try {
    res = await getSeoCachedData();
  } catch (error) {
    console.error("Error in client home page: ", error);
    res = { seoData };
  }

  const contact: TSEOData[] = res["seo-cont"];

  const filterSeoData = contact.find((content, i) => {
    return content.page === `/contact-us`;
  });

  return {
    title: filterSeoData?.metaTitle,
    description: filterSeoData?.metaDescription,
    keywords: filterSeoData?.keywords,
  };
}

const ContactUs = async () => {
  let res;

  try {
    res = await getContactPageCachedData();
  } catch (error) {
    console.error("Error in contact page: ", error);
    res = "error";
  }

  if (res === "error") {
    return <AlertDestructive message={res} />;
  } 

  const contact: Contact = res["contact-cont"];

  return (
    <div className="w-full h-full">
      <TypographyH1 className="my-8">Contact us</TypographyH1>

      <div className="px-8 py-8 border border-primary">
        <TypographyP>
          <b>Phone:</b> {contact.phone}
          <br />
          <b>Email:</b> {contact.email}
        </TypographyP>
      </div>
    </div>
  );
};

export default ContactUs;
