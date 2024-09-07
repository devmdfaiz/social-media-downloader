"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface TLink {
  path: string;
  title: string;
}

const links: TLink[] = [
  {
    path: "/admin",
    title: "General",
  },
  {
    path: "/admin/seo-editor",
    title: "Seo",
  },
  {
    path: "/admin/policy-editor",
    title: "Policy",
  },
  {
    path: "/admin/script-editor",
    title: "Script",
  },
];

const AdminHeader = () => {
  const path = usePathname();

  return (
    <>
      {path !== "/login" && (
        <header className="px-6 py-4 flex items-center justify-start border-b border-primary">
          <ul className="flex items-center justify-start gap-3">
            {links.map((link, i) => {
              return (
                <li
                  key={i}
                  className={`px-3 py-2  transition-all ${
                    link.path !== path && "hover:bg-accent"
                  } ${link.path === path && "bg-primary"}`}
                >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </header>
      )}
    </>
  );
};

export default AdminHeader;
