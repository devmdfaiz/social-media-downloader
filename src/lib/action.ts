"use server";

import axios, { AxiosError } from "axios";
import { evarConts } from "./constants/evarConts";

// Centralized function to make PUT requests and handle errors
const putRequest = async (url: string, data: any) => {
  try {
    const response = await axios.put(url, data);
    const { data: resData, status } = response;

    if (status === 200) {
      return {
        status: true,
        message: resData.message || "Request successful.",
      };
    }

    // Handle non-200 statuses explicitly
    return {
      status: false,
      message: `Unexpected response status: ${status}`,
    };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || axiosError.message;
      console.error("Axios error:", errorMessage);
      return {
        status: false,
        message: `Failed to complete request: ${errorMessage}`,
      };
    }

    console.error("Non-Axios error:", error);
    return {
      status: false,
      message: "An unexpected error occurred.",
    };
  }
};

// Server action to seed all data
export const seedAllData = async (values: {
  contactData: any;
  content: any;
  faqsData: any;
  footerData: any;
  guideData: any;
  heroData: any;
  policyData: any;
  scriptsData: any;
  seoData: any;
  testimonialsData: any;
}) => {
  const response = await putRequest(`${evarConts.cloudflareKvUrl}/api`, values);
  return response;
};
