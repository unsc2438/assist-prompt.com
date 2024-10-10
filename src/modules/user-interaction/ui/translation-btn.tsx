"use client";

import {
  inputValueRecoilState,
  startTranslationRecoilState
} from "@/recoil/atoms/no-storage";
import { cn } from "@/shadcn/lib/utils";

import { useRecoilState, useRecoilValue } from "recoil";

export const TranslationBtn = () => {
  const [startTranslation, setStartTranslation] = useRecoilState(
    startTranslationRecoilState
  );
  const inputValue = useRecoilValue(inputValueRecoilState);

  return (
    <button
      onClick={() => {
        setStartTranslation(!startTranslation);
      }}
      className={cn(
        "df-el relative !min-w-[70px] !bg-white/20 !px-3 !py-[6px]",
        inputValue.length > 0 && inputValue.length < 10 && "!bg-red !text-white",
        inputValue.length >= 10 && "!bg-green"
      )}
    >
      {inputValue.length > 10 && startTranslation && startTranslation ? "취소" : "번역"}
    </button>
  );
};
