import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';


function App() {
    return (
        <Wrapper>
            <Header/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    max-width: 1440px;
    max-height: 100vh;
    margin: auto;
`

