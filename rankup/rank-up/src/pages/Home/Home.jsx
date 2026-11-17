import "./Home.css"
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useState } from "react";
import Img from "../../assets/guerra-civil.jpeg";
import Img2 from "../../assets/vingadores2.jpeg";
import Img3 from "../../assets/wandavision.jpeg";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

function Home() {
    const [avaliacoes, setAvaliacoes] = useState([
        {
            titulo: "Guerra Civil",
            categoria: "Filme",
            nota: 9.32,
            imagem: Img,
            descricao: "Uma ótima ficção científica."
        },
        {
            titulo: "Era de Ultron",
            categoria: "Filme",
            nota: 9.13,
            imagem: Img2,
            descricao: "Um jogo muito divertido."
        },
        {
            titulo: "WandaVision",
            categoria: "Série",
            nota: 8.58,
            imagem: Img3,
            descricao: "Livro muito interessante."
        }
    ]);

    function adicionarAvaliacao(novaAvaliacao) {
        const file = novaAvaliacao.imagem
            ? URL.createObjectURL(novaAvaliacao.imagem)
            : null;
        setAvaliacoes(avaliacoesAtuais => [
            ...avaliacoesAtuais,
            {
                ...novaAvaliacao,
                imagem: file
            }
        ]);
    }

    const [formVisivel, setFormVisivel] = useState(false);
    function mostrarCadastro(){
        setFormVisivel(visivelAtual => !visivelAtual);
    }

    return (
        <main className="conteudo-principal">
            <div className="div-inicial">
                <div className="texto-inicial">
                    <h1 className="titulo">Descubra, avalie, ranqueie</h1>
                    <p className="texto">Publique avaliações sobre suas coisas preferidas e organize-as com toda a sua imaginação!</p>
                </div>
                <button className="btn-mostrar-cadastro" onClick={mostrarCadastro}>+</button>
            </div>

            {formVisivel && (
                <ReviewForm aoCadastrar={adicionarAvaliacao} />
            )}

            <div className="lista-avaliacoes">
                <h3 className="suas-avaliacoes">Suas avaliações</h3>
                <div className="cards">
                    {avaliacoes.map(avaliacao => {
                        return(
                            <ReviewCard key={avaliacao.titulo} titulo={avaliacao.titulo} categoria={avaliacao.categoria} nota={avaliacao.nota} imagem={avaliacao.imagem} descricao={avaliacao.descricao}></ReviewCard>
                        )
                    })}
                </div>
            </div>

        </main>
    )
}

export default Home