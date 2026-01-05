import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}

const BlogPagination = ({ currentPage, totalPages, totalPosts, postsPerPage }: BlogPaginationProps) => {
  const formatPageNumber = (num: number) => num.toString().padStart(2, "0");
  
  const getPageUrl = (page: number) => 
    page === 1 ? "/blog" : `/blog/page/${formatPageNumber(page)}`;

  // Calculate visible page numbers with ellipsis
  const getVisiblePages = () => {
    const pages: (number | "ellipsis")[] = [];
    
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    // Always show first page
    pages.push(1);
    
    if (currentPage > 3) {
      pages.push("ellipsis");
    }
    
    // Pages around current
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    
    for (let i = start; i <= end; i++) {
      if (!pages.includes(i)) pages.push(i);
    }
    
    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }
    
    // Always show last page
    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  const startPost = (currentPage - 1) * postsPerPage + 1;
  const endPost = Math.min(currentPage * postsPerPage, totalPosts);

  return (
    <div className="mt-12 space-y-4">
      {/* Info bar */}
      <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-6">
        <span>
          Showing <span className="font-medium text-foreground">{startPost}-{endPost}</span> of{" "}
          <span className="font-medium text-foreground">{totalPosts}</span> articles
        </span>
        <span>
          Page <span className="font-medium text-foreground">{currentPage}</span> of{" "}
          <span className="font-medium text-foreground">{totalPages}</span>
        </span>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        {/* Previous button */}
        <Link
          to={currentPage > 1 ? getPageUrl(currentPage - 1) : "#"}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === 1
              ? "pointer-events-none opacity-50 bg-muted text-muted-foreground"
              : "border border-border hover:bg-accent hover:border-primary/50"
          }`}
          aria-disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </Link>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {getVisiblePages().map((page, index) =>
            page === "ellipsis" ? (
              <span
                key={`ellipsis-${index}`}
                className="px-2 py-2 text-muted-foreground"
              >
                <MoreHorizontal className="h-4 w-4" />
              </span>
            ) : (
              <Link
                key={page}
                to={getPageUrl(page)}
                className={`min-w-[40px] px-3 py-2 rounded-lg text-sm font-medium text-center transition-all ${
                  page === currentPage
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border hover:bg-accent hover:border-primary/50"
                }`}
              >
                {page}
              </Link>
            )
          )}
        </div>

        {/* Next button */}
        <Link
          to={currentPage < totalPages ? getPageUrl(currentPage + 1) : "#"}
          className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentPage === totalPages
              ? "pointer-events-none opacity-50 bg-muted text-muted-foreground"
              : "border border-border hover:bg-accent hover:border-primary/50"
          }`}
          aria-disabled={currentPage === totalPages}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Quick jump (for many pages) */}
      {totalPages > 5 && (
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-muted-foreground">Jump to:</span>
          <div className="flex gap-1">
            {currentPage > 1 && (
              <Link
                to="/blog"
                className="px-2 py-1 rounded text-xs hover:bg-accent transition-colors"
              >
                First
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                to={getPageUrl(totalPages)}
                className="px-2 py-1 rounded text-xs hover:bg-accent transition-colors"
              >
                Last
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPagination;
