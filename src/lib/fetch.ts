import axios from "axios";
import { evarConts } from "./constants/evarConts";

export const getPageAllData = async () => {
  const res = await axios.get(`${evarConts.cloudflareKvUrl}/api`);

  const { data, status } = res;

  if (status === 200) {
    return data.data;
  }

  throw new Error("An unexpected error has occurred. Please try again later.");
};

export const getContactPageData = async () => {
  const res = await axios.get(`${evarConts.cloudflareKvUrl}/api/contact`);

  const { data, status } = res;

  if (status === 200) {
    return data;
  }

  throw new Error("An unexpected error has occurred. Please try again later.");
};

export const getPolicyPageData = async () => {
  const res = await axios.get(`${evarConts.cloudflareKvUrl}/api/policy`);

  const { data, status } = res;

  if (status === 200) {
    return data;
  }

  throw new Error("An unexpected error has occurred. Please try again later.");
};

export const getSEOData = async () => {
  const res = await axios.get(`${evarConts.cloudflareKvUrl}/api/seo`);

  const { data, status } = res;

  if (status === 200) {
    return data;
  }

  throw new Error("An unexpected error has occurred. Please try again later.");
};

export const getScriptData = async () => {
  const res = await axios.get(`${evarConts.cloudflareKvUrl}/api/scripts`);

  const { data, status } = res;

  if (status === 200) {
    return data;
  }

  throw new Error("An unexpected error has occurred. Please try again later.");
};

export const getFooterData = async () => {
  const res = await axios.get(`${evarConts.cloudflareKvUrl}/api/footer`);

  const { data, status } = res;

  if (status === 200) {
    return data;
  }

  throw new Error("An unexpected error has occurred. Please try again later.");
};
