import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH2 } from "./typography";
import { FAQItem } from "@/lib/database/db";
import BodyAdScript from "../globle/ad";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Faq = ({ faqs }: { faqs: FAQItem[] }) => {
  return (
    <>
      <div className="my-11">
        <TypographyH2 className="text-3xl font-bold text-center text-primary">
          {`Frequently asked question(s)`}
        </TypographyH2>
        <Card>
          <CardContent className="my-4">
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
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Faq;
