import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import icons from "../../constants/icons";
import "./Signin.css";
function Signin() {
    const [isPassVisible, setIsPassVisible] = useState(true);
    const [inputNameUser, setInputNameUser] = useState("")
    const [inputValuePass, setInputValuePass] = useState("")

    function showPassword() {
        setIsPassVisible(!isPassVisible)
    }

    function validation() {

        setIsPassVisible(inputNameUser)
        setInputValuePass(inputValuePass)

        if (inputNameUser === "") {
            alert("Insira o nome do usuário.")
            return
        }

        if (inputValuePass === "") {
            alert("o campo senha está vazio.")
            return
        }

        setInputNameUser("");
        setInputValuePass("")
    }

    return (
        <div className="container_signin">
            <div className="container_form_signin">
                <div className="content_form_signin">

                    <div className="container_logo">
                        <img src={icons.logo} alt="Image Logo" />
                        <p>Sistema de Auditoria Plaza Shopping</p>
                    </div>
                    <div className="container_title_signin">
                        <h4>Login</h4>
                        <p>Faça login na sua conta</p>
                    </div>
                    <form className="form_signin">
                        <div className="input_group pass_group">
                            <label htmlFor="text_user">Usuário</label>
                            <input type="text" id="text_user" value={inputNameUser} onChange={(e) => setInputNameUser(e.target.value)} />
                            <span className="icon_user">
                                <FaRegUser/>
                            </span>
                        </div>
                        <div className="input_group pass_group">
                            <label htmlFor="text_senha">Senha</label>
                            <input type={!isPassVisible ? "text" : "password"} id="text_senha" value={inputValuePass} onChange={(e) => setInputValuePass(e.target.value)} />
                            <span className="toggle_password" onClick={showPassword}>
                                {isPassVisible ? <IoEyeOffOutline/> : <IoEyeOutline/>}
                            </span>
                        </div>
                        <div className="btn_group">
                            <Link href="#" className="btn btn_submit btn_signin" onClick={validation}>Logar</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container_img_signin">
                <div>
                    <img src={icons.logo} alt="image Logo" />
                    <p>Sistema de Auditoria Plaza Shopping</p>
                </div>
            </div>

        </div>
    )
}

export default Signin;