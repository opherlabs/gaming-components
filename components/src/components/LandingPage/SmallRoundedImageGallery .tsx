import Image from 'next/image';
import { ImageGalleryProps, ImageProps } from './landingPageDto';
import React from 'react';


export const SmallRoundedImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex justify-center items-center gap-4">
      {images.map((img:ImageProps, index:number) => (
        <div key={index} className="w-14 h-14 flex justify-center items-center overflow-hidden rounded-full border border-gray-300">
          <Image
            height={img.height}
            width={img.width}
            src={img.src}
            alt={img.alt}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};


