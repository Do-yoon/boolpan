import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {useAppDispatch} from "util/hooks";


type PopUpProps = {
    classname: string
    children?: React.ReactNode
}

function PopUp(props: PopUpProps) {
    const dispatch = useAppDispatch();

    return (
        <div className={`${props.classname} outer`}>
            <div className={`${props.classname} inner`}>
                <div className={`${props.classname} close-pop-up-button-container`}>
                    <div className={`${props.classname} close-pop-up-button`}
                         onClick={() => dispatch({type: 'LOGIN_POP_UP'})}>
                        <span>X</span>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default PopUp;