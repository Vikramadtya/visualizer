import Mail from "../../../../../public/icons/social/mail.svg";
import Github from "../../../../../public/icons/social/github.svg";
import Facebook from "../../../../../public/icons/social/facebook.svg";
import Youtube from "../../../../../public/icons/social/youtube.svg";
import Linkedin from "../../../../../public/icons/social/linkedin.svg";
import Twitter from "../../../../../public/icons/social/twitter.svg";
import Instagram from "../../../../../public/icons/social/instagram.svg";
import Rss from "../../../../../public/icons/social/rss.svg";

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  rss: Rss,
};

const SocialIcon = ({ kind, href, size }) => {
  const SocialSvg = components[kind];

  return (
    <>
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg
          className={`fill-current text-gray-700 hover:text-blue-400 dark:text-gray-200`}
          width={size}
          height={size}
        />
      </a>
    </>
  );
};

export default SocialIcon;
