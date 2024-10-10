import TranslationOutput from "@/modules/main/translation-output/_translation-output";
import UserInteraction from "@/modules/main/user-interaction/_user-interaction";

const page = () => {
  return (
    <main className="flex h-full w-full items-center justify-around">
      <UserInteraction />
      <TranslationOutput />
    </main>
  );
};

export default page;
