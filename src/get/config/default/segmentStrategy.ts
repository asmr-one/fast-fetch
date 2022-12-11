type Range = [number, number]

export const KB = 1024
export const MB = 1024 * 1024

export function defaultSegmentSize (contentLength: number): number {
  if (contentLength <= 512 * KB) {
    return contentLength
  } else if (contentLength <= 8 * MB) {
    return Math.ceil(Math.max(512 * KB, (contentLength / 8)))
  } else if (contentLength <= 32 * MB) {
    return Math.ceil((contentLength / 16))
  } else {
    return 2 * MB
  }
}

export function getRange (start: number, length: number, contentLength: number): Range {
  const end = Math.min(start + length - 1, contentLength - 1)
  return [start, end]
}

export function defaultSegmentStrategy (contentLength: number): Range[] {
  const segmentSize = defaultSegmentSize(contentLength)
  const startRanges: Range[] = []
  for (
    let startRange = 0;
    startRange < contentLength;
    startRange += segmentSize
  ) {
    startRanges.push(getRange(startRange, segmentSize, contentLength))
  }
  return startRanges
}
