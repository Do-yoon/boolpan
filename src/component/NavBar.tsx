import Constant from "util/Constant";

interface NavBarProps {
    className: string
}

function NavBar({className}: NavBarProps) {
    const categoryList = Constant.CATEGORY.map((category, i) =>
        <div id={`navbar-${i}`}>
            <span>{category}</span>
        </div>
    );
    return (
        <div className={className}>
            {categoryList}
        </div>
    )
}

export default NavBar;