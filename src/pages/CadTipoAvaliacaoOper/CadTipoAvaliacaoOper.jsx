import { Link } from "react-router-dom"
import PageTitle from "../../Components/PageHeader/PageHeader"

function CadTipoAvaliacaoOper() {
    return (
        <>
            <PageTitle title="Gerenciamento de tipo de avaliação operacional" subtitle="Adicionar tipo de avaliação operacional" />
            <div className="container">
                <div className="cadastro_body">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name_aval_oper">Tipo de avaliação operacional</label>
                            <input type="text" id="text_name_aval_oper" />
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

export default CadTipoAvaliacaoOper