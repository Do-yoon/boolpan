import React from "react";
import {useAppDispatch} from "util/hooks";
import {loginPopUp} from "../../store/action";


type PopUpProps = {
    classname: string
    children?: React.ReactNode
}

function PopUpLayout(props: PopUpProps) {
    const dispatch = useAppDispatch();

    return (
        <div className={`${props.classname} outer`}>
            <div className={`${props.classname} inner`}>
                <div className={`${props.classname} close-pop-up-button-container`}>
                    <div className={`${props.classname} close-pop-up-button`}
                         onClick={() => dispatch(loginPopUp)}>
                        <span>X</span>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default PopUpLayout;