"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionTemplate,
} from "framer-motion";

type Props = {
  end: number;
  duration?: number;
  prefix?: string;
};

export default function Counter({ end, duration = 1.8, prefix = "+" }: Props) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.floor(latest)
  );
  const display = useMotionTemplate`${prefix}${rounded}`;

  useEffect(() => {
    const controls = animate(motionValue, end, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [end, duration, motionValue]);

  return <motion.span>{display}</motion.span>;
}
