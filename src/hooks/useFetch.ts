import { useState, useEffect, useCallback } from "react";

type FetchFunction<T> = (...args: T[]) => Promise<T>;

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: (...args: T[]) => Promise<void>;
}

export const useFetch = <T>(
  fetchFunction: FetchFunction<T>,
  immediate = false
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (...args: T[]) => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFunction(...args);
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
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute };
};
