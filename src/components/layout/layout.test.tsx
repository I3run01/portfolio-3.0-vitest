import '@testing-library/jest-dom';
import { fireEvent, act } from '@testing-library/react'; 
import { Layout } from ".";
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';

describe('test top menubar', () => {
  let burguerMenuButton: HTMLElement;
  let leftMenuBar: HTMLElement;
  let rightMenuBar: HTMLElement;
  let homeMenuButton: HTMLElement;
  let shareMenuButton: HTMLElement;

  beforeEach(() => {
    global.innerWidth = 700;
    fireEvent(window, new Event('resize'));
    
    const { getByTestId } = renderWithProviders(<Layout children/>);
    burguerMenuButton = getByTestId('burguer-menu-button');
    leftMenuBar = getByTestId('left-menu-bar');
    rightMenuBar = getByTestId('right-menu-bar');
    homeMenuButton = getByTestId('home-menu-button');
    shareMenuButton = getByTestId('share-menu-button');
  });

  it('should open the left menuBar when in the burguerMenu is clicked', async () => {
    expect(leftMenuBar).toHaveStyle('width: 0px;')

    act(() => {
      fireEvent.click(burguerMenuButton);

    })

    expect(leftMenuBar).toHaveStyle('width: 250px;')

  });

  it('if the left menu is opened, should close it when the shareButton is clicked', async () => {
    expect(leftMenuBar).toHaveStyle('width: 0px;')

    act(() => {
      fireEvent.click(burguerMenuButton);

    })

    expect(leftMenuBar).toHaveStyle('width: 250px;')

    act(() => {
      fireEvent.click(shareMenuButton);
    })

    expect(leftMenuBar).toHaveStyle('width: 0px;')

  });

  it('should open the right menu when we click in the sharedButton', async () => {
    expect(rightMenuBar).toHaveStyle('width: 0px;')

    act(() => {
      fireEvent.click(shareMenuButton);
    })

    expect(rightMenuBar).toHaveStyle('width: 60px;')
  });

  it('should close leftMenu when I click in homeButton', async () => {
    act(() => {
      fireEvent.click(burguerMenuButton);
    })

    expect(leftMenuBar).toHaveStyle('width: 250px;')

    act(() => {
      fireEvent.click(homeMenuButton);
    })

    expect(leftMenuBar).toHaveStyle('width: 0px;')
  });

  it('should close rightMenu when I click in homeButton', async () => {
    act(() => {
      fireEvent.click(shareMenuButton);
    })

    expect(rightMenuBar).toHaveStyle('width: 60px;')

    act(() => {
      fireEvent.click(homeMenuButton);
    })

    expect(rightMenuBar).toHaveStyle('width: 0px;')
  });
  
});
