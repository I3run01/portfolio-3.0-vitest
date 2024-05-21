import styled from "styled-components";
import { Colors } from "src/styles/globalVariables.style";

type props = {
    $borderColor: string
    $skillsContainerBgColor: string
}

export const SkillsDiv = styled.div<props>`
    margin-top: 10px;

    .container {
        display: flex;

        .skills {
            display: flex;
            flex-direction: column;
            align-items: center;

            .skillContainer {
                background-color: ${props => props.$skillsContainerBgColor};
        
                width: 70%;
                border: 1px solid ${props => props.$borderColor};
        
                border-radius: 20px;
                margin-top: 20px;
        
                padding: 10px;
        
                -webkit-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
    
                h3 {
                    margin-top: 2px;
                    margin-bottom: 2px;
                }
                    
                .skillList {
                    display: flex;
                    flex-wrap: wrap;
    
                    .selectedSkill {
                        color: ${Colors.themeColor02};
                    }
        
                    p {
                        margin-top: 0px;
                        margin-left: 0px;
                        margin-right: 20px;
                        
                        white-space: nowrap;
        
                        &:hover {
                            color: ${Colors.themeColor01};
                            cursor: pointer;
                        }

                        
                    }
                }
            }
        }


        .projects {
            width: 50%;
            max-height: 800px;
            align-self: center;
            overflow-y: auto;
            border: 1px solid ${props => props.$borderColor};
            border-radius: 10px;
            -webkit-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 25px -5px rgba(0,0,0,0.75);
            
            display: flex;
            flex-direction: column;

            background-color: yellow;

            div {
                margin: 0;
                padding: 0;
                line-height: 0;

                img {
                    width: 100%;
                    height: 200px;

                    object-fit: cover;
                    border: 0; 
                    box-sizing: border-box; 

                    filter: grayscale(60%);

                    &:hover {
                        cursor: pointer;
                        filter: grayscale(0%);
                    }
                }
            }

            @media screen and (max-width: 800px) {
                display: none;
            }
        }
    }
`
