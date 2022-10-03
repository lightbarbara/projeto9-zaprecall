import { useState } from "react"
import styled from "styled-components"
import seta_virar from '../img/seta_virar.png'

function PerguntaFechada({pergunta, posicao, perguntas, setPerguntas}) {

    function abrePergunta(posicao) {
        for (let p in perguntas) {
            if (perguntas[p].id === posicao) {
                perguntas[p].aberta = true
            } else {
                perguntas[p].aberta = false
            }
        setPerguntas([...perguntas])
        }
    }

    return (
        <PerguntaFechadaWrapper>
            <p>Pergunta {posicao + 1}</p>
            <ion-icon onClick={() => abrePergunta(posicao)} name='play-outline'></ion-icon>
        </PerguntaFechadaWrapper>
    )
}

function Pergunta({pergunta, perguntas}) {

    const [showAnswer, setShowAnswer] = useState(pergunta.mostraPergunta)
    const [acertou, setAcertou] = useState(pergunta.acertou)

    function viraPergunta() {
        setShowAnswer(true)
    }

    return (
        <PerguntaAbertaWrapper>
            {showAnswer ? pergunta.resposta : pergunta.pergunta}
            {showAnswer ? '': <img onClick={viraPergunta} src={seta_virar} alt='seta' />}
        </PerguntaAbertaWrapper>
    )
}

export default function PerguntasContainer({perguntas, setPerguntas}) {
    return (
        <>
            {perguntas.map((p, i) => p.aberta ? <Pergunta pergunta={p} perguntas={perguntas} /> : <PerguntaFechada pergunta={p} posicao={i} perguntas={perguntas} setPerguntas={setPerguntas} />)}
        </>
    )
}

const PerguntaFechadaWrapper = styled.div`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;

& > p {
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
}

ion-icon {
    cursor: pointer;
    font-size: 25px
}
`

const PerguntaAbertaWrapper = styled.div`
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;

& > img{
position: absolute;
bottom: 10px;
right: 10px;
cursor: pointer
}
`