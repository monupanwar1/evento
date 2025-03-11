"use client";
import Link from "next/link";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {motion} from "framer-motion";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];
export default function Header() {
  const activePathName = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 md:px-9 px-3">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full  text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx(
                "hover:text-white transition flex items-center relative",
                {
                  "text-white": activePathName === route.path,
                  "text-white/50": activePathName !== route.path,
                }
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathName === route.path && (
                <motion.div  layoutId="header-active-link" className="bg-[#a4f839] h-1 w-full absolute bottom-0"></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
