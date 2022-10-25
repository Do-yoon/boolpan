import React, {useState, useRef} from "react";
import {useAppSelector} from "../../util/hooks";
import {RootState} from "../../store";
import CreateRoomPopUp from "../pop-up/CreateRoomPopUp";
import ChattingPopUp from "../pop-up/ChattingPopUp";
import LoginPopUp from "../pop-up/LoginPopUp";
import PasswordPopUp from "../pop-up/PasswordPopUp";
import SignUpPopUp from "../pop-up/SignUpPopUp";

interface PopUpContainerProps {
    children?: React.ReactNode
}

function PopUpContainer(): JSX.Element | null {
    const pop_up_string = useAppSelector((state: RootState) => state.popUp.name);


    console.log(pop_up_string)

    function components() {
        switch (pop_up_string) {
            case "LoginPopUp":
                return <LoginPopUp/>;
            case "ChattingPopUp":
                return <ChattingPopUp/>;
            case "SignUpPopUp":
                return <SignUpPopUp/>;
            case "CreateRoomPopUp":
                return <CreateRoomPopUp/>;
            case "PasswordPopUp":
                return <PasswordPopUp/>;
            default:
                return null;
        }
    }

    return components();
}

export default PopUpContainer;
