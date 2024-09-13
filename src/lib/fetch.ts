import axios, { AxiosError } from "axios";
import { evarConts } from "./constants/evarConts";

// Centralized function to handle Axios requests
const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const { data, status } = response;
    console.log("fetch data: ", data);
    

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
export const getPageAllData = async () => {
  return fetchData(`${evarConts.cloudflareKvUrl}/api`);
};

export const getContactPageData = async () => {
  return fetchData(`${evarConts.cloudflareKvUrl}/api/contact`);
};

export const getPolicyPageData = async () => {
  return fetchData(`${evarConts.cloudflareKvUrl}/api/policy`);
};

export const getSEOData = async () => {
  return fetchData(`${evarConts.cloudflareKvUrl}/api/seo`);
};

export const getScriptData = async () => {
  return fetchData(`${evarConts.cloudflareKvUrl}/api/scripts`);
};

export const getFooterData = async () => {
  return fetchData(`${evarConts.cloudflareKvUrl}/api/footer`);
};

export const getProductInfo = async () => {
  return fetchData(`${evarConts.cloudflareKvUrl}/api/product-info`);
};
