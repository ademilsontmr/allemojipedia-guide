import { Fragment } from "react";
import { Link } from "react-router-dom";
import { splitInlineLinks } from "@/utils/inlineMarkdown";

export const InlineMarkdown = ({ text }: { text: string }) => (
  <>
    {splitInlineLinks(text).map((segment, i) =>
      segment.href ? (
        <Link key={i} to={segment.href} className="text-primary hover:underline">
          {segment.text}
        </Link>
      ) : (
        <Fragment key={i}>{segment.text}</Fragment>
      )
    )}
  </>
);
