import {useSelector} from "react-redux";
import {RootState} from "store/index";
import LoginPopUp from "./LoginPopUp";
import ChattingPopUp from "./chat-popup/ChattingPopUp";
import SignUpPopUp from "./signup-popup/SignUpPopUp";
import CreateRoomPopUp from "./create-room-popup/CreateRoomPopUp";
import PasswordPopUp from "./password/PasswordPopUp";

function PopUpWrapper() {
    const popUpName = useSelector((state: RootState) => state.popUp.name);
    const popUpProps = useSelector((state: RootState) => state.popUp.props)


    return (
        <div className='pop-up-container'>
            {PopUpTypes[popUpName]}
        </div>
    );
}

export default PopUpWrapper;