import { useState, useEffect } from "react";
import { Copy, Check, Smartphone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CopyEmojiCardProps {
  unicode: string;
  name: string;
}

export const CopyEmojiCard = ({ unicode, name }: CopyEmojiCardProps) => {
  const [copied, setCopied] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [unicode]);

  const copyEmoji = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    navigator.clipboard.writeText(unicode);
    setCopied(true);
    
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    toast({ 
      title: "Copied! ✓", 
      description: `${unicode} ready to paste` 
    });
  };

  return (
    <div className="mb-8 min-h-[140px] sm:min-h-[100px]">
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
        <div className="relative p-4 sm:p-6">
          {/* Mobile */}
          <div className="flex flex-col items-center text-center sm:hidden">
            <div className={`
              relative p-5 mb-4 rounded-2xl bg-background shadow-md border-2 
              transition-all duration-200 w-[100px] h-[100px] flex items-center justify-center
              ${copied ? 'border-green-400 bg-green-50 dark:bg-green-950/20' : 'border-border'}
              ${isPressed && !copied ? 'scale-95 shadow-sm' : 'shadow-md'}
            `}>
              <span className="emoji text-6xl">{unicode}</span>
              {copied && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            
            <p className="font-semibold text-lg mb-1">{name}</p>
            <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4" />
              Tap to copy
            </p>

            <button 
              onClick={copyEmoji}
              className={`
                w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base
                transition-all duration-200 shadow-sm h-[56px]
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

          {/* Desktop */}
          <div className="hidden sm:flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`
                relative p-4 rounded-xl bg-background shadow-sm border border-border
                transition-transform duration-200 w-[80px] h-[80px] flex items-center justify-center
                ${isPressed && !copied ? 'scale-95' : 'scale-100'}
              `}>
                <span className="emoji text-5xl">{unicode}</span>
                {copied && (
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
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
              onClick={copyEmoji}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-xl font-medium
                transition-all duration-200 shadow-sm h-[48px]
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

        {copied && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-green-500/5" />
          </div>
        )}
      </div>
    </div>
  );
};
