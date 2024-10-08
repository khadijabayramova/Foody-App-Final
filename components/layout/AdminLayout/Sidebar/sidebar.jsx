import Link from "next/link";
import Image from "next/image";
import React from "react";

const links = [
  { name: "Dashboard", href: "/admin", src: "/adminImgs/dashboard.svg" },
  {
    name: "Products",
    src: "/adminImgs/product.svg",
    href: "/admin/products",
  },
  {
    name: "Restaurants",
    href: "/admin/restaurants",
    src: "/adminImgs/restr.svg",
  },
  {
    name: "Category",
    href: "/admin/category",
    src: "/adminImgs/category.svg",
  },
  {
    name: "Orders",
    href: "/admin/orders",
    src: "/adminImgs/orders.svg",
  },
  { name: "Offer", href: "/admin/offers", src: "/adminImgs/offer.svg" },
  { name: "Logout", href: "/admin/login", src: "/adminImgs/logout.svg" },
];

export default function Sidebar() {
  return (
    <aside className="w-1/5 bg-sidebarColor rounded-xl h-[74vh]">
      <ul className="flex flex-col">
        {links.map((link) => (
          <li className="p-4">
            <Link
              className="h-10 flex gap-x-4 items-center text-sm font-semibold  hover:bg-hoverColor hover:rounded hover:opacity-100  px-4"
              href={link.href}
            >
              <span>
                <Image src={link.src} alt="icon" width={20} height={18} />
              </span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
