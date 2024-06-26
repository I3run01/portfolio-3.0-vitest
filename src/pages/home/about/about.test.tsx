import { fireEvent} from '@testing-library/react';
import { About } from '.';
import { beforeEach, describe, expect, it } from 'vitest';
import { renderWithProviders } from 'src/__test__/renderWithProviders';

describe('<About />', () => {
  let flexBox: HTMLElement;

  beforeEach(() => {
    const aboutRender = renderWithProviders(<About />);
    flexBox = aboutRender.getByTestId('flex-box');

    global.innerWidth = 1980;
    fireEvent(window, new Event('resize'));
  });

  it('should have flex-direction: row', () => {
    expect(flexBox).toHaveStyle('flex-direction: row');;
  });

  //TODO: find out why this test does not works
  // it('should have the flex-box like column', async () => {
  //   global.innerWidth = 400;
  //   fireEvent(window, new Event('resize'));

  //   expect(flexBox).toHaveStyle('flex-direction: column');
  // });

});
