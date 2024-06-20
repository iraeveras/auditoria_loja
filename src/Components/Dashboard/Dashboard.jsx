import Cardwidget from "../Cardwidget/Cardwidget";
import Cardcount from "../Cardcount/Cardcount";
import { BsCartDash } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuArrowDownFromLine } from "react-icons/lu";
import { LuArrowUpFromLine } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import "./Dashboard.css"
function Dashboard() {
    return (
        <div className="row">
            <Cardwidget icon={<BsCartDash/>} value={`307144,00`} title={"Total de vendas vencidas"}/>
            <Cardwidget icon={<FaRegMoneyBillAlt/>} value={`4385,00`} title={"Total de vendas vencidas"}/>
            <Cardwidget icon={<LuArrowDownFromLine/>} value={`385656,00`} title={"Valor total da venda"}/>
            <Cardwidget icon={<LuArrowUpFromLine/>} value={`4000,00`} title={"Valor total da venda"}/>
            <Cardcount count={"100"} title={"Cliente"} icon={<FiUser/>} />
        </div>
    )
}

export default Dashboard