import styled from "styled-components";

type props = {
    $borderColor: string
    $paragraphBackgroundColor: string
}

export const AboutDiv = styled.div<props>`
    height: 100vh;
    
    .flexBox {
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;

        @media screen and (max-width: 600px) {
            flex-direction: column;
        }
        
        img {
            width: 30%;
            border: 2px solid ${props => props.$borderColor};
            border-radius: 15px;

            -webkit-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);

            @media screen and (max-width: 600px) {
                width: 80%;
            }
        }

        p {
            width: 60%;
            padding: 25px;
            border: 2px solid ${props => props.$borderColor};
            background-color: ${props => props.$paragraphBackgroundColor};
            border-radius: 15px;

            -webkit-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);

            @media screen and (max-width: 600px) {
                width: 70%;
            }
        }
    }
`