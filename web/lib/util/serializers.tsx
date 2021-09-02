import { Block } from "@sanity/types";

const strong = ({ children }) => <b>{children}</b>;
const em = ({ children }) => <em>{children}</em>;
const underline = ({ children }) => <u>{children}</u>;
const strikeThrough = ({ children }) => <s>{children}</s>;

export const serializer = {
  types: {
    block: (props) => <p>{props.children}</p>,
  },
  marks: {
    strong,
    em,
    underline,
    "strike-through": strikeThrough,
  },
};

export const plainTextSerializer = (blocks: Array<Block> = []) => {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
};
