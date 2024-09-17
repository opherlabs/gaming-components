import Image from 'next/image';
import { ImageGalleryProps, ImageProps } from './landingPageDto';
import React from 'react';


export const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div>
 <div className="bg-white rounded-full h-[7rem] flex justify-evenly items-center text-black shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out ">
      
      {images?.map((img: ImageProps, index: number) => (
        <div key={index}>
          <Image
            height={img.height}
            width={img.width}
            src={img.src}
            alt={img.alt}
            className={img.rounded ? 'rounded-full' : ''}
          />
        </div>
      ))}
      {/* White shadow at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-white via-transparent"></div>
    </div>
    </div>
   
  );
};


