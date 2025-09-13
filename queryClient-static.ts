// Static version of queryClient for GitHub Pages deployment
// Since we don't have a backend API on GitHub Pages, we'll disable API calls

import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable automatic refetching since we don't have a backend
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});