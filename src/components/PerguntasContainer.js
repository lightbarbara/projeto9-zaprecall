import styled from "styled-components"
import seta_virar from '../img/seta_virar.png'
import icone_certo from '../img/icone_certo.png'
import icone_erro from '../img/icone_erro.png'
import icone_quase from '../img/icone_quase.png'

function PerguntaFechada({pergunta, posicao, perguntas, setPerguntas}) {

    function abrePergunta(posicao) {
        for (let p in perguntas) {
            if (perguntas[p].id === posicao) {
                perguntas[p].aberta = true
            } else {
                perguntas[p].aberta = false
                perguntas[p].mostraResposta = false
            }
        setPerguntas([...perguntas])
        }
    }

    return (
        <PerguntaFechadaWrapper data-identifier="flashcard" pergunta={pergunta}>
            <p>Pergunta {posicao + 1}</p>
            {!pergunta.feita ? <ion-icon onClick={() => abrePergunta(posicao)} data-identifier="flashcard-show-btn" name='play-outline'></ion-icon> : (pergunta.acertou === true ? <img src={icone_certo} data-identifier="flashcard-status" alt='certo' /> : (pergunta.acertou === false ? <img src={icone_erro} data-identifier="flashcard-status" alt='erro' /> : <img src={icone_quase} data-identifier="flashcard-status" alt='quase' />))}
        </PerguntaFechadaWrapper>
    )
}

function Pergunta({pergunta, perguntas, setPerguntas}) {

    function viraPergunta(indice) {
        for (let p in perguntas) {
            if (indice === perguntas[p].id) {
                perguntas[p].mostraResposta = true
            } else {
                perguntas[p].mostraResposta = false
            }
        }
        setPerguntas([...perguntas])
    }

    return (
        <PerguntaAbertaWrapper data-identifier="flashcard-index-item">
            {pergunta.mostraResposta ? <p data-identifier="flashcard-answer">{pergunta.resposta}</p> : <p data-identifier="flashcard-question">{pergunta.pergunta}</p>}
            {pergunta.mostraResposta ? '': <img onClick={() => viraPergunta(pergunta.id)} data-identifier="flashcard-turn-btn" src={seta_virar} alt='seta' />}
        </PerguntaAbertaWrapper>
    )
}

export default function PerguntasContainer({perguntas, setPerguntas}) {
    return (
        <>
            {perguntas.map((p, i) => p.aberta ? <Pergunta pergunta={p} perguntas={perguntas} setPerguntas={setPerguntas} /> : <PerguntaFechada pergunta={p} posicao={i} perguntas={perguntas} setPerguntas={setPerguntas} />)}
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
color: ${props => props.pergunta.acertou === true ? '#2FBE34' : (props.pergunta.acertou === 'quase' ? '#FF922E' : (props.pergunta.feita ? '#FF3030' : '#333333'))};
text-decoration: ${props => props.pergunta.feita ? 'line-through': ''}
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