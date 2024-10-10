"use client";

import { inputValueRecoilState } from "@/recoil/atoms/no-storage";
import { cn } from "@/shadcn/lib/utils";

import * as Progress from "@radix-ui/react-progress";
import { useRecoilValue } from "recoil";

export const ProgressBar = () => {
  const inputValue = useRecoilValue(inputValueRecoilState);
  const len = inputValue.length;

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <Progress.Root
        className="relative h-2 w-full overflow-hidden rounded-full"
        style={{
          transform: "translateZ(0)"
        }}
        value={len}
        max={1000}
      >
        <Progress.Indicator
          className={cn(
            "size-full rounded-full",
            len === 0 && "df-transparent",
            len < 10 && "bg-red",
            len >= 10 && len < 800 && "bg-green",
            len >= 800 && len < 1000 && "bg-yellow",
            len === 1000 && "bg-red"
          )}
          style={{ transform: `translateX(-${100 - len / 10}%)` }}
        />
      </Progress.Root>
      <div className="flex w-full items-center justify-between">
        <span className="text-xs">{len}</span>
        <span className="text-xs">1000</span>
      </div>
    </div>
  );
};
