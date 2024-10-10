"use client";

import TranslationOutput from "@/modules/translation-output/_translation-output";
import UserInteraction from "@/modules/user-interaction/_user-interaction";

import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.main className="flex h-full w-full items-center justify-around">
      <UserInteraction />
    </motion.main>
  );
};

export default page;
