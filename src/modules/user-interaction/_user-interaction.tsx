import { LangSelectionBtn } from "@/modules/user-interaction/ui/lang-selection-btn";
import { ProgressBar } from "@/modules/user-interaction/ui/progress-bar";
import { TextArea } from "@/modules/user-interaction/ui/text-area";
import { TranslationBtn } from "@/modules/user-interaction/ui/translation-btn";

import { useEffect, useState } from "react";

const UserInteraction = () => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (isMount) {
    return (
      <section className="flex h-full w-1/3 items-center justify-center">
        <div className="df-el flex h-fit w-full flex-col">
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
      </section>
    );
  }
};

export default UserInteraction;
