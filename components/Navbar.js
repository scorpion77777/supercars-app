import Link from "next/link";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center p-2 flex-wrap bg-gradient-to-r from-black to-black">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <img
              src="/kanji.svg"
              alt="An SVG of an eye"
              className="w-12 h-12 px-1 mr-4"
            />
            <span className="text-base text-white uppercase">
              Supercars-app
            </span>
          </a>
        </Link>

        <button
          className=" inline-flex p-3  rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <Hamburger size={30} color="#fff" duration={0.5} />
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          } w-full  lg:inline-flex lg:flex-grow lg:w-auto  `}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:bg-gray-700 hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:bg-gray-700 hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:bg-gray-700 hover:text-white">
                About us
              </a>
            </Link>
            <Link href="/contacts">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:bg-gray-700 hover:text-white">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
