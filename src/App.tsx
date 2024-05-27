import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';


function App() {
    return (
        <Wrapper>
            <Header/>
            <Main/>
            <Skills/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    max-width: 1440px;
    max-height: 100vh;
    margin: auto;
`

