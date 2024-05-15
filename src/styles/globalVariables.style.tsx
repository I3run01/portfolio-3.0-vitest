import { maxMobileWidthString } from "src/utils/constants/maxMobileWidth";
import styled from "styled-components";

type Props =  {
  $fontColor: string;
}

export const Colors = {
    darkFontColor: '#E8E8E8',
    lightFontColor: '#121212',
    lightBgColor01: '#E3E3E3',
    lightBgColor02: '#F4F4F4',
    themeColor01: '#119ab8',
    themeColor02: '#03C92E',
    darkBgColor01: '#01001A',
    darkBgColor02: '#00000B',
}

export const Fonts = {
  Title01: styled.h1<Props>` 
    font-family: 'Dosis', sans-serif;
    font-size: 48px;
    font-weight: bold;
    color: ${props => props.$fontColor};

    @media screen and (max-width: ${maxMobileWidthString}){
      font-size: 36px;
    }
  `,

  Title02: styled.h2<Props>`
    font-family: 'Dosis', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: ${props => props.$fontColor};

    @media screen and (max-width: ${maxMobileWidthString}){
      font-size: 24px;
    }
  `,

  Title03: styled.h3<Props>`
    font-family: 'Dosis', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.$fontColor};

    @media screen and (max-width: ${maxMobileWidthString}){
      font-size: 16px;
    }
  `,

  Paragraph: styled.p<Props>`
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: normal;
    color: ${props => props.$fontColor};

    @media screen and (max-width: ${maxMobileWidthString}){
      font-size: 16px;
    }
  `,
};

