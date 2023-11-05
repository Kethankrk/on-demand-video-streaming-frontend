import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black flex px-5 gap-10 h-[50px] navbar">
      <Image src="/Vector.svg" width={30} height={30} />
      <Image src="/Logo.svg" width={80} height={80} />
    </nav>
  );
}
