import ThemeToggle from "@/components/organism/header/atom/themeToggle";
import Link from "next/link";
import { siteMetadata } from "@/metadata";
import Icon from "@/components/molecule/icon";

const NavigationBar = () => {
  return (
    <>
      <nav className="mx-auto mt-10 w-full max-w-screen-lg rounded-md bg-white px-4 py-2 shadow-md lg:px-8 lg:py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-slate-800">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-base font-semibold text-slate-800"
          >
            <span className="flex flex-row items-center gap-2">
              <Icon kind="logo" className={"h-6 w-6"} />
              <span> {siteMetadata.headerTitle}</span>
            </span>
          </Link>

          <div className="hidden lg:block">
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center gap-x-2 p-1 text-sm text-slate-600">
                <Icon kind="blog" className={"h-6 w-6 text-slate-500"} />

                <Link
                  href={siteMetadata.blogLink}
                  className="flex items-center"
                >
                  Blogs
                </Link>
              </li>
              <li className="flex items-center gap-x-2 p-1 text-sm text-slate-600">
                <Icon kind="notes" className={"h-6 w-6 text-slate-500"} />
                <Link
                  href={siteMetadata.notesLink}
                  className="flex items-center"
                >
                  Notes
                </Link>
              </li>
              <li className="flex items-center gap-x-2 p-1 text-sm text-slate-600">
                <Icon kind="me" className={"h-6 w-6 text-slate-500"} />

                <Link
                  href={siteMetadata.portfolioLink}
                  className="flex items-center"
                >
                  About
                </Link>
              </li>

              <li>
                <ThemeToggle />
              </li>
            </ul>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
