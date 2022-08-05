import { act, renderHook } from '@testing-library/react';

import { useImmediateEffect } from './immediate-effect';

describe('useImmediateEffect', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useImmediateEffect());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
