import {connect, useSelector} from "react-redux";
import {RootState} from "@store/index";


function PopUpContainer() {
    const popUp = useSelector((state: RootState) => state.pages.popUp);

    return (
        <div className='pop-up-wrapper'>
            {popUp}
        </div>
    );
}

export default PopUpContainer;