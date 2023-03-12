interface sumParams {
  a: number;
  b: number;
}

export function sum(x:sumParams): number {
  return x.a + x.b;
}
