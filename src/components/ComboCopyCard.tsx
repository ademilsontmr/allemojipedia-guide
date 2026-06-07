import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ComboCopyCardProps {
  unicode: string;
  label: string;
  description?: string;
}

export const ComboCopyCard = ({ unicode, label, description }: ComboCopyCardProps) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(unicode);
    setCopied(true);
    toast({ title: "Copied!", description: `${unicode} ready to paste` });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <button
            type="button"
            onClick={copy}
            className="emoji text-4xl mb-3 hover:scale-105 transition-transform cursor-copy"
            title="Click to copy combo"
          >
            {unicode}
          </button>
          <h3 className="font-semibold mb-1">{label}</h3>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        <button
          type="button"
          onClick={copy}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium shrink-0 ${
            copied ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};
