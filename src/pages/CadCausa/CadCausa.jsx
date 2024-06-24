import { Link } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";

function CadCausa() {
    return (
        <>
            <PageHeader title="Gerenciamento de motivos de causa" subtitle="Adicionar motivos de causa" />
            <div className="container">
                <div className="cadastro_body">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name">Motivo de causa</label>
                            <input type="text" id="text_name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="btn_group">
                            <Link href="#" className="btn btn_submit">Enviar</Link>
                            <Link href="#" className="btn btn_cancel">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadCausa;