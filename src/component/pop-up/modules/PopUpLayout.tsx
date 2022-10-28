import React from "react";
import {useAppDispatch, useAppSelector} from "util/hooks";
import {closePopUp} from "../../../store/action";

type PopUpProps = {
    className: string
    children?: React.ReactNode
}

function PopUpLayout(props: PopUpProps) {
    const dispatch = useAppDispatch();

    const onClickClose = (e: React.MouseEvent<Element>) => {
        e.preventDefault()
        dispatch(closePopUp())
    }

    return (
        <div className={`${props.className} outer`}>
            <div className={`${props.className} inner`}>
                <div className={`${props.className} close-pop-up-button-container`}>
                    <div className={`${props.className} close-pop-up-button`}
                         onClick={() => onClickClose}>
                        <span>X</span>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default PopUpLayout;