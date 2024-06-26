import React from "react";
import Cardwidget from "../Cardwidget/Cardwidget";
import Cardcount from "../Cardcount/Cardcount";
import { BsCartDash } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuArrowDownFromLine } from "react-icons/lu";
import { LuArrowUpFromLine } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDocumentOutline } from "react-icons/io5";
import "./Dashboard.css";
import BarChart from "../Charts/BarChat/BarChart";
import PieChart from "../Charts/PieChart/PieChart";



function Dashboard() {

    return (
        <div className="dashboard">        
            <div className="card-widget-dash">
                <Cardwidget 
                icon={<BsCartDash/>} 
                value={'307144'} 
                title={"Total de vendas vencidas"} 
                classNameValue={"dash_widget dash_1"} 
                />

                <Cardwidget 
                icon={<FaRegMoneyBillAlt/>} 
                value={Number('4385')} 
                title={"Total de vendas vencidas"} 
                classNameValue={"dash_widget dash_2"} />

                <Cardwidget 
                icon={<LuArrowDownFromLine/>} 
                value={Number('385656')} 
                title={"Valor total da venda"} 
                classNameValue={"dash_widget dash_3"} 
                />

                <Cardwidget 
                icon={<LuArrowUpFromLine/>} 
                value={'400000'} 
                title={"Valor total da venda"} 
                classNameValue={"dash_widget dash_4"} 
                />

                <Cardcount 
                count={"100"} 
                title={"Clientes"} 
                icon={<FiUser/>} 
                classNameValue={"dash_count dash_count_01"} 
                />

                <Cardcount 
                count={"100"} 
                title={"Fornecedores"} 
                icon={<FiUserCheck/>} 
                classNameValue={"dash_count dash_count_02"} 
                />

                <Cardcount 
                count={"100"} 
                title={"Nota fiscal de compra"} 
                icon={<IoDocumentTextOutline/>} 
                classNameValue={"dash_count dash_count_03"} 
                />

                <Cardcount 
                count={"105"} 
                title={"Fatura de vendas"} 
                icon={<IoDocumentOutline/>} 
                classNameValue={"dash_count dash_count_04"} 
                />
            </div>
            <div className="chart-dash">            
                <div className="chart-dash-bar">
                    <BarChart/>
                </div>
                <div className="chart-dash-bar">
                    <PieChart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard