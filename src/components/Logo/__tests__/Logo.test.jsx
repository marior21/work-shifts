import { render } from '@testing-library/react';
import React from 'react';

import { Logo } from '../Logo';

const DEFAULTS = {};

describe('components/ <Logo>', () => {
  test('renders', () => {
    const { asFragment } = render(<Logo {...DEFAULTS} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('prop:highlight', () => {
    const { asFragment } = render(<Logo {...DEFAULTS} highlight />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Testing
  test('testID', () => {
    const { asFragment, getByTestId } = render(<Logo {...DEFAULTS} data-testid="mirai" />);
    expect(getByTestId('mirai')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  // Styling
  test('inherit:className', () => {
    const { asFragment } = render(<Logo {...DEFAULTS} className="mirai" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
