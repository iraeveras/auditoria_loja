import PageHeader from "../../Components/PageHeader/PageHeader"

function CadLoja() {
    return (
        <>
            <PageHeader title="Gerenciamento de loja" subtitle="Adicionar Loja" />
            <div className="container_cad_user">
                <div className="cad_body_user">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name">Nome da loja</label>
                            <input type="text" id="text_name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="btn_group">
                            <a href="javascript:void(0);" className="btn btn_submit">Cadastrar</a>
                            <a href="#" className="btn btn_cancel">Cancelar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadLoja