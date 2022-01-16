import {connect, useDispatch, useSelector} from "react-redux";
import {RootState} from "@store/index";


function PopUpContainer() {
    const popUp = useSelector((state: RootState) => state.pages.popUp);

    return (
        <div className='pop-up-container'>
                    {popUp}
        </div>
    );
}

export default PopUpContainer;