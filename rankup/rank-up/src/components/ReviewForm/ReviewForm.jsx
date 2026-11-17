import { useState, useEffect, useRef } from "react";

function ReviewForm({aoCadastrar}) {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [nota, setNota] = useState("");
    const [imagem, setImagem] = useState(null);
    const [descricao, setDescricao] = useState("");
    const [imagemPreview, setImagemPreview] = useState(null)
    const imagemInput = useRef(null);

    useEffect(() => {
        if (imagem){
            const imgNova = URL.createObjectURL(imagem);
            setImagemPreview(imgNova);

            return() => {
                URL.revokeObjectURL(imgNova)
            };
        }else {
            setImagemPreview(null);
        }
    }, [imagem]);

    function carregarAvaliacao(){
        const novaAvaliacao = {
            titulo,
            categoria,
            nota: Number(nota),
            imagem,
            descricao
        };

        if (titulo.trim() === ""){
            alert("Preencha o título da avaliação!");
            return;
        } else if (categoria.trim() === ""){
            alert("Escolha uma categoria para sua avaliação!");
            return;
        } else if (Number.isNaN(Number(nota)) || nota === "" || Number(nota) < 0 || Number(nota) > 10) {
            alert("Insira uma nota válida para sua avaliação!");
            return;
        }

        aoCadastrar(novaAvaliacao);
        setTitulo("")
        setCategoria("")
        setNota("")
        setImagem(null)
        setDescricao("")
        imagemInput.current.value = "";
    }

    function removerImagemPrevia(){
        setImagem(null);
        imagemInput.current.value = "";
    }
    
    return (
        <article>
            <h2>Cadastrar Avaliação</h2>
            <p>Título</p>
            <input
                type="text"
                placeholder="Nome da sua avaliação"
                value={titulo}
                onChange={(evento) => setTitulo(evento.target.value)}
            />
            <p>Categoria</p>
            <input
                type="text"
                placeholder="Ex: Filme, Jogo, Livro"
                value={categoria}
                onChange={(evento) => setCategoria(evento.target.value)}
            />
            <p>Nota (0 a 10)</p>
            <input 
                type="number"
                min="0"
                max="10" 
                step="0.1"
                value={nota}
                onChange={(evento) => setNota(evento.target.value)}
            />
            <p>Imagem</p>
            <input
                type="file"
                accept="image/*"
                onChange={(evento) => setImagem(evento.target.files[0])}
                ref={imagemInput}
            />
            {imagemPreview && (
                <>
                    <img src={imagemPreview} alt="Prévia da avaliação" />
                    <button onClick={removerImagemPrevia}>
                        Remover Imagem
                    </button>
                </>
            )}
            <p>Descrição</p>
            <textarea
                value={descricao}
                onChange={(evento) => setDescricao(evento.target.value)}
            />
            <button
                onClick={carregarAvaliacao}
            >Cadastrar avaliação</button>
        </article>
    )
}

export default ReviewForm;