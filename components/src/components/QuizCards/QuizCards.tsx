import React from "react";
import Link from "next/link";
import Image from "next/image";

type FileItem = {
  id: string;
  title: string;
  source: string;
  bgColor: string;
};

interface TestingCOProps {
  files: FileItem[];
}

export const QuizCards: React.FC<TestingCOProps> = ({ files }) => {
  return (
    <div className="p-16">
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
          <div
            key={file.id}
            className="relative group transition-transform transform hover:scale-105"
          >
            <Link href={`/cards/${file.id}`}>
                <div
                  className="aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-t-lg bg-gray-100 relative"
                  style={{ height: '200px' }}
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
                  className={`h-[16rem] bg-[${file.bgColor}] rounded-lg flex items-center -mt-6 z-50 justify-center transition-transform duration-300 group-hover:translate-y-2`}
                >
                  <div className="text-center">
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
