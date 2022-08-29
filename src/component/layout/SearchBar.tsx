import Constant, {Urls} from "util/Constant";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


function TextInputArea() {
    const [key, setKey] = useState('');
    const navigate = useNavigate();
    const searchOnSubmit = () => {
        navigate({
            pathname: Urls.SEARCH,
            search: '?' + new URLSearchParams({key: key})
        });
    }

    return(
        <form id="search-bar-form" onSubmit={searchOnSubmit}>
            <input type='text' id='search-text-input-area'
                   placeholder={Constant.KEYWORD_SEARCH_PLACEHOLDER}
                   value={key}
                   onChange={(e) => setKey(e.target.value)}/>
            <input type='submit' id='search-button' value=''/>
        </form>
    );
}

function CreateRoomButton() {
    const dispatch = useDispatch()

    return (
        <div id='create-room-button' onClick={() => dispatch({ type: "CREATE_ROOM_POP_UP"})}>
            <span>{Constant.CREATE_ROOM}</span>
        </div>
    )
}

function SearchBar() {

    return (
        <div id='search-bar'>
            <CreateRoomButton/>
            <TextInputArea/>
        </div>
    );
}

export default SearchBar;