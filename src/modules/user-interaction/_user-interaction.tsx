import { ProgressBar } from "@/modules/user-interaction/ui/progress-bar";
import { TextArea } from "@/modules/user-interaction/ui/text-area";

const UserInteraction = () => {
  return (
    <section className="flex h-full w-1/3 items-center justify-center border-[1px] border-blue-500">
      <div className="df-el flex h-fit w-full flex-col">
        <TextArea />
        <hr className="my-4 border-[0.5px] border-black/20" />
        <div className="flex justify-between">
          <ProgressBar />
        </div>
      </div>
    </section>
  );
};

export default UserInteraction;
