import NextJS from "../../../public/icons/build-with/nextjs.svg";
import TailwindCSS from "../../../public/icons/build-with/tailwind.svg";
import Umami from "../../../public/icons/build-with/umami.svg";
import Me from "../../../public/icons/navbar-icon/me.svg";
import Blog from "../../../public/icons/navbar-icon/blog.svg";
import Notes from "../../../public/icons/navbar-icon/notes.svg";
import Logo from "../../../public/icons/logo.svg";
import Play from "../../../public/icons/control/play.svg";
import Pause from "../../../public/icons/control/pause.svg";
import Previous from "../../../public/icons/control/previous.svg";
import Next from "../../../public/icons/control/next.svg";

import { classNameResolver } from "@/utils/classNameResolver";

const components = {
  next_js: NextJS,
  tailwind_css: TailwindCSS,
  umami: Umami,
  me: Me,
  blog: Blog,
  notes: Notes,
  logo: Logo,
  pause: Pause,
  previous: Previous,
  play: Play,
  next: Next,
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
