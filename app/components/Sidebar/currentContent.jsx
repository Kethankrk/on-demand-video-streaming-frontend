import React from "react";
import Image from "next/image";
export default function CurrentContent() {
  return (
    <div className="flex bg-[#1E1E1E] p-5 gap-5">
      <div className="flex items-center justify-center">
        <Image src="/video.svg" width={45} height={45} />
      </div>
      <div className="flex items-start justify-center flex-col">
        <p className="text-[12px] text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, ipsum!</p>
        <p className="text-[12px] text-white pt-2">10 min</p>
      </div>
    </div>
  );
}
