import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';


function App() {
    return (
        <Wrapper>
            <Header/>
            <Main/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    max-width: 1440px;
    max-height: 100vh;
    margin: auto;
`

