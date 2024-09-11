import AdminHeader from "@/components/admin/admin-header";
import { ProductInfoError } from "@/components/globle/info";
import { getProductInfo } from "@/lib/fetch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Admin dashboard",
    default: "Admin dashboard",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let res;

  try {
    res = await getProductInfo();
  } catch (error) {
    console.error("Error in client main layout: ", error);
    res = "error";
  }

  const productInfo = res["product-info"];

  if (!productInfo) {
    return <ProductInfoError />;
  }

  return (
    <main className="overflow-hidden">
      <AdminHeader />
      <div className="w-screen min-h-screen container">{children}</div>
    </main>
  );
}
