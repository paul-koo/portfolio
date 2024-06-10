import styled from "styled-components";
import {css} from "styled-components";
import { myTheme } from "../../../../styles/Theme.styled";

export function BurgerButton() {
    return (
        <BurgerButtonWrapper isOpen={true}>
            <span></span>
        </BurgerButtonWrapper>
    )
}

const BurgerButtonWrapper = styled.button<{isOpen: boolean}>`
    position: fixed;
    right: 45px;
    top: 25px;
    background-color: ${myTheme.color.bgColor.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 20px;
    z-index: 9999;

    span {
        display: block;
        height: 3px;
        width: 30px;
        border-radius: 30px;
        background-color: ${myTheme.color.accent};
        position: relative;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}


        &::before {
            content: "";
            display: block;
            height: 3px;
            width: 30px;
            border-radius: 30px;
            background-color: ${myTheme.color.accent};

            position: absolute;
            transform: translateY(-10px)
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0);
                transform: rotate(-45deg);
            `}
        }

        &::after {
            content: "";
            display: block;
            height: 3px;
            width: 30px;
            border-radius: 30px;
            background-color: ${myTheme.color.accent};

            position: absolute;
            transform: translateY(10px)

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: translateY(0);
                transform: rotate(45deg);
            `}
        }

    }


`
