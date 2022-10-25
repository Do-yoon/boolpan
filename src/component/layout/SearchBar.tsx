import Constant, {Urls} from "util/Constant";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "util/hooks";
import {createRoomPopUp} from "store/action";

function SearchBar() {
    const [key, setKey] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchOnSubmit = () => {
        navigate({
            pathname: Urls.SEARCH,
            search: '?' + new URLSearchParams({key: key})
        });
    }

    const CreateRoomButtonOnClick = () => {
        dispatch(createRoomPopUp())
    }

    return (
        <div id='search-bar'>
            <div id='create-room-button' onClick={CreateRoomButtonOnClick}>
                <span>{Constant.CREATE_ROOM}</span>
            </div>
            <form id="search-bar-form" onSubmit={searchOnSubmit}>
                <input type='text' id='search-text-input-area'
                       placeholder={Constant.KEYWORD_SEARCH_PLACEHOLDER}
                       value={key}
                       onChange={(e) => setKey(e.target.value)}/>
                <input type='submit' id='search-button' value=''/>
            </form>
        </div>
    );
}

export default SearchBar;