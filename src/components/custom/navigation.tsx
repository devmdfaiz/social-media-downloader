"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

interface Path {
  title: string;
  desc: string;
  path: string;
}

interface SocialLink {
  social: string;
  paths: Path[];
}

export const links: SocialLink[] = [
  {
    social: "Instagram",
    paths: [
      {
        title: "Download Reels",
        desc: "Easily download Instagram Reels with just a few clicks. Save your favorite videos in high quality directly to your device.",
        path: "/instagram-reels-download",
      },
      {
        title: "Download Posts",
        desc: "Download Instagram posts, including images and videos, quickly and in their original resolution.",
        path: "/instagram-posts-download",
      },
      {
        title: "Download IGTV",
        desc: "Download long-form IGTV videos from Instagram effortlessly. Save them to watch offline at any time.",
        path: "/instagram-igtv-download",
      },
      {
        title: "Download Stories",
        desc: "Save Instagram Stories from your favorite accounts. Download videos and images before they disappear.",
        path: "/instagram-stories-download",
      },
    ],
  },
  {
    social: "Facebook",
    paths: [
      {
        title: "Download Videos",
        desc: "Download Facebook videos in high quality, whether from your feed, groups, or pages. Save them to watch later.",
        path: "/facebook-videos-download",
      },
      {
        title: "Download Stories",
        desc: "Download Facebook Stories to keep your favorite moments from friends and pages. Save both images and videos.",
        path: "/facebook-stories-download",
      },
    ],
  },
  {
    social: "TikTok",
    paths: [
      {
        title: "Download Videos",
        desc: "Download TikTok videos without watermarks. Save viral videos or your favorite content to your device in HD quality.",
        path: "/tiktok-videos-download",
      },
    ],
  },
  {
    social: "YouTube",
    paths: [
      {
        title: "Download Videos",
        desc: "Download YouTube videos in various resolutions, from 360p to 4K. Save content from your favorite channels for offline viewing.",
        path: "/youtube-videos-download",
      },
      {
        title: "Download Shorts",
        desc: "Quickly download YouTube Shorts and enjoy them offline. Save short-form content directly to your device.",
        path: "/youtube-shorts-download",
      },
    ],
  },
];

export const NavigationDesktop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((link, i) => {
          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger>{link.social}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {link.paths.map((component, i) => (
                    <ListItem
                      key={i}
                      title={component.title}
                      href={component.path}
                    >
                      {component.desc}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href!} legacyBehavior passHref>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
