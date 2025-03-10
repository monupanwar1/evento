import Link from "next/link";
import Logo from "./logo";

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
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 md:px-9 px-3">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((route) => (
            <li key={route.name}
            className="text-white/50 hover:text-white trasition">
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
