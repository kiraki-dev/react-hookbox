export const assertDepsValidity: (deps: unknown) => asserts deps is unknown[] = (deps: unknown) => {
  if (deps === undefined) {
    throw new Error('useImmediateEffect: deps must be provided')
  }

  if (!Array.isArray(deps)) {
    throw new Error('useImmediateEffect: deps must be an array')
  }
};
