import "@/styles/content.css";
import { TypographyH2 } from "./typography";

const Content = ({
  htmlContent,
  bannerAd_300_250,
  longBannerAd_468_60
}: {
  htmlContent: string;
  longBannerAd_468_60: string;
  bannerAd_300_250: string;
}) => {
  return (
    <div className="my-11">
      <TypographyH2 className="text-3xl font-bold text-center text-primary">
        Comprehensive Guide to Using Our Social Media Video Downloader
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

      {htmlContent && (
        <div className="w-full border border-primary/70 px-3 py-6 my-7">
          <div
            className="tiptap"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      )}
    </div>
  );
};

export default Content;
