import { TypographyH1 } from "@/components/custom/typography";
import { AlertDestructive } from "@/components/globle/error";
import { getPolicyPageCachedData } from "@/lib/cache-data";
import { Policy, policies } from "@/lib/database/db";
import { getCleanPath } from "@/lib/utils";
import { Metadata } from "next";

export function generateStaticParams() {
  const path = getCleanPath(policies);
  return path;
}

export async function generateMetadata({
  params,
}: {
  params: { path: string };
}): Promise<Metadata> {
  let res;
  try {
    res = await getPolicyPageCachedData();
  } catch (error) {
    console.error("Error in Policy page: ", error);
    res = "error";
  }

  const dynamicPolicies: Policy[] = res["policy-cont"];

  const filterContent = dynamicPolicies.find(
    (content, i) => content.page === `/${params.path}`
  );

  return {
    title: filterContent?.metaTitle,
    description: filterContent?.metaDescription,
    keywords: filterContent?.keywords,
  };
}

const Policies = async ({ params }: { params: { path: string } }) => {
  let res;
  try {
    res = await getPolicyPageCachedData();
  } catch (error) {
    console.error("Error in Policy page: ", error);
    res = "error";
  }

  if (res === "error") {
    return <AlertDestructive message={res} />;
  }

  const dynamicPolicies: Policy[] = res["policy-cont"];

  const filterContent = dynamicPolicies.filter((content, i) => {
    return content.page === `/${params.path}`;
  });

  return (
    <div>
      <TypographyH1 className="my-8">{filterContent[0]?.title}</TypographyH1>

      {filterContent[0]?.description && (
        <div
          dangerouslySetInnerHTML={{ __html: filterContent[0].description }}
        />
      )}
    </div>
  );
};

export default Policies;
