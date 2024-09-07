"use client";
import React, { useState } from "react";
import { links, NavigationDesktop } from "./navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Header = ({ headerCode }: { headerCode: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState({
    index: -1,
    status: false,
  });

  return (
    <>
      <header className="px-7 py-2  items-center justify-start gap-6 border-b border-primary/70 hidden sm:flex">
        {/* ad script */}
        {headerCode && (
          <div dangerouslySetInnerHTML={{ __html: headerCode }}></div>
        )}

        <div>
          <h2 className="font-extrabold text-2xl text-primary select-none">
            Downloady.
          </h2>
        </div>
        <div className="w-fit h-fit">
          <NavigationDesktop />
        </div>
      </header>

      <header className="px-7 py-2 flex items-center gap-6 border-b border-primary/70 sm:hidden">
        {/* ad script */}
        <div className="w-full h-fit flex items-center justify-center">
          <div className="above-form-add w-[468px] h-[60px] hidden sm:block">
            {headerCode && (
              <div dangerouslySetInnerHTML={{ __html: headerCode }}></div>
            )}
          </div>
        </div>

        <div
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <HamburgerMenuIcon className="w-5 h-5" />
        </div>

        <div>
          <h2 className="font-extrabold text-2xl text-primary select-none">
            Downloady.
          </h2>
        </div>
      </header>

      <Sheet onOpenChange={setIsMenuOpen} open={isMenuOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="font-extrabold text-2xl text-primary select-none text-start mb-3">
              Downloady.
            </SheetTitle>
          </SheetHeader>
          {/* code here */}
          {links.map((link, i) => {
            return (
              <Collapsible
                key={i}
                className="w-full space-y-2"
                open={isCollapsibleOpen.status}
              >
                <CollapsibleTrigger asChild>
                  <div>
                    <div
                      className="flex items-center justify-start px-3 py-3 border-b border-primary/70 hover:bg-accent"
                      onClick={() =>
                        setIsCollapsibleOpen((prev) => {
                          const { index, status } = prev;
                          if (index === -1) {
                            return { index: i, status: !status };
                          }

                          return { index: i, status: true };
                        })
                      }
                    >
                      <p className="text-xl tracking-widest grow">
                        {link.social}
                      </p>

                      <div>
                        <ChevronDown
                          className={`transition-all ${
                            isCollapsibleOpen.status &&
                            isCollapsibleOpen.index === i &&
                            "rotate-180"
                          }`}
                        />
                      </div>
                    </div>
                    {isCollapsibleOpen.index === i &&
                      link.paths.map((path, i) => {
                        return (
                          <CollapsibleContent
                            key={i}
                            className="px-3 py-3 text-lg hover:bg-accent space-y-2 block tracking-wider"
                            asChild
                          >
                            <Link
                              onClick={() =>
                                setIsCollapsibleOpen((prev) => {
                                  return { index: -1, status: false };
                                })
                              }
                              href={path.path}
                            >
                              {path.title}
                            </Link>
                          </CollapsibleContent>
                        );
                      })}
                  </div>
                </CollapsibleTrigger>
              </Collapsible>
            );
          })}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;
