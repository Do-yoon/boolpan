import React from "react";
import {useAppDispatch} from "util/hooks";
import {loginPopUp} from "../../store/action";

type PopUpProps = {
    className: string
    children?: React.ReactNode
}

function PopUpLayout(props: PopUpProps) {
    const dispatch = useAppDispatch();

    return (
        <div className={`${props.className} outer`}>
            <div className={`${props.className} inner`}>
                <div className={`${props.className} close-pop-up-button-container`}>
                    <div className={`${props.className} close-pop-up-button`}
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