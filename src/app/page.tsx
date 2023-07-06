'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Posts } from "../components/Posts";

const queryClient = new QueryClient()

export default function Web() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Example Page</h1>
      <Posts />
    </QueryClientProvider>
  );
}
