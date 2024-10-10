import TranslationOutput from "@/modules/translation-output/_translation-output";
import UserInteraction from "@/modules/user-interaction/_user-interaction";

const MainPage = () => {
  return (
    <main className="relative flex h-full w-full items-center justify-around">
      <UserInteraction />
      <TranslationOutput />
    </main>
  );
};

export default MainPage;
