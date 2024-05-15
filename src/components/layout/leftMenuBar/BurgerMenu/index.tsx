import { useEffect, useState } from "react"
import { BurguerMenuStyled } from "./burguerMenu.style"
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import { Colors } from 'src/styles/globalVariables.style'

type Props = {
    fction: () => void,
    isMenuClosed: boolean
}

export const BurguerMenu = ({fction, isMenuClosed }:Props) => {
    const [isMenuOpenOrClosed, setIsMenuOpenOrClosed] = useState<string>(
        isMenuClosed ? 'menuClosed' : 'menuOpened'
    )
    
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const ChangeMenu = () => {
        if(isMenuOpenOrClosed == 'menuClosed') setIsMenuOpenOrClosed('menuOpened')
        else setIsMenuOpenOrClosed('menuClosed')

        fction()
    }

    useEffect(() => {
        setIsMenuOpenOrClosed(isMenuClosed ? 'menuClosed' : 'menuOpened')
    }, [isMenuClosed])
''
    return (
        <BurguerMenuStyled 
            $fontColor = {isDark ? Colors.darkFontColor : Colors.lightFontColor}
            $themeColor={Colors.themeColor01}
            onClick={ChangeMenu}
            id='burguerMenu'
            data-testid="burguer-menu-button">
            <div className={`line01 line01${isMenuOpenOrClosed}`}/>
            <div className={`line02 line02${isMenuOpenOrClosed}`}/>
            <div className={`line03 line03${isMenuOpenOrClosed}`}/>
        </BurguerMenuStyled>
    )
}