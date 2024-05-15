import styled from "styled-components";
import { Colors } from "src/styles/globalVariables.style";
import { maxMobileWidthString } from "src/utils/constants/maxMobileWidth";

type props = {
    $svgColor: string
}

export const MobileTopMenuDiv = styled.div<props>`
    display: none;
    
    height: 40px;
    width: 100%;

    background: rgba(15, 0, 237, 0.24);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);

    .icons {
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;

        :hover {
            color: ${Colors.themeColor01};
        }

        svg {
            color: ${props => props.$svgColor};
            height: 70%;
        }
    }

    @media screen and (max-width: ${maxMobileWidthString}) {
        display: flex;
        justify-content: space-around;

    }

`