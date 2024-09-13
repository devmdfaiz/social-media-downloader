import Link from "next/link";
import { TypographyP } from "./typography";
import { NonBodyAsScript } from "../globle/ad";

const footerLinks = [
  {
    title: "Privacy Policy",
    path: "/policies/privacy-policy",
  },
  {
    title: "Terms of Service",
    path: "/policies/terms-of-service",
  },
  {
    title: "Contact us",
    path: "/contact-us",
  },
];

const Footer = ({
  footerCode,
  footer,
}: {
  footerCode: string;
  footer: string;
}) => {
  return (
    <footer className="p-4">
      <NonBodyAsScript script={footerCode} />
      <div className="flex justify-center items-center gap-5 flex-wrap">
        <TypographyP>{footer}</TypographyP>
        <ul className="flex justify-center items-center gap-3">
          {footerLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link
                  className="transition-all border-b hover:text-primary"
                  href={link.path}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
