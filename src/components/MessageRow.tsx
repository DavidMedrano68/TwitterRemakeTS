import profilePic from "../assets/profile.svg";

import React from "react";
type MessageRowProps = {
  index: number;
  setIsSelected: React.Dispatch<React.SetStateAction<number[]>>;
  isSelected: number[] | null[];
};

export default function MessageRow({
  index,
  setIsSelected,
  isSelected,
}: MessageRowProps) {
  return (
    <div
      className="grid grid-cols-8 m-1 py-4 delayHover"
      onClick={() => {
        setIsSelected([index]);
      }}
    >
      <img
        className="rounded-full w-[40px] h-[40px] col-span-2"
        src={profilePic}
        alt=""
      />
      <div
        className={`col-span-6 grid grid-rows-2 blueBorder " ${
          isSelected[0] == index ? "border-r-4" : null
        }`}
      >
        <div className="grid grid-cols-3">
          <div id="Username">David M</div>
          <div id="handle" className="text-xs">
            @davidM8989
          </div>
          <div className="justify-self-end mr-2">4h</div>
        </div>
        <div className="">I havent Told u</div>
      </div>
    </div>
  );
}
