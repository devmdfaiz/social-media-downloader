import axios, { AxiosError } from "axios";
import { evarConts } from "./constants/evarConts";

// Centralized function to handle Axios requests
const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const { data, status } = response;

    // Success Response
    if (status === 200) {
      return data;
    }

    // In case of other status codes
    throw new Error(`Unexpected status code: ${status}`);
  } catch (error: any) {
    // Error Handling
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "An unknown error occurred.";
      console.error(`Error fetching data from ${url}:`, errorMessage);
      throw new Error(errorMessage);
    }

    console.error(`Non-Axios error:`, error);
    throw new Error("An error occurred while fetching data. Please try again.");
  }
};

// Function Wrappers to fetch data from specific APIs
export const getPageAllData = async (params: string) => {
  const res = await fetchData(`${evarConts.cloudflareKvUrl}/api/all/${params}`);

  return res?.data;
};

export const getContactPageData = async () => {
  const res = await fetchData(`${evarConts.cloudflareKvUrl}/api/contact`);

  return res;
};

export const getPolicyPageData = async () => {
  const res = await fetchData(`${evarConts.cloudflareKvUrl}/api/policy`);

  return res;
};

export const getSEOData = async () => {
  const res = await fetchData(`${evarConts.cloudflareKvUrl}/api/seo`);

  console.log("seo function data: ", res);

  return res;
};

export const getScriptData = async () => {
  const res = await fetchData(`${evarConts.cloudflareKvUrl}/api/scripts`);

  return res;
};

export const getFooterData = async () => {
  const res = await fetchData(`${evarConts.cloudflareKvUrl}/api/footer`);

  return res;
};

export const getProductInfo = async () => {
  const res = await fetchData(`${evarConts.cloudflareKvUrl}/api/product-info`);

  return res;
};
