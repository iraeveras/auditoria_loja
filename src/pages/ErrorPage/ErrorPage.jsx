import { Link } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoWarning } from "react-icons/io5";
import "./ErrorPage.css";
function ErrorPage() {
    return (
        <div className="page_error_404">
            <h1>404</h1>
            <h3><RiErrorWarningFill/> <span>Ops! Página não encontrada!</span></h3>
            <p>A página que você requisitou não foi encontrada.</p>
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default ErrorPage;