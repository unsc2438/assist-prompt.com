"use client";

import { inputValueRecoilState } from "@/recoil/atoms/no-storage";
import { cn } from "@/shadcn/lib/utils";

import TextareaAutosize from "react-textarea-autosize";
import { useRecoilState } from "recoil";

export const TextArea = () => {
  const [inputValue, setInputValue] = useRecoilState(inputValueRecoilState);

  return (
    <TextareaAutosize
      autoFocus
      placeholder="번역할 텍스트를 입력하세요."
      maxLength={1000}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className={cn(
        "w-full resize-none bg-transparent outline-none placeholder:text-black/30",
        inputValue.length === 0 && "h-[24px]",
        inputValue.length >= 500 && "text-sm"
      )}
    />
  );
};
