"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  "/hero/slide1.png",
  "/hero/slide2.jpeg",
  "/hero/slide3.jpeg",
  "/hero/slide4.jpeg"
];

export default function HeroRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative 
        h-[60vh] 
        sm:h-[65vh] 
        md:h-[80vh] 
        lg:h-[85vh] 
        w-full 
        rounded-2xl 
        overflow-hidden 
        mt-8 
        shadow-soft
      "
    >
      {/* Imagen animada */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index]}
          src={slides[index]}
          alt="Hero background"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Texto */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center px-6">
        <motion.h1
          key={index + '-title'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
          className="
            text-white 
            text-3xl
            sm:text-4xl 
            md:text-6xl 
            font-bold 
            drop-shadow-lg
          "
        >
          Human Flow Digital Growth
        </motion.h1>

        <motion.p
          key={index + '-subtitle'}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.5,
          }}
          className="
            text-brand-orange 
            text-base 
            sm:text-lg 
            md:text-2xl 
            mt-4 
            font-semibold 
            drop-shadow
          "
        >
          
        </motion.p>
      </div>
    </section>
  );
}
