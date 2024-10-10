import TranslationOutput from "@/modules/translation-output/_translation-output";
import UserInteraction from "@/modules/user-interaction/_user-interaction";

const page = () => {
  return (
    <main className="flex h-full w-full items-center justify-around">
      <UserInteraction />
      <TranslationOutput />
    </main>
  );
};

export default page;
