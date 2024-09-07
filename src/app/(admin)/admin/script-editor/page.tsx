import ScriptEditor from "@/components/admin/script-editor";
import { AlertDestructive } from "@/components/globle/error";
import { Script } from "@/lib/database/db";
import { getScriptData } from "@/lib/fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy page editor",
};

const PolicyEditorPage = async () => {
  let res;
  try {
    res = await getScriptData();
  } catch (error) {
    console.error("Error in Policy editor page: ", error);
    res = "error";
  }

  if (res === "error") {
    return <AlertDestructive message={res} />;
  }

  const scripts: Script = res["scripts"];

  return <ScriptEditor scripts={scripts} />;
};

export default PolicyEditorPage;
