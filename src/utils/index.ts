// @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastFunc: NodeJS.Timeout | null = null;
  let lastRan: number | null = null;

  return function (...args: Parameters<T>) {
    const now = Date.now();

    if (lastRan === null || now - lastRan >= limit) {
      func(...args);
      lastRan = now;
    } else {
      if (lastFunc) {
        clearTimeout(lastFunc);
      }

      lastFunc = setTimeout(() => {
        func(...args);
        lastRan = Date.now();
      }, limit - (now - lastRan));
    }
  };
}
