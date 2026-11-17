import Button from "../Button/Button";
import "./Header.css";

function Header({titulo}) {
    
        return (
            <header className="cabecalho">
                <h3 className="title">{titulo}</h3>

                <div className="btns-cabecalho">
                    <Button>Início</Button>
                    <Button>Explorar</Button>
                    <Button>Rankings</Button>
                </div>
            </header>
        );
    }

    export default Header;