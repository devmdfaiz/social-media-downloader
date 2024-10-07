import "@/styles/content.css";
import { TypographyH2 } from "./typography";
import { Card, CardContent } from "@/components/ui/card";

const Content = ({ htmlContent }: { htmlContent: string }) => {
  return (
    <>
      <div className="my-11">
        <TypographyH2 className="text-3xl font-bold text-center text-primary">
          Comprehensive Guide to Using Our Social Media Video Downloader
        </TypographyH2>
        {htmlContent && (
          <Card className="p-0">
            <CardContent className="mt-5 p-0">
              <div
                className="tiptap"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default Content;
