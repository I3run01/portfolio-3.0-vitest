import { ReactNode, useState, useEffect } from "react"
import { LayoutDiv } from "./layout.style"
import LeftMenuBar from './leftMenuBar'
import RightMenuBar from './rightMenuBar'
import { MobileTopMenu } from "./mobileTopMenu"
import { Main } from "./main"
import { maxMobileWidthNum } from "src/utils/constants/maxMobileWidth"

type props = {
    children: ReactNode
}

export const Layout = ({children}: props) => {
    const [isLeftMenuClosed, setIsLeftMenuClosed] = useState<boolean>(true)
    const [isRightMenuClosed, setIsRightMenuClosed] = useState<boolean>(true)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= maxMobileWidthNum) setIsRightMenuClosed(false)
            else setIsRightMenuClosed(true)
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleBurguerMenuClick = () => {
        setIsLeftMenuClosed(!isLeftMenuClosed)
        setIsRightMenuClosed(true)
    }

    const handleShareIconClick = () => {
        setIsRightMenuClosed(!isRightMenuClosed)
        setIsLeftMenuClosed(true)
    }

    const handleHomeButtonClick = () => {
        setIsLeftMenuClosed(true)
        setIsRightMenuClosed(true)
    }

    return (
        <>
        <MobileTopMenu 
        burguerFunction={handleBurguerMenuClick} 
        homeFunction={handleHomeButtonClick} 
        shareFunction={handleShareIconClick}
        isMenuClosed={isLeftMenuClosed}/>
        <LayoutDiv>
            <LeftMenuBar 
            isLeftMenuClosed={isLeftMenuClosed} 
            handleBurguerMenuFunction={() => {setIsLeftMenuClosed(!isLeftMenuClosed)}}/>
            <Main>
                {children}
            </Main>
            <RightMenuBar isRightMenuClosed={isRightMenuClosed}/>
        </LayoutDiv>
        </>
    )
}