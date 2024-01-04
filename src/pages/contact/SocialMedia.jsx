import clsx from "clsx";
import { Link } from "react-router-dom";
import { Zap } from 'lucide-react'


export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@reactjsBD/",
    icon: Zap,
  },
  { title: "GitHub", href: "https://github.com/noorjsdivs/", icon: Zap },
  {
    title: "Facebook",
    href: "https://www.facebook.com/Noorlalu143/",
    icon: Zap,
  },
  {
    title: "Instagram",
    href: "https://www.linkedin.com/in/noor-mohammad-ab2245193/",
    icon: Zap,
  },
  { title: "Twitter", href: "https://twitter.com", icon: Zap },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
