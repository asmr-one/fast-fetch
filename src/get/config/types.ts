export interface Logger {
  info: (message: string) => void
  error: (message: string) => void
  debug: (message: string) => void
  warning: (message: string) => void
}

type FetchParams = Parameters<typeof fetch>
export type FetchInput = FetchParams[0]
export type ChunkCallback = (chunk: Blob, range: [number, number], input: FetchInput) => void
export type SegmentStrategy = (contentLength: number) => Array<[number, number]>
export type SelectRangeStrategy = (downloaderCounter: Map<number, number>) => number
export type FinishCallback = () => void

export interface FastFetchGetConfig {
  mirrorURLs?: FetchInput[]
  maxRetries?: number
  retryDelay?: number
  logger?: Partial<Logger>
  chunkCallback?: ChunkCallback
  finishCallback?: FinishCallback
  segmentStrategy?: SegmentStrategy
  selectRangeStrategy?: SelectRangeStrategy
}
