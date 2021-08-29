import Constant from "util/Constant";

const searchButtonOnClick = () => {
    alert('검색 버튼입니당');
}

const createRoomOnClick = () => {
    alert('방 만들기 버튼입니당')
}

function TextInputArea() {
    return <div id={'search-text-input-area'}>
        <input type={'text'}/>
    </div>
}

function SearchButton() {
    return (
        <div id={'search-button'} onClick={searchButtonOnClick}/>
    );
}

function CreateRoomButton() {
    return (
        <div id={'create-room-button'} onClick={createRoomOnClick}>
            {Constant.CREATE_ROOM}
        </div>
    )
}

function SearchBar() {
    return (
        <div id={'search-bar'}>
            <CreateRoomButton/>
            <TextInputArea/>
            <SearchButton/>
        </div>
    );
}

export default SearchBar;