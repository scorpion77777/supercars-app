import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl m-5">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Light" Icon={BoltIcon} />
        <HeaderItem title="Checked" Icon={CheckBadgeIcon} />
        <HeaderItem title="Stack" Icon={CircleStackIcon} />
        <HeaderItem title="Search" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="Profile" Icon={UserCircleIcon} />
      </div>
      <Image
        className="object-contain"
        width={100}
        height={50}
        alt="hulu logo"
        src="https://links.papareact.com/ua6"
      />
    </header>
  );
}
