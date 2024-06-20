import "./Cardwidget.css";

function Cardwidget({icon, value, title}) {
    return (
        <div className="dash_widget">
            <div className="dash_widget_icon">
                <span>{icon}</span>
            </div>
            <div className="dash_widget_content">
                <h5>R$ <span>{value}</span></h5>
                <h6>{title}</h6>
            </div>
        </div>
    )
}

export default Cardwidget;