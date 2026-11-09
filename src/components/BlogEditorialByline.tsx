import { Link } from "react-router-dom";
import { editorialMeta } from "@/data/editorialMeta";
import { formatBlogDate, getBlogDateModified, getBlogUpdateNote } from "@/utils/blogEat";
import type { BlogPost } from "@/data/blogPosts";

type Props = { post: BlogPost };

export const BlogEditorialByline = ({ post }: Props) => {
  const published = formatBlogDate(post.date);
  const updated = formatBlogDate(getBlogDateModified(post));
  const showUpdated = getBlogDateModified(post) !== post.date;

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="flex gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            aria-hidden
          >
            {editorialMeta.teamInitials}
          </div>
          <div className="min-w-0 space-y-1">
            <p className="font-semibold leading-snug">
              <Link to="/about/" className="hover:text-primary hover:underline">
                {editorialMeta.teamName}
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              Published {published}
              {showUpdated ? ` · Updated ${updated}` : ""}
            </p>
            <p className="text-sm text-muted-foreground">{editorialMeta.teamRole}</p>
            <p className="pt-2 text-sm leading-relaxed text-muted-foreground">{editorialMeta.teamBio}</p>
          </div>
        </div>
      </div>
      {showUpdated && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-relaxed text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100">
          {getBlogUpdateNote(post)}
        </p>
      )}
    </div>
  );
};
