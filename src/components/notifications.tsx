import { useState } from "react";

export default function Notifications() {
  const [isSelected, setIsSelected] = useState([true, false, false]);
  return (
    <div className={"col-span-7 bg-black"}>
      <div>
        <p className=" ml-5 font-extrabold text-2xl">Notification</p>
        <nav>
          <ul className="grid grid-cols-3 place-items-center">
            <li
              className="w-full grid place-items-center delayHover cursor-pointer"
              onClick={() => {
                setIsSelected([true, false, false]);
              }}
            >
              <div className=" grid grid-rows-2">
                <p className={isSelected[0] ? "font-extrabold" : null}>All</p>
                {isSelected[0] ? (
                  <div className="rounded-3xl bg-blue-800 h-1 w-auto self-end mb-1 "></div>
                ) : null}
              </div>
            </li>
            <li
              className="w-full grid place-items-center delayHover cursor-pointer"
              onClick={() => {
                setIsSelected([false, true, false]);
              }}
            >
              <div className=" grid grid-rows-2">
                <p className={isSelected[1] ? "font-extrabold" : null}>
                  Verified
                </p>
                {isSelected[1] ? (
                  <div className="rounded-3xl bg-blue-800 h-1 w-auto self-end mb-1 "></div>
                ) : null}
              </div>
            </li>
            <li
              className="w-full grid place-items-center delayHover cursor-pointer"
              onClick={() => {
                setIsSelected([false, false, true]);
              }}
            >
              <div className=" grid grid-rows-2">
                <p className={isSelected[2] ? "font-extrabold" : null}>
                  Mentions
                </p>
                {isSelected[2] ? (
                  <div className="rounded-3xl bg-blue-800 h-1 w-auto self-end mb-1 "></div>
                ) : null}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
