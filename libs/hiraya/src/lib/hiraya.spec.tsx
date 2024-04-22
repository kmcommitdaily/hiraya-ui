import { render } from '@testing-library/react';

import Hiraya from './hiraya';

describe('Hiraya', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hiraya />);
    expect(baseElement).toBeTruthy();
  });
});
