import styled from "styled-components";
import { maxMobileWidthString } from "src/utils/constants/maxMobileWidth";

export const ContainerMain = styled.main`
    padding-left: 100px;
    padding-right: 100px;

    @media screen and (max-width: ${maxMobileWidthString}) {
        padding-left: 5px;
        padding-right: 5px; 
    }

    h1, h2, h3 {
        padding-top: 20px;
        padding-bottom: 20px;

        @media screen and (max-width: ${maxMobileWidthString}) {
            padding-top: 10px;
            padding-bottom: 25px;
        }   
    }
`