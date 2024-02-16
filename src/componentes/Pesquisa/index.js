import Input from '../Input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLivros } from '../../Servicos/livros';
import { postFavoritos } from '../../Servicos/favoritos';
import livroImg from '../../imagens/livro.png'


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
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI =  await getLivros()
        setLivros(livrosDaAPI)
    }

    async function insertFavorito(id) {
        await postFavoritos(id)
        alert(`Livro de id:${id} inserido!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />  
            <Resultado>
                { livrosPesquisados.map( livro => (
                    <div onClick={ () => insertFavorito(livro.id) }>
                        <p>{livro.nome}</p>
                        <br />
                        <img src={livroImg} alt="" />        
                    </div>     
                ) ) }
            </Resultado>
            
        </PesquisaContainer>
    );
}

export default Pesquisa;