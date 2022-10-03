import styled from 'styled-components'

export default function Footer({perguntas, setPerguntas}) {

    function feita() {
        for (let p in perguntas) {
            if (perguntas[p].aberta) {
                perguntas[p].feita = true
            }
        }
        setPerguntas([...perguntas])
    }

    function acerta() {
        
        feita()
    }

    function quase() {
        
        feita()
    }

    function erra() {

        feita()
    }

    return (
        <FooterWrapper>
            <div>
                <button onClick={erra}>Não lembrei</button>
                <button onClick={quase}>Quase não lembrei</button>
                <button onClick={acerta}>Zap!</button>
            </div>
            <p>{`${perguntas.filter(p => p.feita).length}/${perguntas.length} CONCLUÍDOS`}</p>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;

div {
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;

button {
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: blue;
border-radius: 5px;
border: 1px solid blue;
padding:5px;
cursor: pointer
}

button:nth-child(1) {
    background-color: #FF3030;
    border: #FF3030
}

button:nth-child(2) {
    background-color: #FF922E;
    border: #FF922E
}

button:nth-child(3) {
    background-color: #2FBE34;
    border: #2FBE34
}
}
`