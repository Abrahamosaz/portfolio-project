"use client";

import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { jpgold } from "@/public/icons";
import { profilePicture } from "@/public/images";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useWindowSize } from "../hooks/useWindowSize";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";

type ReviewCardProps = {
  title: string;
  subtitle: string;
  content: string;
  image: StaticImageData;
};

const reviews1: ReviewCardProps[] = [
  {
    image: profilePicture,
    title: "Spencer Walkings",
    subtitle: "CEO, Telemondo Ltd",
    content:
      "Working with Abraham was a game-changer. They took our complex project and turned it into a seamless, high-performance web application. Their attention to detail and innovative approach are unmatched!",
  },
  {
    image: profilePicture,
    title: "Spencer Walkings",
    subtitle: "CEO, Telemondo Ltd",
    content:
      "Working with Abraham was a game-changer. They took our complex project and turned it into a seamless, high-performance web application. Their attention to detail and innovative approach are unmatched!",
  },

  {
    image: profilePicture,
    title: "Spencer Walkings",
    subtitle: "CEO, Telemondo Ltd",
    content:
      "Working with Abraham was a game-changer. They took our complex project and turned it into a seamless, high-performance web application. Their attention to detail and innovative approach are unmatched!",
  },

  {
    image: profilePicture,
    title: "Spencer Walkings",
    subtitle: "CEO, Telemondo Ltd",
    content:
      "Working with Abraham was a game-changer. They took our complex project and turned it into a seamless, high-performance web application. Their attention to detail and innovative approach are unmatched!",
  },
];

const reviews2: ReviewCardProps[] = [
  {
    image: profilePicture,
    title: "Spencer Walkings",
    subtitle: "CEO, Telemondo Ltd",
    content:
      "Working with Abraham was a game-changer. They took our complex project and turned it into a seamless, high-performance web application. Their attention to detail and innovative approach are unmatched!",
  },

  {
    image: profilePicture,
    title: "Spencer Walkings",
    subtitle: "CEO, Telemondo Ltd",
    content:
      "Working with Abraham was a game-changer. They took our complex project and turned it into a seamless, high-performance web application. Their attention to detail and innovative approach are unmatched!",
  },

  {
    image: profilePicture,
    title: "Spencer Walkings",
    subtitle: "CEO, Telemondo Ltd",
    content:
      "Working with Abraham was a game-changer. They took our complex project and turned it into a seamless, high-performance web application. Their attention to detail and innovative approach are unmatched!",
  },
  {
    image: profilePicture,
    title: "Spencer Walkings",
    subtitle: "CEO, Telemondo Ltd",
    content:
      "Working with Abraham was a game-changer. They took our complex project and turned it into a seamless, high-performance web application. Their attention to detail and innovative approach are unmatched!",
  },
];

const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  subtitle,
  content,
  image,
}) => {
  return (
    <div className="border border-[#BBCDE533] p-4 bg-[#03061B] rounded-xl">
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Image
            className="h-12 w-12 rounded-full object-cover"
            src={image}
            alt="profile picture"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-[#FEFEFF] font-bold">{title}</h3>
            <h3 className="text-[#AAAAAAA3]">{subtitle}</h3>
          </div>
        </div>

        <p className="text-[#AAAAAA] text-sm">{content}</p>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  const width = useWindowSize();

  return (
    <div className="w-full bg-[#000319] flex flex-col gap-4 py-10 pb-20">
      <div className="flex flex-col md:gap-1 text-center">
        <h3 className="text-base md:text-xl text-[#BBCDE5]">
          Don't take my word for it
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#BBCDE5] font-bold">
          Trust My Clients
        </h1>
      </div>

      <div className="mt-5 w-full">
        <div className="max-xs:hidden w-full overflow-hidden flex flex-col gap-6 xl:gap-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2.5}
            spaceBetween={width < 640 ? 12 : 15}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
              pauseOnMouseEnter: true,
            }}
            speed={8000}
            loop={true}
            breakpoints={{
              200: {
                slidesPerView: 1.0,
              },
              330: {
                slidesPerView: 1.1,
              },
              800: {
                slidesPerView: 1.3,
              },
              1000: {
                slidesPerView: 1.6,
              },
              1200: {
                slidesPerView: 1.9,
              },
              1300: {
                slidesPerView: 2.3,
              },
            }}
            className="w-full text-white !grid"
          >
            <div className="swiper-wrapper !grid grid-cols-1">
              {reviews1.map((item, index) => (
                <SwiperSlide className="!grid h-full" key={index}>
                  <ReviewCard {...item} />
                </SwiperSlide>
              ))}
            </div>
            {/* <SwiperNavButtons /> */}
          </Swiper>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2.5}
            spaceBetween={width < 640 ? 12 : 15}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: true,
            }}
            speed={8000}
            loop={true}
            breakpoints={{
              200: {
                slidesPerView: 1.0,
              },
              330: {
                slidesPerView: 1.1,
              },
              800: {
                slidesPerView: 1.3,
              },
              1000: {
                slidesPerView: 1.6,
              },
              1200: {
                slidesPerView: 1.9,
              },
              1300: {
                slidesPerView: 2.3,
              },
            }}
            className="w-full text-white !grid"
          >
            <div className="swiper-wrapper !grid grid-cols-1">
              {reviews2.map((item, index) => (
                <SwiperSlide className="!grid h-full" key={index}>
                  <ReviewCard {...item} />
                </SwiperSlide>
              ))}
            </div>
            {/* <SwiperNavButtons /> */}
          </Swiper>
        </div>

        <div className="xs:hidden w-full overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1.0}
            spaceBetween={width < 640 ? 12 : 15}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={8000}
            loop={true}
            breakpoints={{
              200: {
                slidesPerView: 1.0,
              },
              480: {
                slidesPerView: 1.1,
              },
              800: {
                slidesPerView: 1.3,
              },
              1000: {
                slidesPerView: 1.6,
              },
              1200: {
                slidesPerView: 1.9,
              },
              1300: {
                slidesPerView: 2.3,
              },
            }}
            className="w-full text-white"
          >
            <div className="swiper-wrapper !flex">
              {[...reviews1].map((item, index) => (
                <SwiperSlide key={index} className="!flex !h-auto">
                  <div className="flex-1 flex">
                    <div className="flex-1">
                      <ReviewCard {...item} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
