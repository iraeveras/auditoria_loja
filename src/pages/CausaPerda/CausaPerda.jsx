import { Link } from "react-router-dom"
import PageHeader from "../../Components/PageHeader/PageHeader"

function CausaPerda() {
    return (
        <>
            <PageHeader title="Gerenciamento de causa de perda" subtitle="Adicionar tipo de causa de perda" />
            <div className="container">
                <div className="cadastro_body">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name_causa_perda">Nome da causa de perda</label>
                            <input type="text" id="text_name_causa_perda" />
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

export default CausaPerda