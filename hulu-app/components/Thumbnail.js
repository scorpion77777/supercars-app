import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";
import FlipMove from "react-flip-move";
import { ForwardedRef, forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "http://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="group p-2 cursor-pointer transition duration-200 eas-in transform sm: hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1000}
        width={1920}
      />
      <div>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className=" truncate max-w-md">{result.overview}</p>
        <p className="text-white flex items-center opacity-0 group-hover:opacity-100 cursor-pointer">
          {result.media_type && `${result.media_type}: `}
          {result.realese_date || result.first_air_date}
          <HandThumbUpIcon className="h-5 mx-2 text-white" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
