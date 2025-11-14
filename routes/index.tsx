import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';

function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Prime Number Generator</h1>
      <p className="text-lg mb-4">
        This application generates random numbers and checks if they are prime.
      </p>
      <p className="text-muted-foreground">
        Navigate to the <strong>/primes</strong> page to start generating and checking prime numbers.
      </p>
    </div>
  );
}

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});
