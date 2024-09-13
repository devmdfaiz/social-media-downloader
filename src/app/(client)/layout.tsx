import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import { AlertDestructive } from "@/components/globle/error";
import { getPageAllCachedData } from "@/lib/cache-data";
import { TResponse } from "./[path]/page";
import { ProductInfoError } from "@/components/globle/info";
import { NonBodyAsScript } from "@/components/globle/ad";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let res;

  try {
    res = await getPageAllCachedData();
  } catch (error) {
    console.error("Error in client main layout: ", error);
    res = "error";
  }

  const { scripts, footer, productInfo }: TResponse = res;

  if (productInfo === "error") {
    return <ProductInfoError />;
  }

  return (
    <>
      <NonBodyAsScript script={scripts?.bodyCode} />
      <main className="overflow-hidden">
        <Header headerCode={scripts?.headerCode} />
        {res === "error" ? (
          <AlertDestructive message={res} />
        ) : (
          <div className="w-screen min-h-screen container">{children}</div>
        )}
        <Footer footerCode={scripts?.footerCode} footer={footer?.footer} />
      </main>
    </>
  );
}
