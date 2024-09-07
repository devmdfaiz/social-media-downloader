"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { TypographyH2, TypographySmall } from "./typography";
import { buttonVariants } from "../ui/button";
import { DownloadIcon } from "lucide-react";
import { PreviewContext } from "@/context/previewContext";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Preview = () => {
  const { responseData } = useContext(PreviewContext);

  return (
    <>
      {responseData !== "nothing" && (
        <TypographyH2 className="text-primary text-center">
          Download Links
        </TypographyH2>
      )}
      {responseData?.links?.length > 0 &&
        responseData.links.map((data: any, i: number) => (
          <div
            key={i}
            className="w-full border border-primary/70 px-3 py-6 my-7"
          >
            <div className="flex items-center justify-between flex-wrap px-3 py-2 gap-3">
              <Avatar className="rounded-none w-9 h-12 object-cover">
                <AvatarImage className="rounded-none" src={responseData.picture} alt={`cover-${i}`} />
                <AvatarFallback className="rounded-none">C</AvatarFallback>
              </Avatar>
              <div>
                <TypographySmall>
                  {`${responseData.title.slice(0, 30)}${
                    responseData.title.length > 30 && "..."
                  }`}
                </TypographySmall>
              </div>

              <div>
                <TypographySmall className="text-primary border border-primary/80 bg-primary/20 px-3 py-2">
                  {data.quality}
                </TypographySmall>
              </div>
              <div>
                <Link
                  className={buttonVariants({
                    variant: "default",
                    size: "icon",
                  })}
                  href={data.link}
                >
                  <DownloadIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Preview;
