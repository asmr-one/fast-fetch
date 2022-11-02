import type { Logger } from "../logger";

type FetchParams = Parameters<typeof fetch>;
export type FetchInput = FetchParams[0];

type FastFetchGetConfig = {
  mirrorURLs?: FetchInput[];
  maxRetries?: number;
  retryDelay?: number;
  logger?: Logger;
};

type FastFetchInit = {
  fastFetch?: FastFetchGetConfig
};

export type GETInit = (FetchParams[1] & FastFetchInit) | undefined;
