import { screen } from '@testing-library/react';
import { Cape } from '.';
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';

describe('<Cape />', () => {
  let photoDiv: any;

  beforeEach(() => {
    const { getByTestId } = renderWithProviders(<Cape />);
    photoDiv = getByTestId('photo-div')
  });

  it('should photo Div have the same width as screen', () => {

    expect(photoDiv).toHaveStyle({
      width: '100%'
    })
  })

  it('should have image in 40vw when screen is 930px', async () => {
    const photo = screen.getByRole('img');
    expect(photo).toHaveAttribute('src', 'src/assets/photos/capePhoto.png');
    expect(photo).toHaveAttribute('alt', '');
  });
});
