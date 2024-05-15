import styled from "styled-components";
import { maxMobileWidthString } from "src/utils/constants/maxMobileWidth";

export const LayoutDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 100%;

    @media screen and (max-width: ${maxMobileWidthString}) {
        height: calc(100% - 40px);
    }

`