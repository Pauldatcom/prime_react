import { useQuery } from '@tanstack/react-query';
import { fetchNumberAlea } from '@/api/fetchApi';

export function usePrimeAlea() {
  const query = useQuery({
    queryKey: ['primeNumber'],
    queryFn: fetchNumberAlea,
    staleTime: 0,
  });

  return {
    number: query.data?.number ?? null,
    isLoading: query.isPending,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}

