import { fireEvent, act, cleanup } from '@testing-library/react'; 
import { Layout } from ".";
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { renderWithProviders } from 'src/__test__/renderWithProviders';
import userEvent from '@testing-library/user-event';

describe('test top menubar', () => {
  let burguerMenuButton: HTMLElement;
  let leftMenuBar: HTMLElement;
  let rightMenuBar: HTMLElement;
  let homeMenuButton: HTMLElement;
  let shareMenuButton: HTMLElement;
  
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    global.innerWidth = 700;
    fireEvent(window, new Event('resize'));
    
    const { getByTestId } = renderWithProviders(<Layout children/>);
    burguerMenuButton = getByTestId('burguer-menu-button');
    leftMenuBar = getByTestId('left-menu-bar');
    rightMenuBar = getByTestId('right-menu-bar');
    homeMenuButton = getByTestId('home-menu-button');
    shareMenuButton = getByTestId('share-menu-button');

    user = userEvent.setup()
  });

  afterEach(() => {
    cleanup()
  })

  it('should open the left menuBar when in the burguerMenu is clicked', async () => {
    expect(leftMenuBar).toHaveStyle('width: 0px;')

    await user.click(burguerMenuButton)

    expect(leftMenuBar).toHaveStyle('width: 250px;')

  });

  it('if the left menu is opened, should close it when the shareButton is clicked', async () => {
    expect(leftMenuBar).toHaveStyle('width: 0px;')

    await user.click(burguerMenuButton)

    expect(leftMenuBar).toHaveStyle('width: 250px;')

    await user.click(shareMenuButton)

    expect(leftMenuBar).toHaveStyle('width: 0px;')

  });

  it('should open the right menu when we click in the sharedButton', async () => {
    expect(rightMenuBar).toHaveStyle('width: 0px;')

    await user.click(shareMenuButton)

    expect(rightMenuBar).toHaveStyle('width: 60px;')
  });

  it('should close leftMenu when I click in homeButton', async () => {
    expect(leftMenuBar).toHaveStyle('width: 0px;')

    await user.click(burguerMenuButton)

    expect(leftMenuBar).toHaveStyle('width: 250px;')

    await user.click(homeMenuButton)

    expect(leftMenuBar).toHaveStyle('width: 0px;')
  });

  it('should close rightMenu when I click in homeButton', async () => {
    expect(rightMenuBar).toHaveStyle('width: 0px;')

    await user.click(shareMenuButton)

    expect(rightMenuBar).toHaveStyle('width: 60px;')

    await user.click(homeMenuButton)

    expect(rightMenuBar).toHaveStyle('width: 0px;')
  });
  
});
