
import "./Cardcount.css";
function Cardcount({count, title, icon}) {
    return (
        <div className="card">
            <div className="dash_count">
                <div className="dash_counts">
                    <h4>{count}</h4>
                    <h5>{title}</h5>
                </div>
                <div className="dash_icon">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Cardcount;