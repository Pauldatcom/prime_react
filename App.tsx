import { createRouter, RouterProvider } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { routeTree } from './routeTree.gen';

const router = createRouter({
  routeTree,
  context: {
    queryClient: undefined!,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

interface AppProps {
  queryClient: QueryClient;
}

export default function App({ queryClient }: AppProps) {
  return (
    <RouterProvider 
      router={router} 
      context={{ queryClient }}
    />
  );
}
