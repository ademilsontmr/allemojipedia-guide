import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "dark") {
      return <Moon className="h-5 w-5" />;
    }
    return <Sun className="h-5 w-5" />;
  };

  const getLabel = () => {
    if (theme === "light") return "Light";
    if (theme === "dark") return "Dark";
    return "Auto";
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {getIcon()}
      <span className="text-sm hidden sm:inline">{getLabel()}</span>
    </button>
  );
}
