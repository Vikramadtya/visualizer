import Link from "next/link";

import SocialIcon from "./atom/socialIcon";
import BuildWith from "./atom/buildWith";

import { siteMetadata } from "@/metadata";

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="instagram"
            href={siteMetadata.instagram}
            size={20}
          />
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size={20}
          />
          <SocialIcon kind="github" href={siteMetadata.github} size={20} />
          <SocialIcon kind="rss" href="/feed.xml" size={20} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-white">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-white">
          Powered by{` `}
          <a className={"underline"} href="https://nextjs.org">
            Vercel
          </a>
        </div>
      </div>
      <div className="mb-8 ml-10 mr-10  flex flex-col items-center  justify-between space-y-4 md:mb-10 md:flex md:flex-row md:space-y-0">
        <BuildWith />

        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-white">
          <span>
            {siteMetadata.title}&apos;s Blog - Debugging life with lines of code
            and a dash of humor
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
