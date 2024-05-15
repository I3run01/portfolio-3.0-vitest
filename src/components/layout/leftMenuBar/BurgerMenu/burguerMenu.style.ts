import styled from "styled-components";

interface Props {
    $fontColor: string;
    $themeColor: string
}


export const BurguerMenuStyled = styled.div<Props>`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 0px;

    padding: 4px;
    
    height: 60px;
    width: 60px;
    
    transform: scale(60%);
    
    transform-origin: top left;
    
    cursor: pointer;
    
    &:hover > .line01, &:hover >  .line02, &:hover > .line03 {
        background-color: ${props => props.$themeColor};
    }
    
    .line01, .line02, .line03 {

        height: 4px;
        transition: all 0.5s ease-in-out;
        
        border: 1px solid ${props => props.$fontColor};

        border-radius: 5px;

        background-color: ${props => props.$fontColor};

    }
    
    .line01, .line03 {
        width: 40px;
    }

    .line01 {
        margin-top: 10px;
    }

    .line02 {
        width: 60px;
    }

    .line03 {
        margin-bottom: 10px;
    }

    //Animation
    .line01menuOpened, .line03menuOpened {
        width: 40px; 
        margin: 0;
    }

    .line01menuOpened {
        rotate: 45deg;
        transform: translate(25px, 13px);
    }

    .line03menuOpened {
        rotate: -45deg;
        transform: translate(25px, -13px);
    }

    .line02menuOpened {
        translate: -40px;
        opacity: 0;
       
    }
`