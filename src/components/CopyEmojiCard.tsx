import { useState } from "react";
import { Copy, Check, MousePointer2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CopyEmojiCardProps {
  unicode: string;
  name: string;
}

export const CopyEmojiCard = ({ unicode, name }: CopyEmojiCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const copyEmoji = () => {
    navigator.clipboard.writeText(unicode);
    setCopied(true);
    toast({ 
      title: "Copied!", 
      description: `${unicode} ${name} copied to clipboard` 
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8">
      <div 
        onClick={copyEmoji}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`
          group relative overflow-hidden cursor-pointer
          p-6 rounded-2xl border-2 transition-all duration-300
          ${copied 
            ? 'bg-green-50 border-green-300 dark:bg-green-950/30 dark:border-green-700' 
            : 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10'
          }
        `}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-8 -top-8 text-[120px] emoji opacity-20 blur-sm select-none">
            {unicode}
          </div>
        </div>

        <div className="relative flex items-center justify-between gap-4">
          {/* Emoji display */}
          <div className="flex items-center gap-4">
            <div className={`
              relative p-4 rounded-xl bg-background shadow-sm border border-border
              transition-transform duration-300
              ${isHovering && !copied ? 'scale-110' : 'scale-100'}
            `}>
              <span className="emoji text-5xl block">{unicode}</span>
              {isHovering && !copied && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-xl animate-fade-in">
                  <MousePointer2 className="w-6 h-6 text-primary animate-pulse" />
                </div>
              )}
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Click to copy</p>
              <p className="font-semibold text-lg">{name}</p>
            </div>
          </div>

          {/* Copy button */}
          <button 
            className={`
              flex items-center gap-2 px-5 py-3 rounded-xl font-medium
              transition-all duration-300 shadow-sm
              ${copied 
                ? 'bg-green-500 text-white' 
                : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105'
              }
            `}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Keyboard shortcut hint */}
        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
          <span>Tap anywhere to copy</span>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 rounded bg-muted font-mono text-xs">Click</kbd>
            <span>or tap the emoji</span>
          </div>
        </div>
      </div>
    </div>
  );
};
