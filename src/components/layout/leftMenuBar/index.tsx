import { LeftMenuBarDiv } from "./leftMenuBar.style";
import { useEffect, useState } from "react"
import { BurguerMenu } from './BurgerMenu'
import { useSelector } from "react-redux";
import { RootState } from 'src/redux/store'
import { Fonts } from "src/styles/globalVariables.style";
import { Colors } from "src/styles/globalVariables.style";
import { SvgIcons } from 'src/assets/svg/svgIcons'
import { changeTheme } from "src/redux/slice/themeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { maxMobileWidthNum } from "src/utils/constants/maxMobileWidth";

type props = {
    isLeftMenuClosed: boolean
    handleBurguerMenuFunction: () => void
}

const LeftMenuBar = ({isLeftMenuClosed, handleBurguerMenuFunction}: props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)
    const [showsBurguerMenu, setShowsBurguesMenu] = useState<boolean>(true)
    const [menuClosedWidth, setMenuClosetWidth] = useState<string>('50px')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation();
    const { i18n } = useTranslation()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < maxMobileWidthNum) {
                setShowsBurguesMenu(false);
                setMenuClosetWidth('0px')
            } else {
                setShowsBurguesMenu(true);
                setMenuClosetWidth('50px')
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const changeLanguage = () => i18n.language == 'en' ? i18n.changeLanguage('ptbr')  :  i18n.changeLanguage('en')

    return (
        <LeftMenuBarDiv
        data-testid='left-menu-bar'
        $leftMenuWidth = {isLeftMenuClosed ?  menuClosedWidth : '250px'}
        $themeColor={Colors.themeColor01}
        $svgDefaultColor={isDark ? Colors.darkFontColor : Colors.lightFontColor}
        >   

            {showsBurguerMenu &&
                <BurguerMenu
                    fction={handleBurguerMenuFunction}
                    isMenuClosed={isLeftMenuClosed}
                />
            }
        
            <div className="pages">
                <div onClick={() => navigate('')}>
                    <SvgIcons.HomeIcon/>
                    <Fonts.Paragraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Home')}
                    </Fonts.Paragraph>
                </div>
                <div onClick={() => navigate('tech')}>
                    <SvgIcons.TechIcon/>
                    <Fonts.Paragraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Tech')}
                    </Fonts.Paragraph>
                </div>
            </div>

            <div className="settings">
                <div onClick={changeLanguage} data-testid="change-language">
                    <SvgIcons.LanguageIcon/>
                    <Fonts.Paragraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor} className="swapLang">
                        {t('Language')}
                    </Fonts.Paragraph>
                </div>
                <div onClick={() => dispatch(changeTheme())} data-testid="change-menu-button">
                    <SvgIcons.ThemeICon/>
                    <Fonts.Paragraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor} className="ThemeButton">
                        {t('Theme')}
                    </Fonts.Paragraph>
                </div>

                <div onClick={() => navigate('dashboard')}>
                    <SvgIcons.DashboardIcon/>
                    <Fonts.Paragraph $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}>
                        {t('Dashboard')}
                    </Fonts.Paragraph>
                </div>
            </div>
        </LeftMenuBarDiv>
    )
}

export default LeftMenuBar