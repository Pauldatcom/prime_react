import { createRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';
import { rootRoute } from './__root';
import { usePrimeAlea } from '@/hooks/usePrimeAlea';
import { usePrimeStore } from '@/stores/usePrimeStore';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { inputNumberSchema } from '@/schemas/numberSchema';

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

  const statusMessage = useMemo(() => {
    if (currentNumber === null) return null;
    return isPrime ? 'Prime number' : 'Not a prime number';
  }, [currentNumber, isPrime]);

  const handleGenerate = () => {
    refetch();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setValidationError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationError(null);

    try {
      const parsed = inputNumberSchema.parse({ number: inputValue });
      setInputNumber(parsed.number);
      setNumber(parsed.number);
    } catch (err: any) {
      if (err.errors) {
        setValidationError(err.errors[0].message);
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Prime Numbers</h1>

      <Card>
        <CardHeader>
          <CardTitle>Number Generator</CardTitle>
          <CardDescription>
            Generate a random number and check if it's prime
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoading && (
            <div className="text-muted-foreground">Loading...</div>
          )}

          {isError && (
            <div className="text-destructive">
              Error: {error?.message || 'Failed to fetch number'}
            </div>
          )}

          {!isLoading && !isError && currentNumber !== null && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold">Number:</span>
                <span className="text-3xl font-mono">{currentNumber}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-lg">Status:</span>
                <Badge variant={isPrime ? 'default' : 'secondary'}>
                  {statusMessage}
                </Badge>
              </div>
            </div>
          )}

          <Button onClick={handleGenerate} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Generate New Number'}
          </Button>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Check Your Number</CardTitle>
          <CardDescription>
            Enter a number to check if it's prime
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Enter a number (1-10000)"
                value={inputValue}
                onChange={handleInputChange}
                min="1"
                max="10000"
              />
              <Button type="submit">Check</Button>
            </div>

            {validationError && (
              <Alert variant="destructive">
                <AlertTitle>Validation Error</AlertTitle>
                <AlertDescription>{validationError}</AlertDescription>
              </Alert>
            )}

            {inputNumber !== null && !validationError && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">Number:</span>
                  <span className="text-3xl font-mono">{inputNumber}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-lg">Status:</span>
                  <Badge variant={inputIsPrime ? 'default' : 'secondary'}>
                    {inputIsPrime ? 'Prime number' : 'Not a prime number'}
                  </Badge>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export const primesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/primes',
  component: Primes,
});
