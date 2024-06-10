import styled from "styled-components";
import { Menu } from "../../../components/menu/Menu";
import { items } from "../Header";

export function BurgerMenu() {
    return (
        <BurgerWrapper>
            <nav>
                <Menu items={items}/>
            </nav>
        </BurgerWrapper>
    )
}

const BurgerWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    overflow-y: hidden;
    z-index: 999;
    
    
`