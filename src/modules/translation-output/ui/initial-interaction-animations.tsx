import { motion } from "framer-motion";
import { ReactNode } from "react";

export const InitialInteractionAnimation = ({
  children,
  initialInteraction,
  startTranslation
}: {
  children: ReactNode;
  initialInteraction: boolean;
  startTranslation: boolean;
}) => {
  if (initialInteraction) {
    return (
      <motion.section
        initial={{ right: "5%", opacity: startTranslation ? 0 : 1 }}
        animate={{ opacity: startTranslation ? 1 : 0 }}
        transition={{
          duration: startTranslation ? 0.5 : 0.3,
          delay: startTranslation ? 0.5 : 0
        }}
        className="absolute -z-10 flex h-full w-2/5 items-center justify-center border-[1px]"
      >
        {children}
      </motion.section>
    );
  }
};
