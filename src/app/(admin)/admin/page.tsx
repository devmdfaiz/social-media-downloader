import { Metadata } from "next";
import AdminPageClient from ".";

export const metadata: Metadata = {
  title: "Main page editor",
};

const AdminPage = () => {
  return <AdminPageClient />;
};

export default AdminPage;
