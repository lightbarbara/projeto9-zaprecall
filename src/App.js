import { useState } from 'react'
import styled from 'styled-components'
import Footer from './components/Footer'
import GlobalStyle from './components/GlobalStyle'
import LogoContainer from './components/LogoContainer'
import PerguntasContainer from './components/PerguntasContainer'
import PERGUNTAS from './components/perguntas'

export default function App() {

    const [perguntas, setPerguntas] = useState(PERGUNTAS)

    return (
        <ContainerApp>
            {console.log(perguntas)}
            <GlobalStyle />
            <LogoContainer />
            <PerguntasContainer perguntas={perguntas} setPerguntas={setPerguntas} />
            <Footer perguntas={perguntas} setPerguntas={setPerguntas} />
        </ContainerApp>
    )
}

const ContainerApp = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`