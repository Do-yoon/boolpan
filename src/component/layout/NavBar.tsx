import Constant from "@util/Constant";

interface CountBannerProps {
    n: number
}

const categoryText = <div id="category-text"><span>카테고리</span></div>


const categoryList = Constant.CATEGORY.map((category, i) =>
    <div className="category" id={`navbar-${i}`}>
        <span>{category}</span>
    </div>
);

function ConcurrentConnBanner({n}: CountBannerProps) {
    return (
        <div className="count-banner">
            <span>{`${Constant.CONCURRENT_CONNECTION_AMOUNT}: ${n}`}</span>
        </div>
    );
}

function RoomBanner({n}: CountBannerProps) {
    return (
        <div className="count-banner">
            <span>{`${Constant.ROOM_AMOUNT}: ${n}`}</span>
        </div>
    );
}

function NavBar() {
    return (
        <div className="navbar">
            {categoryText}
            <div className="category-list">
                {categoryList}
            </div>
            <div className="banner-area">
                <ConcurrentConnBanner n={10000}/>
                <RoomBanner n={10000}/>
            </div>
        </div>
    )
}

export default NavBar;