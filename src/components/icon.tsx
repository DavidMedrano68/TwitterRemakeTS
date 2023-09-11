import { useState } from "react";
import { Link } from "react-router-dom";
type iconProps = {
  src: string;
  name: string;
  screenWidth: number;
  altName?: string;
};
export default function Icon({ src, name, screenWidth, altName }: iconProps) {
  const [hovered, setHovered] = useState(false);
  const onEnter = () => {
    setHovered(true);
  };
  const onLeave = () => {
    setHovered(false);
  };
  if (screenWidth < 989) {
    return (
      <Link to={`${altName ? "/Profile/" : "/"}${altName ? altName : name}`}>
        <li className={`rounded-full ${hovered ? "delayHover p-1" : null}`}>
          <img
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="relative"
            src={src}
            alt="Noti"
          ></img>
          {hovered ? (
            <span className="z-20 spanText absolute bg-[#0f151e] p-1 rounded-lg icon">
              {name}
            </span>
          ) : null}
        </li>
      </Link>
    );
  } else {
    return (
      <Link
        className=" rounded-md delayHover"
        to={`${altName ? "/Profile/" : "/"}${altName ? altName : name}`}
      >
        <li className=" cursor-pointer w-3/4 rounded-xl grid grid-cols-2 ">
          <img src={src} alt="Noti"></img>
          <p className="font-semibold text-xl self-center">{name}</p>
        </li>
      </Link>
    );
  }
}
