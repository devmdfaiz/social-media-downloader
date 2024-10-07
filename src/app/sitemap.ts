import { evarConts } from "@/lib/constants/evarConts";
import { customRoutes } from "@/lib/database/db";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...customRoutes,
    "/policies/terms-of-service",
    "/policies/privacy-policy",
    "/contact-us",
  ];
  return routes.map((route) => {
    return {
      url: `${evarConts.baseUrl}${route}`,
      changeFrequency: "weekly",
    };
  });
}
