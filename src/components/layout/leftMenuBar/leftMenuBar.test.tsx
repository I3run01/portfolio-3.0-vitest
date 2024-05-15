import '@testing-library/jest-dom';
import LeftMenuBar from ".";
import { renderWithProviders } from 'src/test/utils/renderWithProviders.tsx';
import { fireEvent, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from 'src/redux/store'
import { Colors } from 'src/styles/globalVariables.style';

let leftMenuBar: any;
let changeThemeButton: any

describe('test the styles when closed', () => {
  beforeEach(() => {
    
    const leftMenuBarRender = renderWithProviders(<LeftMenuBar isLeftMenuClosed={true} handleBurguerMenuFunction={() => {}}/>);
  
    leftMenuBar = leftMenuBarRender.getByTestId('left-menu-bar');
    changeThemeButton = leftMenuBarRender.getByTestId('change-menu-button');

    global.innerWidth = 1980;
    fireEvent(window, new Event('resize'));
  });

  it('left menu width should be 50px in the beggining', () => {
    expect(leftMenuBar).toHaveStyle('width: 50px');
  });

  it('left menu width should be 0px in the beggining if mobile', () => {
    global.innerWidth = 700;
    fireEvent(window, new Event('resize'));

    expect(leftMenuBar).toHaveStyle('width: 0px');
  });

  it('left menu child width should be equal by left menu', () => {
    const leftMenuBarChild = leftMenuBar.querySelector('.pages')

    const leftMenuBarWidth = leftMenuBar.style.width;
    const leftMenuBarChildWidth = leftMenuBarChild.style.width;

    expect(leftMenuBarChildWidth).toBe(leftMenuBarWidth)
  });
});

describe('test the styles when closed', () => {
  beforeEach(() => {
    const leftMenuBarRender = renderWithProviders(<LeftMenuBar isLeftMenuClosed={false} handleBurguerMenuFunction={() => {}}/>);
  
    leftMenuBar = leftMenuBarRender.getByTestId('left-menu-bar');
    changeThemeButton = leftMenuBarRender.getByTestId('change-menu-button');
  });

  it('left menu width should be 250px when opend', async () => {
    expect(leftMenuBar).toHaveStyle('width: 250px');
  });

  it('should change theme when clicked', async () => {
   
    const themeFont = leftMenuBar.querySelector('.ThemeButton')

    expect(themeFont).toHaveStyle(`color: ${Colors.lightFontColor}`)

    await act( async () => {
      fireEvent.click(changeThemeButton);
    })

    expect(themeFont).toHaveStyle(`color: ${Colors.darkFontColor}`)

  })
})

describe('test the routes', () => {
  beforeEach(() => {
    render(
      <Provider store={store} >
        <LeftMenuBar isLeftMenuClosed={false} handleBurguerMenuFunction={() => {}}/>
      </Provider>, 
      {wrapper: BrowserRouter}
    )
  });

  it('should go from home to tech page', async () => {
    const user = userEvent.setup()
    const dashboardButton = leftMenuBar.querySelector('.dashboardButton')

    expect(screen.getByText(/home/i)).toBeInTheDocument()

    await user.click(dashboardButton)

    expect(screen.getByText(/tech/i)).toBeInTheDocument()
  })

  it('should go from tech to home page', async () => {
    const user = userEvent.setup()
    const dashboardButton = leftMenuBar.querySelector('.dashboardButton')

    expect(screen.getByText(/tech/i)).toBeInTheDocument()

    await user.click(dashboardButton)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })

  it('should go from home to dashboard page', async () => {
    const user = userEvent.setup()
    const dashboardButton = leftMenuBar.querySelector('.dashboardButton')

    expect(screen.getByText(/home/i)).toBeInTheDocument()

    await user.click(dashboardButton)

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  })
  
})
