import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

function CadLoja() {
    return (
        <>
            <PageHeader title="Gerenciamento de loja" subtitle="Adicionar Loja" />
            <div className="container">
                <div className="cadastro_body">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name">Nome da loja</label>
                            <input type="text" id="text_name" />
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

export default CadLoja