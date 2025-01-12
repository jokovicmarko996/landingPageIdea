import React from "react";

import { useState } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Our Work", href: "#" },
  { name: "Contact", href: "#" },
  // { name: "Contact", href: "#contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto flex justify-between h-full items-center">
      {/* Logo */}
      <Link href="#">
        <Image
          src={logo} // Path to your logo in the `public` folder
          alt="Website Logo"
          width={150} // Specify the width of the logo
          height={50} // Specify the height of the logo
        />
      </Link>

      {/* Desktop Menu */}
      <nav>
        <ul
          className={`fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300`}
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? (
            <i className="ri-close-line text-4xl text-primary"></i>
          ) : (
            <i className="ri-menu-4-line text-4xl text-primary"></i>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`fixed w-full h-[350px] p-6 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 md:hidden`}
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="">
              {item.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navigation;
