'use client';
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export const QuizCards: React.FC<TestingCOProps> = ({ files, url }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div 
      className="sm:p-16 mx-auto max-w-7xl 2xl:max-w-screen-2xl"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.8,
          },
        },
      }}
    >
      <div className="grid grid-cols-1 sm:gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
          <motion.div
            key={file.id}
            className="relative group"
            onMouseEnter={() => setHovered(file.id)} 
            onMouseLeave={() => setHovered(null)}    
            animate={hovered === file.id ? "hover" : "rest"} 
            variants={{
              rest: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              },
              hover: {
                scale: 1.05, // Scale up on hover
                opacity: 0.9, // Slightly fade
                x: [0, 10, -10, 10, -10, 0], // Shake effect
                rotateZ: [0, 2, -2, 2, -2, 0], // Slight rotation for extra effect
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              },
            }}
          >
            <Link href={`/${url}/${file.id}`}>
              {/* Mobile View */}
              <motion.div
                className="block sm:hidden w-full h-60 bg-cover bg-center relative rounded-2xl"
                style={{ backgroundImage: `url(${file.source})` }}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    {file.title.split(" ").map((word, index) => (
                      <p key={index} className="text-lg font-bold">
                        {word}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
              {/* Desktop View */}
              <motion.div
                className="hidden sm:block sm:aspect-h-7 sm:aspect-w-10 w-full overflow-hidden rounded-t-lg bg-gray-100 relative"
                style={{ height: "200px" }}
                initial={{ opacity: 0, y: 30, rotateY: -180 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  alt=""
                  src={file.source}
                  layout="fill"
                  objectFit="cover"
                  className="pointer-events-none transition-opacity duration-300 group-hover:grayscale"
                />
              </motion.div>
              <motion.div
                className="h-[16rem] hidden rounded-lg sm:flex items-center -mt-6 z-50 justify-center transition-transform duration-300 group-hover:translate-y-2 sm:bg-transparent"
                style={{ backgroundColor: file.bgColor }}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
              >
                <div className="hidden sm:block text-center">
                  {file.title.split(" ").map((word, index) => (
                    <p key={index} className="text-xl font-extrabold text-white">
                      {word}
                    </p>
                  ))}
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
