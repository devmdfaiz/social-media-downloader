import { downloaderFormSchema } from "@/components/custom/form";
import { type ClassValue, clsx } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const paste = async ({ form }: { form: any }) => {
  try {
    const text = await navigator.clipboard.readText();

    form.setValue("url", text);
    console.log("Text pasted into input field");
  } catch (err) {
    console.error("Failed to paste text into input field", err);
    alert("Clipboard access is not allowed. Please paste the text manually.");
  }
};

export const showToast = (
  title: string | null,
  desc: string | null,
  label: string | null,
  onClick: () => void | any
) => {
  toast(title, {
    description: desc,
    action: {
      label: label,
      onClick: onClick,
    },
  });
};

// Utility function to remove leading slash
export const getCleanPath = (contentArray: string[]): string[] => {
  return contentArray.map((item) => item.replace(/^\//, ""));
};
