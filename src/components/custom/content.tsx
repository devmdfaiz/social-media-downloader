import "@/styles/content.css";
import { TypographyH2 } from "./typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BodyAdScript from "../globle/ad";

const Content = ({
  htmlContent,
  bannerAd_300_250,
  longBannerAd_468_60,
}: {
  htmlContent: string;
  longBannerAd_468_60: string;
  bannerAd_300_250: string;
}) => {
  return (
    <>
      <div className="my-11">
        <TypographyH2 className="text-3xl font-bold text-center text-primary">
          Comprehensive Guide to Using Our Social Media Video Downloader
        </TypographyH2>

        {/* ad script */}
        <BodyAdScript
          bannerAd_300_250={bannerAd_300_250}
          longBannerAd_468_60={longBannerAd_468_60}
        />

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
