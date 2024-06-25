import React from "react";
import CounterUp from "../CounterUp/CounterUp";
import "./Cardwidget.css";

function Cardwidget({icon, value, title, classNameValue}) {
    return (
            <div className="card">
                <div className={classNameValue}>
                        <div className="dash_widget_icon">
                            <span>{icon}</span>
                        </div>
                        <div className="dash_widget_content">
                            <h5>R$ <span><CounterUp endValue={value} /></span></h5>
                            <h6>{title}</h6>
                        </div>
                </div>
            </div>
    )
}

export default Cardwidget;