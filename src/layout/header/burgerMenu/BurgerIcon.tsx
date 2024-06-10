import styled from "styled-components";
import { myTheme } from "../../../styles/Theme.styled";

export function BurgerIcon() {
    return (
        <SpanWrapper>
            <span></span>
        </SpanWrapper>
    )
}

const SpanWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 20px;


    span {
        display: block;
        height: 2px;
        width: 30px;
        border-radius: 30px;
        background-color: ${myTheme.color.accent};
        position: relative;

        &::before {
            content: "";
            display: block;
            height: 2px;
            width: 30px;
            border-radius: 30px;
            background-color: ${myTheme.color.accent};

            position: absolute;
            top: 10px
        }

        &::after {
            content: "";
            display: block;
            height: 2px;
            width: 30px;
            border-radius: 30px;
            background-color: ${myTheme.color.accent};

            position: absolute;
            top: -10px
        }

    }


`
