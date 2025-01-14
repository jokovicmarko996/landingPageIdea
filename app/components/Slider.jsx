"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";


const Slider = ({ items, width = 200, height = 200, reverse = false }) => {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        height: `${height}px`,
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex relative"
        style={{
          minWidth: `calc(${width}px * ${items.length})`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute left-full transition-all duration-500"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              animation: `${reverse ? "reversePlay" : "autoRun"} 10s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
              animationDelay: `calc((10s / ${items.length}) * ${index})`,
            }}
          >
            <Image src={item.src} alt={item.alt || `Slide ${index + 1}`} className="w-full h-full" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes autoRun {
          from {
            left: 100%;
          }
          to {
            left: calc(-1 * ${width}px);
          }
        }
        @keyframes reversePlay {
          from {
            left: calc(-1 * ${width}px);
          }
          to {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  reverse: PropTypes.bool,
};

export default Slider;

