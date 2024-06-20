import "./SubmenuItem.css"
function SubmenuItens({ children, classNameValue }) {
    return (
        <ul className={classNameValue}>
            {children}
        </ul>
    )
}

export default SubmenuItens;