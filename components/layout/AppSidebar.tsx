import { Link, useLocation } from '@tanstack/react-router';
import { Home, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Primes',
    url: '/primes',
    icon: Calculator,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-white dark:bg-card">
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold tracking-tight text-foreground">Prime Generator</h2>
            <p className="text-xs font-medium text-muted-foreground">v1.0.0</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.url;
          
          return (
            <Link
              key={item.url}
              to={item.url}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 relative",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <Icon className={cn(
                "h-4 w-4 transition-transform duration-200",
                isActive && "scale-105"
              )} />
              <span className="relative z-10">{item.title}</span>
              {isActive && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary-foreground/60" />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border p-4">
        <div className="rounded-lg bg-muted/50 dark:bg-muted/30 p-3 border border-border">
          <p className="font-semibold text-foreground mb-1 text-xs">System Status</p>
          <p className="text-muted-foreground font-medium text-xs">All systems operational</p>
        </div>
      </div>
    </div>
  );
}

