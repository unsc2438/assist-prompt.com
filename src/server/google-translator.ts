"use server";

import { translate } from "google-translate-api-browser";

export type TranslationResult = {
  text: string;
  pronunciation: string;
  from: {
    language: {
      didYouMean: boolean;
      iso: string;
    };
    text: {
      autoCorrected: boolean;
      value: string;
      didYouMean: string;
    };
  };

  // eslint-disable-next-line
  raw?: any;
};

type LangCode = "ko" | "en";

export const GOOGLE_TRANSLATOR = async (inputValue: string, langCode: LangCode) => {
  if (inputValue && langCode) {
    return await translate(inputValue, { to: langCode });
  }
};