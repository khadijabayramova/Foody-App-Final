import Link from "next/link";
import React from "react";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Restaurants", href: "/restaurants" },
  { name: "Category", href: "/category" },
  { name: "Orders", href: "/orders" },
  { name: "Offer", href: "/offer" },
  { name: "Logout", href: "/login" },
];

export default function Sidebar() {
  return (
    <aside className="w-1/5 bg-sidebarColor ml-2 mt-2 rounded-xl ">
      <ul className="flex flex-col">
        {links.map((link) => (
          <li className="p-4 text-textColor">
            <Link
              className="h-10 flex gap-x-4 items-center text-sm font-semibold  hover:bg-hoverColor hover:rounded hover:opacity-100  px-4"
              href={link.href}
            >
              <span></span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
