import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 10px 20px;
    min-height: 40vh;
    width: 100vw;
    overflow-y: auto;
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 30px;
`;

const Resultado = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: stretch;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
        margin: 0;
    }

    img {
        width: 100px;
    }

    div:hover {
        transition: all 0.8s ease;
        background-color: rgba(255, 255, 255, 0.03);
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [textoDigitado, setTextoDigitado] = useState("");

    const handlePesquisa = () => {
        if (textoDigitado.trim() === "") {
            setLivrosPesquisados([]);
        } else {
            const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
            setLivrosPesquisados(resultadoPesquisa);
        }
    };

    const handleLimparPesquisa = () => {
        setTextoDigitado(""); 
        setLivrosPesquisados([]); 
    };

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                value={textoDigitado}
                onChange={evento => {
                    setTextoDigitado(evento.target.value);
                    if (evento.target.value.trim() === "") {
                        handleLimparPesquisa(); 
                    }
                }}
                onBlur={handlePesquisa}
                onKeyPress={(evento) => {
                    if (evento.key === "Enter") {
                        handlePesquisa();
                    }
                }}
            />  
            <Resultado>
                {livrosPesquisados.map(livro => (
                    <div className='item' key={livro.id}>
                        <img src={livro.src} alt=''/>
                        <p>{livro.nome}</p>
                    </div>
                ))}
            </Resultado>
        </PesquisaContainer>
    );
}

export default Pesquisa;
