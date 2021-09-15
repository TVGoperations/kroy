import { Block } from "@sanity/types";

const strong = ({ children }) => <b className="t-faris">{children}</b>;
const em = ({ children }) => <em>{children}</em>;
const underline = ({ children }) => <u>{children}</u>;
const strikeThrough = ({ children }) => <s>{children}</s>;

const link = ({ mark, children }) => {
  const { href, slug, title } = mark;
  return (
    <a href={href} title={title ? title : ""} className="t-faris" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export const serializer = {
  types: {
    block: (props) => <p className="t-wremena t-light">{props.children}</p>,
  },
  marks: {
    link,
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
