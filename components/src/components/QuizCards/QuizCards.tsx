'use client';
import Link from "next/link";
import React from "react";
import Image from "next/image";

type FileItem = {
  id: string;
  title: string;
  source: string;
  bgColor: string;
  [key: string]: unknown;
};

interface TestingCOProps {
  files: FileItem[];
  url: string;

}

export const QuizCards: React.FC<TestingCOProps> = ({ files,url }) => {
  return (
    <div className="sm:p-16 mx-auto max-w-7xl  2xl:max-w-screen-2xl ">
      <div className="grid grid-cols-1 sm:gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
  <div
    key={file.id}
    className="relative group transition-transform transform hover:scale-105"
  >
    <Link href={`/${url}/${file.id}`}>
      {/* Mobile View */}
      <div
        className="block sm:hidden w-full h-48 bg-cover bg-center relative rounded-t-lg"
        style={{ backgroundImage: `url(${file.source})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {file.title.split(" ").map((word, index) => (
              <p key={index} className="text-lg font-bold">
                {word}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop View */}
      <div
        className="hidden sm:block sm:aspect-h-7 sm:aspect-w-10 w-full overflow-hidden rounded-t-lg bg-gray-100 relative"
        style={{ height: "200px" }}
      >
        <Image
          alt=""
          src={file.source}
          layout="fill"
          objectFit="cover"
          className="pointer-events-none transition-opacity duration-300 group-hover:greyscale"
        />
      </div>
      <div
        className="h-[16rem] hidden rounded-lg sm:flex items-center -mt-6 z-50 justify-center transition-transform duration-300 group-hover:translate-y-2 sm:bg-transparent"
        style={{ backgroundColor: file.bgColor }} 
      >
        <div className="text-center sm:hidden">
          {file.title.split(" ").map((word, index) => (
            <p key={index} className="text-xl font-extrabold text-white">
              {word}
            </p>
          ))}
        </div>
        <div className="hidden sm:block text-center">
          {file.title.split(" ").map((word, index) => (
            <p key={index} className="text-xl font-extrabold text-white">
              {word}
            </p>
          ))}
        </div>
      </div>
    </Link>
  </div>
        ))}
      </div>
    </div>
  );
};


