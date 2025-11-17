import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="hover:bg-accent/50 transition-all duration-200"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-200 hover:rotate-12" />
      )}
    </Button>
  );
}

