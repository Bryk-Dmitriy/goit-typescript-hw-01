function merge<A extends object, B extends object>(objA: A, objB: B) {
  return Object.assign(objA, objB);
}
