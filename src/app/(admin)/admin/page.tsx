import { TResponse } from "@/app/(client)/[path]/page";
import ContactEditor from "@/components/admin/contact-editor";
import ContentEditor from "@/components/admin/content-editor";
import FAQEditor from "@/components/admin/faq-editor";
import GuideEditor from "@/components/admin/guide-editor";
import HeroEditor from "@/components/admin/hero-editor";
import TestimonialEditor from "@/components/admin/testimonial-editor";
import { AlertDestructive } from "@/components/globle/error";
import { getPageAllData } from "@/lib/fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main page editor",
};

const AdminPage = async () => {
  let res;

  try {
    res = await getPageAllData();
  } catch (error) {
    console.error("Error in main editor page: ", error);
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
    contact,
  }: TResponse = res;

  return (
    <div>
      <HeroEditor heroContent={heroContent} />
      <GuideEditor guides={guides} />
      <ContentEditor htmlContent={htmlContent.content} />
      <TestimonialEditor testimonials={testimonials} />
      <FAQEditor faqs={faqs} />
      <ContactEditor contact={contact} />
    </div>
  );
};

export default AdminPage;
