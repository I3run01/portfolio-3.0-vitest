import styled from "styled-components";
import { maxMobileWidthString } from "src/utils/constants/maxMobileWidth";

type props = {
    $leftMenuWidth: string
    $themeColor: string
    $svgDefaultColor: string
}

export const LeftMenuBarDiv = styled.div<props>`
    background: rgba(15, 0, 237, 0.24);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    transition: all 0.5s ease-in-out;

    height: 100%;
    width: ${props => props.$leftMenuWidth};

    overflow: hidden;

    .settings, .pages {

        display: flex;
        flex-direction: column;

        width: 200px;

        :hover > p, :hover > svg, :hover {
            cursor: pointer;
            color: ${props =>props.$themeColor};         
        }
  
        div {
            margin-top: 10px;
            margin-bottom: 10px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            padding-left: 5px;
            padding-right: 5px;

            svg {
                width: 25px;
                color: ${props => props.$svgDefaultColor};
            }
        }

        
    }

    @media screen and (max-width: ${maxMobileWidthString}) {
        position: fixed;
        left: 0;

        height: calc(100% - 40px);
    }

`