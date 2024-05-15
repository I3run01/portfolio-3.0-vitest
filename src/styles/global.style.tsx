import styled, { keyframes} from "styled-components";

type props = {
    $bgColor: string
    $animationBgColors: {
        color01: string,
        color02: string,
        color03: string,
        color04: string,
    }
}

const Gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const GlobalStyle = styled.div<props>`
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: linear-gradient(-45deg, 
        ${props => props.$animationBgColors.color01}, 
        ${props => props.$animationBgColors.color02}, 
        ${props => props.$animationBgColors.color03}, 
        ${props => props.$animationBgColors.color04}
    );

    background-size: 400% 400%;
    animation: ${Gradient} 15s ease infinite;    
`
