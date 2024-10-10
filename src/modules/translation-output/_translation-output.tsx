"use client";

import { InitialInteractionAnimation } from "@/modules/translation-output/ui/initial-interaction-animations";
import { TranslatedResult } from "@/modules/translation-output/ui/translated-result";
import { startTranslationRecoilState } from "@/recoil/atoms/no-storage";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const TranslationOutput = () => {
  const startTranslation = useRecoilValue(startTranslationRecoilState);
  const [initialInteraction, setInitialInteraction] = useState(false);

  useEffect(() => {
    if (startTranslation) {
      setInitialInteraction(true);
    }
  }, [startTranslation]);

  return (
    <InitialInteractionAnimation
      initialInteraction={initialInteraction}
      startTranslation={startTranslation}
    >
      <TranslatedResult />
    </InitialInteractionAnimation>
  );
};

export default TranslationOutput;
