import { cache } from "react";
import { getContactPageData, getPageAllData, getPolicyPageData, getSEOData } from "./fetch";

export const getPageAllCachedData = cache(getPageAllData);

export const getContactPageCachedData = cache(getContactPageData);

export const getSeoCachedData = cache(getSEOData);

export const getPolicyPageCachedData = cache(getPolicyPageData);
