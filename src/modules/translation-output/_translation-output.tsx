"use client";

import { startTranslationRecoilState } from "@/recoil/atoms/no-storage";

import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";

const TranslationOutput = () => {
  const startTranslation = useRecoilValue(startTranslationRecoilState);

  if (startTranslation) {
    return (
      <motion.section
        initial={{ x: "75%", opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex h-full w-1/3 items-center justify-center border-[1px]"
      >
        TRANSLATION OUTPUT
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ x: "75%", opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: startTranslation ? 0.5 : 0 }}
      className="relative -z-10 flex h-full w-1/3 items-center justify-center border-[1px]"
    >
      TRANSLATION OUTPUT
    </motion.section>
  );
};

export default TranslationOutput;
