interface sumParams {
  a: number;
  b: number;
}

function sum(x:sumParams): number {
  return x.a + x.b;
}
