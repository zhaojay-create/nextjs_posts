"use client";

import { NavbarItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-500" : "text-gray-600";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/5 backdrop-blur border-b border-gray-200/100 shadow-sm z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-gray-800">
            Blog
          </Link>

          <div className="flex space-x-8">
            {NavbarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${isActive(item.href)}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
