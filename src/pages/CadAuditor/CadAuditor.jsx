import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageHeader/PageHeader";
import "./CadAuditor.css";

function CadAuditor() {
    return (
        <>
            <PageTitle title="Gerenciamento de auditor" subtitle="Adicionar auditor" />
            <div className="container">
                <div className="cadastro_body">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name_auditor">Nome do auditor</label>
                            <input type="text" id="text_name_auditor" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="btn_group">
                            <Link href="#" className="btn btn_submit">Cadastrar</Link>
                            <Link href="#" className="btn btn_cancel">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadAuditor;