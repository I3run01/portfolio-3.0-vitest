import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react'; 
import { BurguerMenu } from ".";
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';

describe('test the burger menu', () => {
  const mockFunction = jest.fn();
  let menuButton: any;

  beforeEach(() => {
    const { getByTestId } = renderWithProviders(<BurguerMenu fction={mockFunction} isMenuClosed={false}/>);
    menuButton = getByTestId('burguer-menu-button');
  });

  it('should open the hamburger menu when clicked', () => {
    fireEvent.click(menuButton);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(menuButton.querySelector('.line01')).toHaveClass('line01menuClosed');
  });

  it('should change the angle of burguer menu line', () => {
    fireEvent.click(menuButton)

    setTimeout(() => {
      expect(menuButton.querySelector('.line01')).toHaveStyle('transform: rotate(45deg)');
    }, 1000); 

  })
  
});
