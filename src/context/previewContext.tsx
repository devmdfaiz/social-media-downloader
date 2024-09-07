"use client";
import { createContext, ReactNode, useState } from "react";

export const PreviewContext = createContext<any>("nothing");

const PreviewContextProvider = ({ children }: { children: ReactNode }) => {
  const [responseData, setResponseData] = useState("nothing");

  return (
    <PreviewContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </PreviewContext.Provider>
  );
};

export default PreviewContextProvider;
