import { MobileTopMenuDiv } from "./mobileTopMenu.style"
import { BurguerMenu } from "../leftMenuBar/BurgerMenu"
import { SvgIcons } from "src/assets/svg/svgIcons"
import { RootState } from "src/redux/store"
import { useSelector } from "react-redux"
import { Colors } from "src/styles/globalVariables.style"

type pros = {
    burguerFunction: () => void,
    homeFunction: () => void,
    shareFunction: () => void,
    isMenuClosed: boolean
}

export const MobileTopMenu = ({burguerFunction, homeFunction, shareFunction, isMenuClosed}: pros) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    return (
        <MobileTopMenuDiv $svgColor={isDark ? Colors.darkFontColor : Colors.lightFontColor}>
            <BurguerMenu fction={burguerFunction} isMenuClosed={isMenuClosed}/>
            <div className="icons" onClick={homeFunction} data-testid='home-menu-button'><SvgIcons.HomeIcon /></div>
            <div className="icons" onClick={shareFunction} data-testid='share-menu-button'><SvgIcons.ShareIcon /></div>           
        </MobileTopMenuDiv>
    )
}