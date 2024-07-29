import { FDC3EventDetail } from "./types/FDC3Event";

export const guid = (): string => {
  const gen = (n?: number): string => {
    const rando = (): string => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    let r = "";
    let i = 0;
    n = n ? n : 1;
    while (i < n) {
      r += rando();
      i++;
    }
    return r;
  };

  return `${gen(2)}-${gen()}-${gen()}-${gen()}-${gen(3)}`;
};

/**
 * generates a CustomEvent for FDC3 eventing in the DOM
 * @param type
 * @param detail
 */
export const fdc3Event = (
  type: string,
  detail: FDC3EventDetail
): CustomEvent => {
  return new CustomEvent(`FDC3:${type}`, { detail });
};
