import { IoWarning } from "react-icons/io5";
import "./ErrorPage.css";
function ErrorPage() {
    return (
        <div className="page_error_404">
            <IoWarning/>
            <p>Error</p>
            <h1>404</h1>            
        </div>
    )
}

export default ErrorPage;