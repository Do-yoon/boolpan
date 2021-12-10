import {PopUpType} from "@store/page/state";
import {AppDispatch} from "@store/index";
import {connect} from "react-redux";
import CreateRoomPopUp from "@component/pop-up/CreateRoomPopUp";

type Props = {
    PopUpType: PopUpType

}

function PopUpContainer(props: Props) {
    let popUp = null;
    switch (props.PopUpType) {
        case PopUpType.CREATE_ROOM:
            popUp = <CreateRoomPopUp/>
        default:
            popUp = null
    }

    return (
        <div className='pop-up-wrapper'>
            {popUp}
        </div>
    );
}

export default PopUpContainer;