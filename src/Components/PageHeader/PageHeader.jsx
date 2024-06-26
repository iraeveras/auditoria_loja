import "./PageHeader.css";
function PageTitle({title, subtitle}) {
    return (
        <div className="page_header">
            <div className="page_title">
                <h4>{title}</h4>
                <h6>{subtitle}</h6>
            </div>
        </div>
    )
}

export default PageTitle