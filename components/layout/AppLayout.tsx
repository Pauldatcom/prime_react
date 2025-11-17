import { ReactNode } from 'react';
import { AppSidebar } from './AppSidebar';
import { ThemeToggle } from '@/components/ThemeToggle';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-border bg-white dark:bg-card px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold tracking-tight text-foreground">Prime Number Generator</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-background p-6 lg:p-8 xl:p-10">
          <div className="mx-auto max-w-7xl space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

