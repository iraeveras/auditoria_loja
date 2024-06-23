
import Sidebarmenu from "../Sidebarmenu/Sidebarmenu";
import "./Sidebar.css";

function Sidebar() {
    
    return (
        <div className="sidebar" id="sidebar" >
            <div className="slimScrollDiv">
                <div className="sidebar_inner slimscroll">
                    <Sidebarmenu />
                </div>
            </div>
        </div>
    )
}

export default Sidebar