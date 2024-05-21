import styled from "styled-components";
import { Colors } from "src/styles/globalVariables.style";

type props = {
    $borderColor: string
    $skillsContainerBgColor: string
}
export const SkillsDiv = styled.div<props>`

    .container {
        display: flex;

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

        .projects {
            width: 50%;
            height: auto;

            align-self: center;

            background-color: red;
        }
    }

    


`