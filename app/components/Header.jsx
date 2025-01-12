"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/logo.svg";
import Navigation from "./Navigation";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive); // Toggle the state between true and false
  };

  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <Navigation />
    </header>
  );
};

export default Header;
