import ActivationForm from "@/components/globle/activation-form";
import { getProductInfo } from "@/lib/fetch";
import { redirect } from "next/navigation";

const ActivationPage = async () => {
  let res;

  try {
    res = await getProductInfo();
  } catch (error) {
    res = "error";
  }

  const productInfo = res["product-info"];

  // if (productInfo) {
  //   redirect("/");
  // }

  return <ActivationForm />;
};

export default ActivationPage;
