import React from "react";
import { AnimatePresence, m } from "framer-motion";

const variants = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.25, type: "tween" },
    },
  },
};

const PreviewAlert: React.FC = () => {
  const [ready, setReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
      clearTimeout(t);
    }, 500);
  }, []);

  return (
    <AnimatePresence>
      {ready && (
        <m.a
          href="/api/exit-preview"
          className={"preview-alert"}
          variants={variants}
          animate={ready ? "active" : "inactive"}
        >
          <span>PREVIEW MODE: CLICK TO EXIT</span>
        </m.a>
      )}
    </AnimatePresence>
  );
};

export default PreviewAlert;
