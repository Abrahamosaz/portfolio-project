"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  git,
  js,
  npm,
  react,
  vscode,
  springboot,
  nestjs,
  nextjs,
  kafka,
  grpc,
} from "@/public/icons";

const MyStacksSection = () => {
  const [stars, setStars] = useState<any[]>([]);
  const [iconPositions, setIconPositions] = useState<any>({});
  const [dimensions, setDimensions] = useState({
    width: 800,
    height: 800,
    centerX: 400,
    centerY: 400,
  });

  // Add resize handler
  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(800, window.innerWidth - 32); // -32 for padding
      const height = width;
      setDimensions({
        width,
        height,
        centerX: width / 2,
        centerY: height / 2,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update stars effect to use dimensions
  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 50; i++) {
      newStars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
      });
    }
    setStars(newStars);
  }, [dimensions]);

  // Update icon animation effect
  useEffect(() => {
    const orbitIcons = [
      {
        id: "js",
        orbit: 2,
        initialAngle: 230,
        color: "text-yellow-300",
        bg: "bg-gray-800",
        icon: js,
      },
      {
        id: "git",
        orbit: 2,
        initialAngle: 100,
        color: "text-white",
        bg: "bg-gray-800",
        icon: git,
      },
      {
        id: "react",
        orbit: 4,
        initialAngle: 180,
        color: "text-blue-400",
        bg: "bg-gray-800",
        icon: react,
      },
      {
        id: "npm",
        orbit: 3,
        initialAngle: 250,
        color: "text-blue-400",
        bg: "bg-gray-800",
        icon: npm,
      },
      {
        id: "vscode",
        orbit: 4,
        initialAngle: 270,
        color: "text-blue-400",
        bg: "bg-gray-800",
        icon: vscode,
      },
      {
        id: "springboot",
        orbit: 3,
        initialAngle: 45,
        color: "text-green-500",
        bg: "bg-gray-800",
        icon: springboot,
      },
      {
        id: "nestjs",
        orbit: 2,
        initialAngle: 160,
        color: "text-red-500",
        bg: "bg-gray-800",
        icon: nestjs,
      },
      // {
      //   id: "nextjs",
      //   orbit: 4,
      //   initialAngle: 320,
      //   color: "text-white",
      //   bg: "bg-gray-800",
      //   icon: nextjs,
      // },
      {
        id: "kafka",
        orbit: 3,
        initialAngle: 200,
        color: "text-gray-200",
        bg: "bg-gray-800",
        icon: kafka,
      },
      // {
      //   id: "grpc",
      //   orbit: 2,
      //   initialAngle: 70,
      //   color: "text-blue-500",
      //   bg: "bg-gray-800",
      //   icon: grpc,
      // },
    ];

    const orbitRadii = [
      dimensions.width / 8,
      dimensions.width / 4,
      (dimensions.width * 3) / 8,
      dimensions.width / 2,
    ];
    const { centerX, centerY } = dimensions;

    // Initialize positions
    const initialPositions: any = {};
    orbitIcons.forEach((icon) => {
      const angle = icon.initialAngle * (Math.PI / 180);
      const radius = orbitRadii[icon.orbit - 1];
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      initialPositions[icon.id] = {
        left: x,
        top: y,
        angle: icon.initialAngle,
        orbit: icon.orbit,
        color: icon.color,
        bg: icon.bg,
        icon: icon.icon,
      };
    });

    setIconPositions(initialPositions);

    // Animation loop
    let animationFrameId: any;
    const animate = () => {
      setIconPositions((prevPositions: any) => {
        const newPositions: any = { ...prevPositions };

        Object.keys(newPositions).forEach((id) => {
          const icon = newPositions[id];
          const orbit = icon.orbit;
          let angle = icon.angle;
          const radius = orbitRadii[orbit - 1];
          const speed = 0.2 / orbit;

          // Update angle
          angle = (angle + speed) % 360;

          // Calculate new position
          const radians = angle * (Math.PI / 180);
          const x = centerX + radius * Math.cos(radians);
          const y = centerY + radius * Math.sin(radians);

          newPositions[id] = {
            ...icon,
            left: x,
            top: y,
            angle: angle,
          };
        });

        return newPositions;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <div className="bg-gradient-to-b from-[#00041E] via-[#00031D] to-[#00031C] w-full flex justify-center items-center p-4">
      {/* Wrapper for the half circle view */}
      <div className="relative w-full max-w-[800px] aspect-[8/5] overflow-visible">
        {/* Orbital container */}
        <div
          className="absolute w-full aspect-square overflow-visible"
          style={{
            bottom: `-${dimensions.height / 2}px`,
            left: "0",
          }}
        >
          {/* Orbits - responsive circles */}
          <div className="absolute top-1/2 left-1/2 w-1/4 aspect-square border-[1px] border-[#BBCDE55C] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-1/2 aspect-square border-[1px] border-[#BBCDE55C] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-3/4 aspect-square border-[1px] border-[#BBCDE55C] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-full aspect-square border-[1px] border-[#BBCDE55C] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          {/* Stars */}
          {/* {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white/70 rounded-full"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
              }}
            />
          ))} */}
          {/* Icons */}
          {Object.keys(iconPositions).map((id) => {
            const icon = iconPositions[id];
            return (
              <div
                key={id}
                className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center font-bold rounded-xl shadow-lg`}
                style={{
                  left: `${icon.left}px`,
                  top: `${icon.top}px`,
                }}
              >
                <Image
                  src={icon.icon}
                  alt={id}
                  width={24}
                  height={24}
                  className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 md:h-12 object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyStacksSection;
