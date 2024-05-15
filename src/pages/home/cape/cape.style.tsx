import styled from "styled-components";
import { maxMobileWidthNum } from "src/utils/constants/maxMobileWidth";
import { Colors } from "src/styles/globalVariables.style";

type props = {
    $fontColor: string
}

export const CapeDiv = styled.div<props>`
    
    position: relative;
    width: 100%;
    height: 100%;

    overflow: hidden;

    .photoDiv {
        position: relative;
        width: 100%;
        height: 100%;
        
        background: linear-gradient(-45deg, rgba(9,9,121,0.24) 25%, rgba(4,144,51,0.24) 100%);;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.4px);
        -webkit-backdrop-filter: blur(7.4px);

        clip-path: polygon(0 0, 100% 0, 100% 100%);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%);

        @media screen and (max-width: ${maxMobileWidthNum}px) {
                height: 90%;
        }

        .title {
            position: absolute;
            top: 2%;
            left: 22%;
            filter: drop-shadow(1px, 1px, 1px, black);

            span {
                color: ${Colors.themeColor01};
            }

            h1, h2, h3 {
                margin: 0px;
            }
        }

        img {
            position: absolute;
            bottom: 0%;
            right: 0;

            height: 80%;

            filter: grayscale(41%) sepia(3%) brightness(84%) hue-rotate(18deg) saturate(80%) contrast(104%);
            -webkit-filter: grayscale(41%) sepia(3%) brightness(84%) hue-rotate(18deg) saturate(108%) contrast(104%);
            -moz-filter: grayscale(41%) sepia(3%) brightness(84%) hue-rotate(18deg) saturate(108%) contrast(104%);

            @media screen and (max-width: 930px) {
                height: auto;
                width: 40vw;
            }
            
            @media screen and (max-width: 650px) {
                right: -30%;

                height: auto;
                width: 60vw;
            }

            @media screen and (max-width: 440px) {
                right: -30%;

                height: auto;
                width: 80vw;
            }
            
        }
    }

    .subtitle {
            position: absolute;

            bottom: 80px;
            left: 100px;
        }

`

