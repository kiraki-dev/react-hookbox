import { render } from '@testing-library/react';

import UseImmediateEffect from './use-immediate-effect';

describe('UseImmediateEffect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseImmediateEffect />);
    expect(baseElement).toBeTruthy();
  });
});
