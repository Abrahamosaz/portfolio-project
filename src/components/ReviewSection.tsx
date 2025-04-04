"use client";

import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { profilePicture } from "@/public/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useWindowSize } from "../hooks/useWindowSize";
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
    title: "Sarah Chen",
    subtitle: "CTO, TechFlow Solutions",
    content:
      "Abraham's expertise in React and Next.js transformed our legacy application completely. Their implementation of modern practices and performance optimizations reduced our load times by 60%. What impressed me most was their ability to explain complex technical decisions in a way our entire team could understand.",
  },
  {
    image: profilePicture,
    title: "Michael Rodriguez",
    subtitle: "Founder, DesignCraft Studio",
    content:
      "I hired Abraham to build our company's e-commerce platform, and the results exceeded our expectations. They not only delivered a beautiful, responsive design but also implemented complex features like real-time inventory tracking and seamless payment integration. Their attention to UX details made our conversion rate jump by 40%.",
  },
  {
    image: profilePicture,
    title: "Emily Watson",
    subtitle: "Product Manager, InnovateTech",
    content:
      "Working with Abraham was refreshing - they don't just code, they think strategically. When our project faced scaling challenges, they proposed and implemented elegant solutions using Next.js and TypeScript. Their code is clean, well-documented, and maintainable - exactly what we needed for our growing startup.",
  },
  {
    image: profilePicture,
    title: "David Park",
    subtitle: "Lead Developer, CloudScale Inc",
    content:
      "Abraham's full-stack expertise is remarkable. They rebuilt our dashboard using modern React patterns and implemented efficient API endpoints that significantly improved our data loading times. Their knowledge of both frontend and backend technologies made them an invaluable asset to our project.",
  },
];

const reviews2: ReviewCardProps[] = [
  {
    image: profilePicture,
    title: "Lisa Thompson",
    subtitle: "Marketing Director, GrowthBox",
    content:
      "Abraham has a rare combination of technical excellence and creative problem-solving. They developed our marketing automation dashboard with beautiful visualizations and intuitive controls. The attention to detail in animations and user interactions really sets their work apart.",
  },
  {
    image: profilePicture,
    title: "James Wilson",
    subtitle: "Startup Founder, EduTech Plus",
    content:
      "As a non-technical founder, I appreciated Abraham's ability to translate our vision into reality. They built our educational platform from scratch, implementing features like real-time collaboration and interactive lessons. Their technical choices have made it easy for us to scale and add new features.",
  },
  {
    image: profilePicture,
    title: "Rachel Martinez",
    subtitle: "UX Director, DesignFirst Agency",
    content:
      "Abraham stands out for their commitment to user experience. While developing our client portal, they suggested and implemented several UX improvements that we hadn't even considered. Their deep understanding of both design principles and technical implementation is truly valuable.",
  },
  {
    image: profilePicture,
    title: "Alex Kumar",
    subtitle: "Engineering Manager, DataFlow Systems",
    content:
      "We brought Abraham in for a critical project migration to Next.js, and they delivered exceptional results. Their expertise in performance optimization and state management helped us create a faster, more reliable application. They also mentored our junior developers, leaving a lasting positive impact on our team.",
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
    <div className="w-full bg-[#000319] flex flex-col gap-4 py-10 md:py-20">
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
