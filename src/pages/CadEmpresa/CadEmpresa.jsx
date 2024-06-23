import PageHeader from "../../Components/PageHeader/PageHeader"

function CadEmpresa() {
    return (
        <>
            <PageHeader title="Gerenciamento de empresa" subtitle="Adicionar empresa" />
            <div className="container_cad_user">
                <div className="cad_body_user">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name">Nome da empresa</label>
                            <input type="text" id="text_name" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="text_name">Cnpj da empresa</label>
                            <input type="text" id="text_name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="btn_group">
                            <a href="javascript:void(0);" className="btn btn_submit">Enviar</a>
                            <a href="#" className="btn btn_cancel">Cancelar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadEmpresa