type addparam = number | null;

export function add(a: addparam, b: addparam): addparam {
  if (a === null || b === null) {
    return null;
  }

  return a + b;
}
