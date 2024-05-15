import { fireEvent } from '@testing-library/react';
import { About } from '.';
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';

describe('<About />', () => {
  let flexBox: HTMLElement

  beforeEach(() => {
    const aboutRender = renderWithProviders(<About />)
    flexBox = aboutRender.getByTestId('flex-box')
  });

  describe('flex-box', () => {
    it(' should has flex-direction: row', () => {

      expect(flexBox).toHaveStyle({
        'flex-direction': 'row'
      })
    })

    it('should has the flex-box like column', () => {
      global.innerWidth = 520;
      fireEvent(window, new Event('resize'));

      expect(flexBox).toHaveStyle('flex-direction: column');
    });
  })
});
