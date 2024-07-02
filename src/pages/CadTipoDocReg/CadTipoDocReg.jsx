import { Link } from "react-router-dom"
import PageTitle from "../../Components/PageHeader/PageHeader"

function CadTipoDocReg() {
    return (
        <>
            <PageTitle title="Gerenciamento de tipo de registro" subtitle="Adicionar tipo de documento de registro" />
            <div className="container">
                <div className="cadastro_body">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name_tipo_doc_reg">Nome do tipo de documento de registro</label>
                            <input type="text" id="text_name_tipo_doc_reg" />
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

export default CadTipoDocReg