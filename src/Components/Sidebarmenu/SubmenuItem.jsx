import "./SubmenuItem.css"
function MenuList({ children, classNameValue }) {
    return (
        <ul className={classNameValue}>
            {children}
        </ul>
    )
}

export default MenuList;