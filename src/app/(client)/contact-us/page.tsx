import { TypographyP } from "@/components/custom/typography";
import { AlertDestructive } from "@/components/globle/error";
import { getContactPageCachedData, getSeoCachedData } from "@/lib/cache-data";
import { Contact } from "@/lib/database/db";
import { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata(): Promise<Metadata> {
  let res;
  try {
    res = await getContactPageCachedData();
  } catch (error) {
    console.error("Error in client contact page: ", error);
  }  

  const contact: Contact = res["contact-cont"];

  return {
    title: contact?.seo?.metaTitle,
    description: contact?.seo?.metaDescription,
    keywords: contact?.seo?.keywords,
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
    <Card>
      <CardHeader>
        <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Contact us
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TypographyP>
          <b>Phone:</b> {contact.phone}
          <br />
          <b>Email:</b> {contact.email}
        </TypographyP>
      </CardContent>
    </Card>
  );
};

export default ContactUs;
