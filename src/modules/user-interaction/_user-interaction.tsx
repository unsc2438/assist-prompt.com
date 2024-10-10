"use client";

import { LangSelectionBtn } from "@/modules/user-interaction/ui/lang-selection-btn";
import { ProgressBar } from "@/modules/user-interaction/ui/progress-bar";
import { TextArea } from "@/modules/user-interaction/ui/text-area";
import { TranslationBtn } from "@/modules/user-interaction/ui/translation-btn";
import {
  dropdownOpenedRecoilState,
  startTranslationRecoilState
} from "@/recoil/atoms/no-storage";
import { cn } from "@/shadcn/lib/utils";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const UserInteraction = () => {
  const startTranslation = useRecoilValue(startTranslationRecoilState);
  const dropdownOpened = useRecoilValue(dropdownOpenedRecoilState);

  const [isMount, setIsMount] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    setActive(!active);

    // eslint-disable-next-line
  }, [dropdownOpened]);

  if (isMount) {
    return (
      <motion.section
        animate={startTranslation ? { left: "5%" } : { x: "0%" }}
        transition={{
          ease: [0.42, 0, 0.3, 1],
          duration: 1
        }}
        className="absolute flex h-full w-2/5 items-center justify-center"
      >
        <div
          className={cn(
            "df-el flex h-fit w-full flex-col",
            active ? "!border-black/50 !shadow-xl" : "!shadow-lg"
          )}
        >
          <TextArea />
          <hr className="my-4 border-[0.5px] border-black/20" />
          <div className="flex items-center justify-between gap-8">
            <ProgressBar />
            <div className="flex min-w-fit items-center gap-2">
              <LangSelectionBtn />
              <TranslationBtn />
            </div>
          </div>
        </div>
      </motion.section>
    );
  }
};

export default UserInteraction;
