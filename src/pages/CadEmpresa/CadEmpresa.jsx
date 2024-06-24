import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

function CadEmpresa() {
    return (
        <>
            <PageHeader title="Gerenciamento de empresa" subtitle="Adicionar empresa" />
            <div className="container">
                <div className="cadastro_body">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name_empresa">Nome da empresa</label>
                            <input type="text" id="text_name_empresa" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="text_cnpj">Cnpj da empresa</label>
                            <input type="text" id="text_cnpj" />
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

export default CadEmpresa