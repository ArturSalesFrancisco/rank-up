import "./ReviewCard.css";

function ReviewCard({titulo, categoria, nota, imagem, descricao}) {
    return (
        <article className="review-card">
            <div className="infos">
                <p className="categoria">{categoria}</p>
            </div>

            {imagem && (
                <img
                    className="img-card"
                    src={imagem}
                    alt={`Imagem de ${titulo}`}
                />
            )}
            <div className="infos-iniciais">
                <h3 className="titulo-card">{titulo}</h3>
                <p className="nota">{nota}/10</p>
            </div>

            <div className="faixa"></div>

            <p className="desc">{descricao}</p>
        </article>
    )
}

export default ReviewCard;