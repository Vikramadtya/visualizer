import NextJS from "../../../public/icons/build-with/nextjs.svg";
import TailwindCSS from "../../../public/icons/build-with/tailwind.svg";
import Umami from "../../../public/icons/build-with/umami.svg";

import { classNameResolver } from "@/utils/classNameResolver";

const components = {
  next_js: NextJS,
  tailwind_css: TailwindCSS,
  umami: Umami,
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
