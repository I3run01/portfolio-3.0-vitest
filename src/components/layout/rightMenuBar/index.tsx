import { useSelector } from "react-redux"
import { RightMenuBarDiv } from "./rightMenuBar.style"
import { SvgIcons } from "src/assets/svg/svgIcons"
import { Colors } from "src/styles/globalVariables.style"
import { RootState } from 'src/redux/store'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

type props = {
    isRightMenuClosed: boolean
}

const RightMenuBar = ({isRightMenuClosed}: props) => {
    const isDark = useSelector((state: RootState) => state.theme.isDark)

    const [rightMenuWidth, setRightMenuWidth] = useState('60px')

    useEffect(() => {
        setRightMenuWidth(isRightMenuClosed ? '0px' : '60px')
    }, [isRightMenuClosed])

    return (
        <RightMenuBarDiv 
        $fontColor={isDark ? Colors.darkFontColor : Colors.lightFontColor}
        $width={rightMenuWidth}
        data-testid='right-menu-bar'>
            <Link to={'https://api.whatsapp.com/send?phone=5541995686185'} target="_blank"  className="icons" data-testid='whatsapp-button'>
                <SvgIcons.WhatsAppIcon/>
            </Link>

            <Link to={'https://www.linkedin.com/in/i3run01'} target="_blank"  className="icons" data-testid='linkedin-button'>
                <SvgIcons.LinkedInIcon/>
            </Link>

            <Link to={'https://github.com/I3run01'} target="_blank"  className="icons" data-testid='github-button'>
                <SvgIcons.GitHubIcon/>
            </Link>

            <Link to={'https://drive.google.com/drive/folders/1MAeyz6n7yw1zHPX_BPEFEQ5pLqpvypz7?usp=drive_link'} target="_blank"  className="icons" data-testid='cvs-button'>
                <SvgIcons.CvIcon/>
            </Link>
            
        </RightMenuBarDiv>
    )
}

export default RightMenuBar