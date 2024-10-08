import ContactEditor from "@/components/admin/contact-editor";
import { AlertDestructive } from "@/components/globle/error";
import { Contact } from "@/lib/database/db";
import { getContactPageData } from "@/lib/fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page editor",
};

const ContactEditorPage = async () => {
  let res;
  try {
    res = await getContactPageData();
  } catch (error) {
    console.error("Error in contact editor page: ", error);
    res = error;
  }  

  if (res === "error") {
    return <AlertDestructive message={JSON.stringify(res)} />;
  }

  const contact: Contact = res["contact-cont"];

  return <ContactEditor contact={contact} />;
};

export default ContactEditorPage;
