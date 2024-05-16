import { screen } from '@testing-library/react';
import { Cape } from '.';
import { beforeEach, describe, expect, it } from 'vitest';
import { renderWithProviders } from 'src/__test__/renderWithProviders';

describe('<Cape />', () => {
  let photoDiv: HTMLElement;

  beforeEach(() => {
    const { getByTestId } = renderWithProviders(<Cape />);
    photoDiv = getByTestId('photo-div')
  });

  it('should photo Div have the same width as screen', () => {

    expect(photoDiv).toHaveStyle({'width': '100%'})
  })

  it('check photo properties', async () => {
    const photo = screen.getByTestId('my-photo')
    expect(photo).toBeInTheDocument();
    expect(photo).toHaveAttribute('src', 'src/assets/photos/capePhoto.png');
    expect(photo).toHaveAttribute('alt', '');
  });
});
