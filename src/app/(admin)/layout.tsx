import AdminHeader from "@/components/admin/admin-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Admin dashboard",
    default: "Admin dashboard",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-hidden">
      <AdminHeader />
      <div className="w-screen min-h-screen container">{children}</div>
    </main>
  );
}
