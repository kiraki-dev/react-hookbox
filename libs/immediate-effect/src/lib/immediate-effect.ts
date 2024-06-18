import { useRef, EffectCallback } from 'react';

import { assertDepsValidity } from './utils/assert-deps-validity';

export const useImmediateEffectDangerously = (
  effectCallback: EffectCallback,
  deps: unknown[]
): void => {
  assertDepsValidity(deps);

  const depsRef = useRef(deps);
  const destructureCallbackRef = useRef<ReturnType<EffectCallback>>();

  if (depsRef.current.length !== deps.length) {
    throw new Error(
      'useImmediateEffectDangerously: deps length must not change'
    );
  }

  if (depsRef.current.every((dep, index) => dep === deps[index])) {
    return;
  }

  depsRef.current = deps;

  destructureCallbackRef.current?.();
  const destructureCallback = effectCallback();
  destructureCallbackRef.current = destructureCallback;
};
