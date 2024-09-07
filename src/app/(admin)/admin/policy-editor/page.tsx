import PolicyEditor from "@/components/admin/policy-editor";
import { AlertDestructive } from "@/components/globle/error";
import { Policy } from "@/lib/database/db";
import { getPolicyPageData } from "@/lib/fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy page editor",
};

const PolicyEditorPage = async () => {
  let res;
  try {
    res = await getPolicyPageData();
  } catch (error) {
    console.error("Error in Policy editor page: ", error);
    res = "error";
  }

  if (res === "error") {
    return <AlertDestructive message={res} />;
  }

  const policies: Policy[] = res["policy-cont"];

  return <PolicyEditor policies={policies} />;
};

export default PolicyEditorPage;
