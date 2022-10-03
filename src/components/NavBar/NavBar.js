import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Link from "../Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/home" },
    { id: 3, name: "Contact", path: "/home" },
    { id: 4, name: "Products", path: "/home" },
    { id: 5, name: "Support", path: "/home" },
  ];
  return (
    <nav className="bg-slate-200">
      <div
        onClick={() => setOpen(!open)}
        className="h-6 w-6 text-blue-500 md:hidden"
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul
        className={`md:flex justify-center absolute duration-500 ease-in md:static bg-slate-200 w-full ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
