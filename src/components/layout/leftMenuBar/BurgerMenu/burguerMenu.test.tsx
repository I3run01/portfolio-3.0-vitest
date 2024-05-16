import { cleanup } from '@testing-library/react'; 
import { BurguerMenu } from ".";
import { renderWithProviders } from 'src/__test__/renderWithProviders.tsx';
import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('test the burger menu', () => {
  const mockFunction = vitest.fn();
  let menuButton: HTMLElement;
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    const { getByTestId } = renderWithProviders(<BurguerMenu fction={mockFunction} isMenuClosed={false}/>);
    menuButton = getByTestId('burguer-menu-button');
    user = userEvent.setup()
  });

  afterEach(()=> {
    cleanup()
  })

  it('should open the hamburger menu when clicked', async () => {
    expect(mockFunction).toHaveBeenCalledTimes(0);
    expect(menuButton.querySelector('.line01')).toHaveClass('line01menuOpened');

    await user.click(menuButton);

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(menuButton.querySelector('.line01')).toHaveClass('line01menuClosed');

  });

  it('should change the angle of burguer menu line', async () => {
    expect(menuButton.querySelector('.line01')).toHaveStyle('rotate: 45deg')

    await user.click(menuButton);
    
    expect(menuButton.querySelector('.line01')).toHaveStyle('rotate: 0deg');
  })
  
});
