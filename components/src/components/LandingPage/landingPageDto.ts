
export declare interface ImageProps {
    height: number;
    width: number;
    src: string;
    alt: string;
    rounded?: boolean;
  }
  
  // Define the props for the ImageGallery component
  export declare interface ImageGalleryProps {
    images: ImageProps[];
  }