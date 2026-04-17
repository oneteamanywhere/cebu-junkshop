"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageWithTextProps {
  imageSrc: string;
  heading: string;
  description: string;
  buttonText: string;
  imageFirst?: boolean;
  padding?: string;
  variant?: "slide" | "zoom" | "fade";
}

export const ImageWithText = ({
  imageSrc,
  heading,
  description,
  buttonText,
  imageFirst = false,
  padding = "p-10",
  variant = "slide",
}: ImageWithTextProps) => {
  const animations = {
    slide: {
      container: { initial: { opacity: 0, y: 80 }, animate: { opacity: 1, y: 0 } },
      image: { initial: { opacity: 0, x: imageFirst ? -50 : 50 }, animate: { opacity: 1, x: 0 } },
      text: { initial: { opacity: 0, x: imageFirst ? 50 : -50 }, animate: { opacity: 1, x: 0 } },
    },
    zoom: {
      container: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
      image: { initial: { opacity: 0, scale: 1.2 }, animate: { opacity: 1, scale: 1 } },
      text: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    },
    fade: {
      container: { initial: { opacity: 0 }, animate: { opacity: 1 } },
      image: { initial: { opacity: 0 }, animate: { opacity: 1 } },
      text: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    },
  };

  const current = animations[variant];

  return (
    <motion.div
      initial={current.container.initial}
      whileInView={current.container.animate}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`flex gap-5 bg-slate-100 ${padding} ${
        imageFirst ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <motion.div
        initial={current.image.initial}
        whileInView={current.image.animate}
        transition={{ duration: 0.7 }}
        className={`w-1/2 ${
          padding !== "p-0" ? "overflow-hidden rounded-xl" : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt="image1"
          width={720}
          height={720}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={current.text.initial}
        whileInView={current.text.animate}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-1/2 flex flex-col gap-3 justify-end pb-2"
      >
        <h2 className="text-3xl font-semibold w-[90%]">{heading}</h2>

        <p className="text-sm w-[400px]">{description}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-4 py-2 rounded-full max-w-[160px]"
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};