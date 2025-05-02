import { useState, useEffect, useCallback } from "react";
type FetchFunction<P, R> = (args: P) => Promise<R>;
interface UseFetchResult<P, R> {
  data: R | null;
  loading: boolean;
  error: Error | null;
  execute: (args: P) => Promise<void>;
}
export const useFetch = <P, R = P>(
  fetchFunction: FetchFunction<P, R>,
  immediate = false
): UseFetchResult<P, R> => {
  const [data, setData] = useState<R | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (args: P) => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFunction(args);
        setData(result);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    },
    [fetchFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute({} as P); 
    }
  }, [execute, immediate]);

  return { data, loading, error, execute };
};