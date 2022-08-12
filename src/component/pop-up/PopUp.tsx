import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {PageActionType} from "@store/page/action";


type PopUpProps = {
    classname: string
    children?: React.ReactNode
}

function PopUp(props: PopUpProps) {
    const dispatch = useDispatch();

    return (
        <div className={`${props.classname} outer`}>
            <div className={`${props.classname} inner`}>
                <div className={`${props.classname} close-pop-up-button-container`}>
                    <div className={`${props.classname} close-pop-up-button`}
                         onClick={() => dispatch({type: PageActionType.SET_POP_UP, payload: {popUp: null}})}>
                        <span>X</span>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default PopUp;