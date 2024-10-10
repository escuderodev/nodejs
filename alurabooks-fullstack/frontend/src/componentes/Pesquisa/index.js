import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa.js";

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 40px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const ListaLivrosContainer = styled.div`
    display: flex;
    gap: 1rem
    flex-wrap: wrap;
    justify-content: center;
`

const ItemLivro = styled.div`
    width: 300px;
    padding: 1rem;
`

function Pesquisa() {
    const [livrosPesquisados, setLivroPesquisado] = useState(livros)

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value.toUpperCase()
                    const resultadoDaPesquisa = livros.filter(livro => livro.titulo.includes(textoDigitado))
                    setLivroPesquisado(resultadoDaPesquisa)
                }}
            />
            <ListaLivrosContainer>
                {livrosPesquisados.map(livro => (
                    <ItemLivro>
                        <p>{livro.titulo}</p>
                        <img src={livro.src} alt="imagem do livro" />
                    </ItemLivro>
                ))}
            </ListaLivrosContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa

// estilizar lista de livros