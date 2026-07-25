import { configureApiClient } from "@repo/api-client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

import { axiosInstance } from "#src/lib/http-client";

export default function RootLayout() {
  configureApiClient(axiosInstance);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
