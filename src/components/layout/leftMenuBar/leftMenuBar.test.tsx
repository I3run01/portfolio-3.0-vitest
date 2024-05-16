import LeftMenuBar from ".";
import { renderWithProviders } from 'src/__test__/renderWithProviders.tsx';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import { Colors } from 'src/styles/globalVariables.style';
import { beforeEach, describe, expect, it } from "vitest";

let leftMenuBar: HTMLElement;
let changeThemeButton: HTMLElement;

describe('test the styles when closed', () => {
  beforeEach(() => {
    const leftMenuBarRender = renderWithProviders(<LeftMenuBar isLeftMenuClosed={true} handleBurguerMenuFunction={() => {}} />);
  
    leftMenuBar = leftMenuBarRender.getByTestId('left-menu-bar');
    changeThemeButton = leftMenuBarRender.getByTestId('change-menu-button');

    global.innerWidth = 1980;
    fireEvent(window, new Event('resize'));
  });

  it('left menu width should be 50px in the beginning', () => {
    expect(leftMenuBar).toHaveStyle('width: 50px');
  });

  it('left menu width should be 0px in the beginning if mobile', () => {
    global.innerWidth = 700;
    fireEvent(window, new Event('resize'));

    expect(leftMenuBar).toHaveStyle('width: 0px');
  });

  it('left menu child width should be equal to left menu', () => {
    const leftMenuBarChild = leftMenuBar.querySelector('.pages') as HTMLElement;

    const leftMenuBarWidth = window.getComputedStyle(leftMenuBar).width;
    const leftMenuBarChildWidth = window.getComputedStyle(leftMenuBarChild).width;

    expect(leftMenuBarChildWidth).not.toBe(leftMenuBarWidth)
  });
});

describe('test the styles when opened', () => {
  beforeEach(() => {
    const leftMenuBarRender = renderWithProviders(<LeftMenuBar isLeftMenuClosed={false} handleBurguerMenuFunction={() => {}} />);
  
    leftMenuBar = leftMenuBarRender.getByTestId('left-menu-bar');
    changeThemeButton = leftMenuBarRender.getByTestId('change-menu-button');
  });

  it('left menu width should be 250px when opened', async () => {
    expect(leftMenuBar).toHaveStyle('width: 250px');
  });

  it('should change theme when clicked', async () => {
    const user = userEvent.setup()
    const themeFont = leftMenuBar.querySelector('.ThemeButton') as HTMLElement;

    expect(themeFont).toHaveStyle(`color: ${Colors.lightFontColor}`);

    await user.click(changeThemeButton);

    expect(themeFont).toHaveStyle(`color: ${Colors.darkFontColor}`);
  })
})

describe('test the routes', () => {
  beforeEach(() => {
    render(
      <Provider store={store} >
        <BrowserRouter>
          <LeftMenuBar isLeftMenuClosed={false} handleBurguerMenuFunction={() => {}}/>
        </BrowserRouter>
      </Provider>
    )
  });

  it('should go from home to tech page', async () => {
    const dashboardButton = screen.getByText(/Tech/i);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    userEvent.click(dashboardButton);

    expect(screen.getByText(/Tech/i)).toBeInTheDocument();
  })

  it('should go from tech to home page', async () => {
    const dashboardButton = screen.getByText(/Tech/i);

    expect(screen.getByText(/Tech/i)).toBeInTheDocument();

    userEvent.click(dashboardButton);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  })

  it('should go from home to dashboard page', async () => {
    const dashboardButton = screen.getByText(/Dashboard/i);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    userEvent.click(dashboardButton);

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  })
})
