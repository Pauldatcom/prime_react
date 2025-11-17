import { createRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';
import { rootRoute } from './__root';
import { usePrimeAlea } from '@/hooks/usePrimeAlea';
import { usePrimeStore } from '@/stores/usePrimeStore';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { NumberDisplay } from '@/components/ui/number-display';
import { inputNumberSchema } from '@/schemas/numberSchema';
import { Calculator, RefreshCw, Loader2 } from 'lucide-react';

function Primes() {
  const { number, isLoading, isError, error, refetch } = usePrimeAlea();
  const { currentNumber, isPrime, setNumber } = usePrimeStore();
  const [inputValue, setInputValue] = useState('');
  const [inputNumber, setInputNumber] = useState<number | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (number !== null) {
      setNumber(number);
    }
  }, [number, setNumber]);

  const handleGenerate = () => refetch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setValidationError(null);
    
    if (value && value.trim() !== '') {
      const num = Number(value);
      if (isNaN(num)) {
        setValidationError('Please enter a valid number');
      } else if (num < 1) {
        setValidationError('Number must be at least 1');
      } else if (num > 10000) {
        setValidationError('Number must be at most 10,000');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationError(null);

    try {
      const parsed = inputNumberSchema.parse({ number: inputValue });
      setInputNumber(parsed.number);
      setNumber(parsed.number);
    } catch (err) {
      if (err && typeof err === 'object' && 'errors' in err) {
        const zodError = err as { errors: Array<{ message: string }> };
        setValidationError(zodError.errors[0]?.message || 'Invalid number format');
      } else {
        setValidationError('Invalid number format');
      }
    }
  };

  const inputIsPrime = useMemo(() => {
    if (inputNumber === null || inputNumber !== currentNumber) {
      return false;
    }
    return isPrime;
  }, [inputNumber, currentNumber, isPrime]);

  const cache = usePrimeStore((state) => state.cache);
  const cacheStatus = useMemo(() => {
    if (currentNumber === null) return null;
    return cache.has(currentNumber) ? 'Hit' : 'Miss';
  }, [currentNumber, cache]);

  const detailCardClass = "space-y-1.5 p-4 rounded-lg bg-muted/30 border border-border transition-colors hover:bg-muted/40";

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-foreground">Prime Number Verification</h1>
        <p className="text-sm text-muted-foreground">
          Generate random numbers or verify your own with advanced prime detection
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Random Generator</CardTitle>
            <CardDescription>
              Automatically generate and verify prime numbers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isError && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error?.message || 'Failed to fetch number'}</AlertDescription>
              </Alert>
            )}

            <NumberDisplay
              number={currentNumber}
              label="Generated Number"
              isPrime={isPrime}
              isLoading={isLoading}
            />

            <Button 
              onClick={handleGenerate} 
              disabled={isLoading} 
              className="w-full"
              aria-label="Generate new random number"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4" />
                  Generate New Number
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manual Verification</CardTitle>
            <CardDescription>
              Enter a number to check if it's prime
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Enter a number (1-10,000)"
                  value={inputValue}
                  onChange={handleInputChange}
                  min="1"
                  max="10000"
                  className="flex-1"
                  aria-label="Number to check for prime"
                  aria-invalid={!!validationError}
                  aria-describedby={validationError ? "validation-error" : undefined}
                />
                <Button 
                  type="submit"
                  disabled={!inputValue || !!validationError}
                  aria-label="Check if number is prime"
                >
                  <Calculator className="h-4 w-4" />
                  Check
                </Button>
              </div>

              {validationError && (
                <Alert 
                  variant="destructive"
                  id="validation-error"
                  role="alert"
                  className="animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <AlertTitle>Validation Error</AlertTitle>
                  <AlertDescription>{validationError}</AlertDescription>
                </Alert>
              )}

              {inputNumber !== null && !validationError && (
                <NumberDisplay
                  number={inputNumber}
                  label="Your Number"
                  isPrime={inputIsPrime}
                  isLoading={false}
                  className="animate-in fade-in slide-in-from-bottom-2 duration-300"
                />
              )}
            </form>
          </CardContent>
        </Card>
      </div>

      {currentNumber !== null && !isLoading && (
        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle>Verification Details</CardTitle>
            <CardDescription>Detailed information about the current number</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className={detailCardClass}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Number</p>
                <p className="text-2xl font-bold font-mono text-foreground">
                  {currentNumber.toLocaleString()}
                </p>
              </div>
              <div className={detailCardClass}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</p>
                <p className={`text-2xl font-bold transition-colors ${isPrime ? 'text-primary' : 'text-muted-foreground'}`}>
                  {isPrime ? 'Prime' : 'Composite'}
                </p>
              </div>
              <div className={detailCardClass}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Cache Status</p>
                <p className={`text-2xl font-bold transition-colors ${cacheStatus === 'Hit' ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'}`}>
                  {cacheStatus || '—'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export const primesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/primes',
  component: Primes,
});
