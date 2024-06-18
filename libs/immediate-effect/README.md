# immediate-effect

To use immediate effect, you need to import the `useImmediateEffectDangerously` hook from the `@react-hookbox/immediate-effect` module.

```tsx
import { useImmediateEffectDangerously } from '@react-hookbox/immediate-effect';
```

Make sure that all operations inside useImmediateEffectDangerously are synchronous, hence some actions might end up in an error if they cause a re-render.

## Hook Code To Copy

```tsx
import { useRef, EffectCallback } from 'react';

import { assertDepsValidity } from './utils/assert-deps-validity';

export const assertDepsValidity: (deps: unknown) => asserts deps is unknown[] = (deps: unknown) => {
  if (deps === undefined) {
    throw new Error('useImmediateEffect: deps must be provided')
  }

  if (!Array.isArray(deps)) {
    throw new Error('useImmediateEffect: deps must be an array')
  }
};

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

```
