export default function BodyAdScript({
  longBannerAd_468_60,
  bannerAd_300_250,
}: {
  bannerAd_300_250: string;
  longBannerAd_468_60: string;
}) {
  return (
    <div className="w-full h-fit flex items-center justify-center mb-6">
      <div className="above-form-add w-[468px] h-[60px] hidden sm:block">
        {longBannerAd_468_60 && (
          <div dangerouslySetInnerHTML={{ __html: longBannerAd_468_60 }}></div>
        )}
      </div>

      <div className="above-form-add w-[300px] h-[250px] sm:hidden">
        {bannerAd_300_250 && (
          <div dangerouslySetInnerHTML={{ __html: bannerAd_300_250 }}></div>
        )}
      </div>
    </div>
  );
}

export const NonBodyAsScript = ({ script }: { script: string }) => {
  return (
    <>{script && <div dangerouslySetInnerHTML={{ __html: script }}></div>}</>
  );
};
