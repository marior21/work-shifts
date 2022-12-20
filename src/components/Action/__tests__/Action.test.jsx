import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Action } from '../Action';

const DEFAULTS = {
  children: 'Lorem Ipsum...',
};

describe('components/ <Action>', () => {
  test('renders', () => {
    const { asFragment } = render(<Action {...DEFAULTS} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('prop:button', () => {
    const { asFragment } = render(<Action {...DEFAULTS} button />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('prop:onPress', () => {
    const handlePress = jest.fn();
    const testId = 'onChange';
    const { getByTestId } = render(<Action {...DEFAULTS} onPress={handlePress} data-testid={testId} />);

    fireEvent.click(getByTestId(testId));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  test('extending properties from <Text>', () => {
    const { asFragment } = render(<Action {...DEFAULTS} small />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Testing
  test('testID', () => {
    const { asFragment, getByTestId } = render(<Action {...DEFAULTS} data-testid="mirai" />);
    expect(getByTestId('mirai')).toBeDefined();
    expect(asFragment()).toMatchSnapshot();
  });

  // Styling
  test('inherit:className', () => {
    const { asFragment } = render(<Action {...DEFAULTS} className="mirai" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
