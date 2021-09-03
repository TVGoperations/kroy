import { forwardRef, RefObject } from "react";
import PortableText from "@sanity/block-content-to-react";

import type { Block } from "@sanity/types";

interface Props {
  content: Array<Block>;
  serializer: any;
  className?: string;
}

const BlockContent = forwardRef(
  ({ content = [], serializer, className = "bc" }: Props, ref: RefObject<HTMLDivElement>) => {
    return (
      <PortableText
        ref={ref}
        renderContainerOnSingleChild
        className={className}
        blocks={content}
        serializers={serializer}
      />
    );
  }
);

export default BlockContent;
