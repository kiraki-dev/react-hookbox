import { useRef, EffectCallback } from 'react';
import { assertDepsValidity } from './utils/assert-deps-validity';

export const useAsapEffect = (effectCallback: EffectCallback, deps: unknown[]): void => {
  assertDepsValidity(deps);

  const depsRef = useRef(deps);
  const isFirstRunRef = useRef(true);
  const destructureCallbackRef = useRef<() => void>();

  if (depsRef.current.length !== deps.length) {
    throw new Error('useImmediateEffect: deps length must not change');
  }

  if (depsRef.current.every((dep, index) => dep === deps[index]) && !isFirstRunRef.current) {
    return;
  }

  isFirstRunRef.current = false;
  depsRef.current = deps;

  Promise.resolve().then(() => {
    destructureCallbackRef.current?.();
    const destructureCallback = effectCallback();
    destructureCallbackRef.current = destructureCallback as () => void | undefined;
  });
};
