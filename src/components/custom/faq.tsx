import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH2 } from "./typography";
import { FAQItem } from "@/lib/database/db";

const Faq = ({
  faqs,
  bannerAd_300_250,
  longBannerAd_468_60,
}: {
  faqs: FAQItem[];
  longBannerAd_468_60: string;
  bannerAd_300_250: string;
}) => {
  return (
    <div className="my-11">
      <TypographyH2 className="text-3xl font-bold text-center text-primary">
        {`Frequently asked question(s)`}
      </TypographyH2>

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

      <div className="w-full border border-primary/70 px-6 py-6 my-7">
        <Accordion type="single" collapsible className="w-full">
          {faqs.length > 0 &&
            faqs.map((faq, i) => {
              return (
                <AccordionItem value={JSON.stringify(i)} key={i}>
                  <AccordionTrigger className="text-start">
                    {faq?.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq?.answer}</AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
