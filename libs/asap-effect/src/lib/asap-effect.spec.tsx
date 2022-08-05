import { act, renderHook } from '@testing-library/react';

import { useAsapEffect } from './asap-effect';

describe('useAsapEffect', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useAsapEffect());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
