"use client";

import { selectedLangRecoilState } from "@/recoil/atoms/local-storage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/shadcn/components/dropdown-menu";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useRecoilState } from "recoil";

const langList = [
  { id: 0, name: "영어", code: "en" },
  { id: 1, name: "한국어", code: "ko" }
];

export const LangSelectionBtn = () => {
  const [selectedLang, setSelectedLang] = useRecoilState(selectedLangRecoilState);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="df-el relative flex !min-w-[110px] items-center justify-center gap-2 !bg-white/20 !px-3 !py-[6px]">
          {selectedLang.name}로 <ChevronDownIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit border-[0.5px] border-black/20 bg-white/40">
        {langList.map((lang) => {
          return (
            <DropdownMenuItem
              key={lang.id}
              className="hover:bg-white/60"
              onClick={(e) => {
                if ((e.target as HTMLElement).innerHTML === lang.name) {
                  setSelectedLang(lang);
                }
              }}
            >
              {lang.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
