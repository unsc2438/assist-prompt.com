import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorageAtom",
  storage: typeof window !== "undefined" ? window.localStorage : undefined
});

export const selectedLangRecoilState = atom({
  key: "selectedLangRecoilKey",
  default: {
    id: 0,
    name: "영어",
    code: "en"
  },
  effects_UNSTABLE: [persistAtom]
});
