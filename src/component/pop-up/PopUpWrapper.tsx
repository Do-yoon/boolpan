import {useSelector} from "react-redux";
import {RootState} from "store/index";

function PopUpWrapper() {
    const popUp = useSelector((state: RootState) => state.popUp);

    return (
        <div className='pop-up-container'>
            {popUp}
        </div>
    );
}

export default PopUpWrapper;