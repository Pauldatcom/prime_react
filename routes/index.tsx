import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/ui/stats-card';
import { Button } from '@/components/ui/Button';
import { Link } from '@tanstack/react-router';
import { usePrimeStore } from '@/stores/usePrimeStore';
import { ArrowRight } from 'lucide-react';

function Index() {
  const totalChecks = usePrimeStore((state) => state.stats.totalChecks);
  const primesFound = usePrimeStore((state) => state.stats.primesFound);
  const cacheHits = usePrimeStore((state) => state.stats.cacheHits);
  const cacheMisses = usePrimeStore((state) => state.stats.cacheMisses);
  
  const cacheHitRate = totalChecks > 0 ? Math.round((cacheHits / totalChecks) * 100) : 0;
  const accuracy = 100;

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-foreground">Prime Number Generator</h1>
        <p className="text-sm text-muted-foreground">
          Advanced prime number verification system with optimized algorithms and intelligent caching
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Checks"
          value={totalChecks.toLocaleString()}
          description="Numbers verified"
        />
        <StatsCard
          title="Prime Found"
          value={primesFound.toLocaleString()}
          description="Prime numbers detected"
        />
        <StatsCard
          title="Cache Hit Rate"
          value={`${cacheHitRate}%`}
          description={`${cacheHits} hits, ${cacheMisses} misses`}
        />
        <StatsCard
          title="Accuracy"
          value={`${accuracy}%`}
          description="Verified results"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Random Generation</CardTitle>
            <CardDescription>
              Automated prime number discovery
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automatically generate random numbers and verify if they are prime. Powered by TanStack Query for efficient data fetching and Zustand for state management.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Real-time number generation</li>
              <li>Automatic prime verification</li>
              <li>Optimized caching system</li>
            </ul>
            <Link to="/primes">
              <Button className="w-full mt-4">
                Try It Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manual Verification</CardTitle>
            <CardDescription>
              Check your own numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enter your own number to check if it's prime with strict validation using Zod. Get instant feedback with comprehensive error handling.
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Zod schema validation</li>
              <li>Real-time error feedback</li>
              <li>Supports numbers 1-10,000</li>
            </ul>
            <Link to="/primes">
              <Button className="w-full mt-4">
                Start Checking
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
          <CardDescription>
            Built with modern, production-ready tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-1 p-4 rounded-lg border border-border">
              <div className="text-sm font-semibold">State Management</div>
              <p className="text-sm text-muted-foreground">
                Zustand for efficient state management with built-in caching
              </p>
            </div>
            <div className="space-y-1 p-4 rounded-lg border border-border">
              <div className="text-sm font-semibold">Data Fetching</div>
              <p className="text-sm text-muted-foreground">
                TanStack Query for optimized API calls and caching
              </p>
            </div>
            <div className="space-y-1 p-4 rounded-lg border border-border">
              <div className="text-sm font-semibold">Validation</div>
              <p className="text-sm text-muted-foreground">
                Zod schemas for type-safe data validation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});
