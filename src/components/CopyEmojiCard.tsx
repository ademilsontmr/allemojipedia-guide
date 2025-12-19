import { useState } from "react";
import { Copy, Check, Smartphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CopyEmojiCardProps {
  unicode: string;
  name: string;
}

export const CopyEmojiCard = ({ unicode, name }: CopyEmojiCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const copyEmoji = () => {
    navigator.clipboard.writeText(unicode);
    setCopied(true);
    
    // Haptic feedback on mobile if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    toast({ 
      title: "Copied! ✓", 
      description: `${unicode} ready to paste` 
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8">
      <div 
        onClick={copyEmoji}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        className={`
          group relative overflow-hidden cursor-pointer select-none
          rounded-2xl border-2 transition-all duration-200 active:scale-[0.98]
          ${copied 
            ? 'bg-green-50 border-green-400 dark:bg-green-950/30 dark:border-green-600' 
            : 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40'
          }
          ${isPressed && !copied ? 'scale-[0.98] border-primary/50' : ''}
        `}
      >
        {/* Main content - stacked on mobile, side by side on desktop */}
        <div className="relative p-4 sm:p-6">
          {/* Mobile: Centered vertical layout */}
          <div className="flex flex-col items-center text-center sm:hidden">
            {/* Big emoji for easy tapping */}
            <div className={`
              relative p-5 mb-4 rounded-2xl bg-background shadow-md border-2 
              transition-all duration-200
              ${copied ? 'border-green-400 bg-green-50 dark:bg-green-950/20' : 'border-border'}
              ${isPressed && !copied ? 'scale-95 shadow-sm' : 'shadow-md'}
            `}>
              <span className="emoji text-6xl block">{unicode}</span>
              {copied && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                  <Check className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            
            <p className="font-semibold text-lg mb-1">{name}</p>
            <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4" />
              Tap to copy
            </p>

            {/* Full width button on mobile */}
            <button 
              className={`
                w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base
                transition-all duration-200 shadow-sm
                ${copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-primary text-primary-foreground active:bg-primary/80'
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
                  <span>Copy Emoji</span>
                </>
              )}
            </button>
          </div>

          {/* Desktop: Horizontal layout */}
          <div className="hidden sm:flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`
                relative p-4 rounded-xl bg-background shadow-sm border border-border
                transition-transform duration-200
                ${isPressed && !copied ? 'scale-95' : 'scale-100'}
              `}>
                <span className="emoji text-5xl block">{unicode}</span>
                {copied && (
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center animate-scale-in">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Click to copy</p>
                <p className="font-semibold text-lg">{name}</p>
              </div>
            </div>

            <button 
              className={`
                flex items-center gap-2 px-5 py-3 rounded-xl font-medium
                transition-all duration-200 shadow-sm
                ${copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
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
        </div>

        {/* Success animation overlay */}
        {copied && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-green-500/5 animate-fade-in" />
          </div>
        )}
      </div>
    </div>
  );
};
