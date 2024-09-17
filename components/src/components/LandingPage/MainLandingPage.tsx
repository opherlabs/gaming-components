"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ImageGallery, LandingPageImages, smallImages } from ".";
import { SmallRoundedImageGallery } from "./SmallRoundedImageGallery ";



export const MainLandingPage = ({ session }: { session: any }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuth = () => {
    if (session) {
      return;
    }
    return "";
  };

  const greeting = () => {
    const time = new Date().getHours();
    let greet = "";
    if (time < 12) {
      greet = "Good Morning";
    } else if (time >= 12 && time < 17) {
      greet = "Good Afternoon";
    } else {
      greet = "Good Evening";
    }
    if (session?.data) {
      return `${greet} ${session?.data.user?.name}`;
    }
    return `${greet}, Welcome`;
  };

  return (
    <div className="bg-gray-900 min-h-screen max-h-screen overflow-hidden">
      <div className="relative min-h-screen isolate overflow-hidden pt-14">
        <Image
          height={1680}
          width={1920}
          src="/sa.svg"
          alt="background"
          className="absolute inset-0 -z-10 h-screen w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-72">
          <div className="text-center text-white space-y-6 px-4">
            <div className="flex  justify-center items-center gap-3 ">
                <div className="flex-1" >  <ImageGallery images={LandingPageImages} /></div>
                <div>  <SmallRoundedImageGallery images={smallImages} /></div>
            
            
            </div>
            <div className="flex justify-center items-center">
              <Link
                className="text-2xl w-1/2 rounded-full font-semibold flex items-center gap-2 justify-center leading-8 text-[#163a59] border-4 border-[#163a59] bg-white px-4 py-2 my-12 shadow-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out"
                href={session?.data ? "/onboarding" : "/dashboard"}
                onClick={handleAuth}
              >
                {session?.data ? (
                  <span className="flex items-center gap-2">
                    {/* <UserIcon className="w-6 h-6" /> */}
                    Go to your profile
                  </span>
                ) : (
                  <>
                    {/* <RiShieldUserFill className="w-6 h-6" /> */}
                    Sign In
                  </>
                )}
              </Link>
            </div>

            <div className="flex py-12 justify-center"></div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
