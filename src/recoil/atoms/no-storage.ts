import { atom } from "recoil";

export const inputValueRecoilState = atom({
  key: "inputValueRecoilKey",
  default: ""
});

export const startTranslationRecoilState = atom({
  key: "startTranslationRecoilKey",
  default: false
});
