import NextJS from "../../../public/icons/build-with/nextjs.svg";
import TailwindCSS from "../../../public/icons/build-with/tailwind.svg";
import Umami from "../../../public/icons/build-with/umami.svg";
import Me from "../../../public/icons/navbar-icon/me.svg";
import Blog from "../../../public/icons/navbar-icon/blog.svg";
import Notes from "../../../public/icons/navbar-icon/notes.svg";
import Logo from "../../../public/icons/logo.svg";

import { classNameResolver } from "@/utils/classNameResolver";

const components = {
  next_js: NextJS,
  tailwind_css: TailwindCSS,
  umami: Umami,
  me: Me,
  blog: Blog,
  notes: Notes,
  logo: Logo,
};

const Icon = ({ kind, className }) => {
  const IconSvg = components[kind];
  return (
    <>
      <i className={`inline-block`}>
        <IconSvg className={classNameResolver(className)} />
      </i>
    </>
  );
};

export default Icon;
