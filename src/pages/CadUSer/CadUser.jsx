import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import PageHeader from "../../Components/PageHeader/PageHeader";
import "./CadUser.css"
function CadUser() {

    const [isPassVisible, setIsPassVisible] = useState(true);

    function showPassword() {
        setIsPassVisible(!isPassVisible)
    }

    return (
        <>
            <PageHeader title="Gerenciamento de usuários" subtitle="Adicionar/atualizar usuário" />
            <div className="container_cad_user">
                <div className="cad_body_user">
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="text_name">Nome</label>
                            <input type="text" id="text_name" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="text_name_user">Nome de usuário</label>
                            <input type="text" id="text_name_user"/>
                        </div>
                        <div className="input_group">
                            <label htmlFor="text_grupo">Grupo</label>
                            <select name="" id="text_grupo">
                                <option value="">Selecionar</option>
                                <option value="">Ativação de senha</option>
                                <option value="">Cadastro</option>
                                <option value="">Excluir agendamento</option>
                            </select>
                        </div>
                        <div className="input_group pass_group">
                            <label htmlFor="text_password_user">Senha</label>
                            <input type={!isPassVisible ? "text" : "password"} id="text_password_user" className="pass_input"/>
                            <span className="toggle_password" onClick={showPassword}>
                                {isPassVisible ? <IoEyeOffOutline/> : <IoEyeOutline/>}
                            </span>
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

export default CadUser